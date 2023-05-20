import "./Admin.scss";
import AmbulaLogoLarge from "@/assets/AmbulaLogoLarge.svg";
import { useState, useEffect } from "react";
import lightVector from "@/assets/lightVector.svg";
import DashboardIcon from "@/assets/admin/dashboard.svg";
import Tippy from "@tippyjs/react";
import LeaveIcon from "@/assets/admin/exit.svg";
import MenuIcon from "@/assets/admin/menu.svg";
import usePeerListStore from "../../stores/usePeerListStore";
import usePolkadotApiStore from "../../stores/usePolkadotApiStore";
import useAdminParamStore from "../../stores/useAdminParamStore";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Run from "@/assets/admin/run.svg";
import Power from "@/assets/admin/power.svg";
import Stop from "@/assets/admin/stop.svg";
import AdminNode from "../../components/Admin/AdminNode";
import "tippy.js/themes/light.css";

function Admin() {
	const setIsAdminPage = useAdminParamStore((state) => state.setIsAdminPage);
	useEffect(() => {
		setIsAdminPage(true);
	}, []);

	const polkadotApiIsLoading = usePolkadotApiStore((state) => state.loading);
	const storedPeerList = usePeerListStore((state) => state.peerList);
	const storedBestNumber = usePeerListStore((state) => state.bestNumber);

	const [count, setCount] = useState(10);
	const [refreshPeerList, setRefreshPeerList] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(10);
			setRefreshPeerList((refreshPeerList) => !refreshPeerList); //
		}, 10000);

		const intervalPrint = setInterval(() => {
			setCount((count) => (count > 0 ? count - 0.1 : count));
		}, 100);

		return () => {
			clearInterval(interval);
			clearInterval(intervalPrint);
		};
	}, []);

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
					className="linkElem linkSelected"
				>
					<img src={DashboardIcon} />
					<span>Dashboard</span>
				</motion.div>
				<motion.div
					whileHover={{
						scale: 1.1,
					}}
					whileTap={{ scale: 0.9 }}
					onClick={(e) => {
						e.preventDefault();
						setIsAdminPage(false);
					}}
					className="linkElem linkLeave"
				>
					<img src={LeaveIcon} />
					<NavLink to="/">Leave</NavLink>
				</motion.div>

				<img src={lightVector} className="light" alt="Light vector" />
			</div>

			<div className="content">
				<div className="dashboard">
					<div className="dashboardLeft">
						<div className="dashboardTitleContainer">
							<img src={DashboardIcon} />
							<span className="dashboardTitle">Ambula Dashboard</span>
						</div>
						<div className="chainContainer">
							<div className="chainTitle">Blockchain status</div>
							<div className="chainStatusContainer">
								<div className="chainStatus">
									<div className="roundStatus">&nbsp;</div>
									Offline
								</div>
								<span>Since : 1min</span>
							</div>
							<div className="buttonContainer">
								<motion.div
									whileHover={{
										scale: 1.1,
									}}
									whileTap={{ scale: 0.9 }}
								>
									<Tippy theme="ambula" content={<span className="tooltip">Start</span>}>
										<img className="run" src={Run} />
									</Tippy>
								</motion.div>
								<motion.div
									whileHover={{
										scale: 1.1,
									}}
									whileTap={{ scale: 0.9 }}
									className="disabled"
								>
									<Tippy disabled={true} theme="ambula" content={<span className="tooltip">Reboot</span>}>
										<img className="power" src={Power} />
									</Tippy>
								</motion.div>
								<motion.div
									whileHover={{
										scale: 1.1,
									}}
									whileTap={{ scale: 0.9 }}
									className="disabled"
								>
									<Tippy disabled={true} theme="ambula" content={<span className="tooltip">Stop</span>}>
										<img className="stop" src={Stop} />
									</Tippy>
								</motion.div>
							</div>
						</div>
						<AdminNode />
						<div className="worldMapContainer"></div>
					</div>
					<div className="dashboardRight">
						<div className="activityContainer">
							<span className="activityTitle">Latest Activity</span>
							<div className="activityList">
								<div className="activityCard">Tmp</div>
								<div className="activityCard">Tmp</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Admin;
