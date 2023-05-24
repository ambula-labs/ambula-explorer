import "./Admin.scss";
import AmbulaLogoLarge from "@/assets/AmbulaLogoLarge.svg";
import { useState, useEffect } from "react";
import lightVector from "@/assets/lightVector.svg";
import DashboardIcon from "@/assets/admin/dashboard.svg";
import BenchmarkIcon from "@/assets/admin/benchmark.svg";
import Tippy from "@tippyjs/react";
import LeaveIcon from "@/assets/admin/exit.svg";
import MenuIcon from "@/assets/admin/menu.svg";
import usePeerListStore from "../../stores/usePeerListStore";
import usePolkadotApiStore from "../../stores/usePolkadotApiStore";
import useAdminParamStore from "../../stores/useAdminParamStore";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import Run from "@/assets/admin/run.svg";
import AddNode from "@/assets/admin/add-node.svg";
import Stop from "@/assets/admin/stop.svg";
import NodeList from "../../components/Admin/NodeList/NodeList";
import "tippy.js/themes/light.css";
import LatestActivities from "../../components/Admin/LatestActivities/LatestActivities";
import { getTimeDifference } from "../../functions/DateUtils";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Benchmark from "../../components/Admin/Benchmark/Benchmark";

function Admin() {
	const setIsAdminPage = useAdminParamStore((state) => state.setIsAdminPage);
	useEffect(() => {
		setIsAdminPage(true);
	}, []);

	const [isAdminDashboard, setIsAdminDashboard] = useState(true);

	const setPolkadotApi = usePolkadotApiStore((state) => state.setWsProvider);
	const polkadotApiIsLoading = usePolkadotApiStore((state) => state.loading);

	const [isApiDown, setIsApiDown] = useState(true);
	const [chainStatus, setChainStatus] = useState([]);
	const [isFetching, setIsFetching] = useState(true);

	const fetchChainStatus = async () => {
		try {
			setIsFetching(true);
			const response = await axios.get("http://139.177.181.107:3000/chain-infos");
			if (chainStatus !== response.data) {
				setChainStatus(response.data);
				if (response.data.status === "online") {
					const responseNode = await axios.get("http://139.177.181.107:3000/nodes");
					setPolkadotApi("ws://" + responseNode.data[0].ip + ":9944");
				} else {
					setPolkadotApi("wss://rpc.polkadot.io");
				}
				setIsFetching(false);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const startAmbula = async () => {
		try {
			setIsFetching(true);
			await axios.post("http://139.177.181.107:3000/ambula/start");
			const response = await axios.get("http://139.177.181.107:3000/chain-infos");
			setChainStatus(response.data);
			const responseNode = await axios.get("http://139.177.181.107:3000/nodes");
			setPolkadotApi("ws://" + responseNode.data[0].ip + ":9944");
			setIsFetching(false);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const addNode = async () => {
		try {
			await axios.post("http://139.177.181.107:3000/ambula/nodes");
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const stopAmbula = async () => {
		try {
			setIsFetching(true);
			await axios.post("http://139.177.181.107:3000/ambula/stop");
			const response = await axios.get("http://139.177.181.107:3000/chain-infos");
			setChainStatus(response.data);
			setPolkadotApi("wss://rpc.polkadot.io");
			setIsFetching(false);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchChainStatus();

		const interval = setInterval(() => {
			fetchChainStatus();
		}, 60000); // Fetch chainStatus every minute

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		if (chainStatus != [] && chainStatus.status != undefined) {
			setIsApiDown(false);
		} else {
			setIsApiDown(true);
		}
	}, [chainStatus]);

	const [isLeftBarOpen, setIsLeftBarOpen] = useState(true);

	return (
		<div className="Admin">
			<img src={MenuIcon} className={isLeftBarOpen ? "menuIcon menuIconOpen" : "menuIcon"} onClick={() => setIsLeftBarOpen(!isLeftBarOpen)} />

			<div className={isLeftBarOpen ? "leftBar leftBarOpen" : "leftBar"}>
				<img className="ambulaLogo" src={AmbulaLogoLarge} />
				<motion.div
					whileHover={{
						scale: 1.1,
					}}
					whileTap={{ scale: 0.9 }}
					className={isAdminDashboard ? "linkElem linkSelected" : "linkElem"}
					onClick={() => setIsAdminDashboard(true)}
				>
					<img src={DashboardIcon} />
					<span>Dashboard</span>
				</motion.div>
				<motion.div
					whileHover={{
						scale: 1.1,
					}}
					whileTap={{ scale: 0.9 }}
					className={isAdminDashboard ? "linkElem" : "linkElem linkSelected"}
					onClick={() => setIsAdminDashboard(false)}
				>
					<img src={BenchmarkIcon} />
					<span>Benchmark</span>
				</motion.div>
				<NavLink to="/">
					<motion.div
						whileHover={{
							scale: 1.1,
						}}
						whileTap={{ scale: 0.9 }}
						onClick={(e) => {
							setIsAdminPage(false);
						}}
						className="linkElem linkLeave"
					>
						<img src={LeaveIcon} />
						Leave
					</motion.div>
				</NavLink>

				<img src={lightVector} className="light" alt="Light vector" />
			</div>

			<div className={isLeftBarOpen ? "content contentOpen" : "content"}>
				<AnimatePresence>
					<motion.div
						animate={{ height: isAdminDashboard ? "100vh" : 0, opacity: isAdminDashboard ? 1 : 0, marginTop: isAdminDashboard ? "0" : "-100vh" }}
						transition={{
							type: "spring",
							duration: 0.5,
						}}
						className="dashboard"
					>
						<div className="dashboardLeft">
							<div className="dashboardTitleContainer">
								<img src={DashboardIcon} />
								<div className="dashboardTitle">Ambula Dashboard {isApiDown && <span>API DOWN</span>}</div>
							</div>
							<div className="chainContainer">
								<div className="chainTitle">Blockchain status</div>
								<div className="chainStatusContainer">
									<div className={chainStatus.status === undefined ? "chainStatus undefined" : chainStatus.status ? "chainStatus online" : "chainStatus offline"}>
										<div className="roundStatus">&nbsp;</div>
										{chainStatus.status === undefined ? "Fetching" : chainStatus.status ? "Online" : "Offline"}
									</div>
									<span>Since : {chainStatus.dateStatusChanged === undefined ? "/" : getTimeDifference(new Date(chainStatus.dateStatusChanged))}</span>
								</div>
								<div className="buttonContainer">
									<motion.div
										whileHover={{
											scale: 1.1,
										}}
										whileTap={{ scale: 0.9 }}
										className={chainStatus.status === undefined ? "disabled" : chainStatus.status ? "disabled" : ""}
										onClick={
											chainStatus.status
												? null
												: () =>
														toast.promise(startAmbula(), {
															pending: "Starting Ambula Chain 🚀 (≈5min)",
															success: "Ambula Running 👌",
															error: "API Error 🤯",
															position: "top-center",
															autoClose: 5000,
															hideProgressBar: false,
															closeOnClick: true,
															pauseOnHover: true,
															draggable: true,
															progress: undefined,
															theme: "dark",
														})
										}
									>
										<Tippy disabled={chainStatus.status === undefined ? true : chainStatus.status} theme="ambula" content={<span className="tooltip">Start</span>}>
											<img className="run" src={Run} />
										</Tippy>
									</motion.div>
									<motion.div
										whileHover={{
											scale: 1.1,
										}}
										whileTap={{ scale: 0.9 }}
										className={chainStatus.status === undefined ? "disabled" : !chainStatus.status ? "disabled" : ""}
										onClick={
											!chainStatus.status
												? null
												: () =>
														toast.promise(addNode(), {
															pending: "Adding an Ambula Node ➕",
															success: "Ambula Node Added 👌",
															error: "API Error 🤯",
															position: "top-center",
															autoClose: 5000,
															hideProgressBar: false,
															closeOnClick: true,
															pauseOnHover: true,
															draggable: true,
															progress: undefined,
															theme: "dark",
														})
										}
									>
										<Tippy disabled={chainStatus.status === undefined ? true : !chainStatus.status} theme="ambula" content={<span className="tooltip">Add Node</span>}>
											<img className="power" src={AddNode} />
										</Tippy>
									</motion.div>
									<motion.div
										whileHover={{
											scale: 1.1,
										}}
										whileTap={{ scale: 0.9 }}
										className={chainStatus.status === undefined ? "disabled" : !chainStatus.status ? "disabled" : ""}
										onClick={
											!chainStatus.status
												? null
												: () =>
														toast.promise(stopAmbula(), {
															pending: "Stopping Ambula Chain ⏳",
															success: "Ambula Chain Stopped 👌",
															error: "API Error 🤯",
															position: "top-center",
															autoClose: 5000,
															hideProgressBar: false,
															closeOnClick: true,
															pauseOnHover: true,
															draggable: true,
															progress: undefined,
															theme: "dark",
														})
										}
									>
										<Tippy disabled={chainStatus.status === undefined ? true : !chainStatus.status} theme="ambula" content={<span className="tooltip">Stop</span>}>
											<img className="stop" src={Stop} />
										</Tippy>
									</motion.div>
								</div>
							</div>
							<div className="nodeListWrapper">{!isFetching && <NodeList className="nodeListWrapper" isParentFetching={isFetching} />}</div>
							<div className="worldMapContainer"></div>
						</div>
						<div className="separator">
							<div>&nbsp;</div>
						</div>
						<div className="dashboardRight">
							<LatestActivities isParentFetching={isFetching} />
						</div>
					</motion.div>
				</AnimatePresence>

				<AnimatePresence>
					<motion.div
						animate={{ height: !isAdminDashboard ? "100vh" : 0, opacity: !isAdminDashboard ? 1 : 0, marginTop: !isAdminDashboard ? "100vh" : "200vh" }}
						transition={{
							type: "spring",
							duration: 0.5,
						}}
						className="benchmark"
					>
						&nbsp;
						{/* {!polkadotApiIsLoading && <Benchmark />} */}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
}

export default Admin;
