import "./AdminNode.scss";
import { useState, useEffect } from "react";
import "tippy.js/themes/light.css";
import { motion, AnimatePresence } from "framer-motion";
import Tippy from "@tippyjs/react";
import Power from "@/assets/admin/power.svg";
import Cmd from "@/assets/admin/command.svg";
import Delete from "@/assets/admin/delete.svg";
import LinodeTerminal from "./LinodeTerminal/LinodeTerminal";
import axios from "axios";
import { toast } from "react-toastify";

function AdminNode({ id, name, ip, dateStatusChanged, status, type }) {
	const [isLogOpen, setLogOpen] = useState(false);

	const rebootNode = async () => {
		try {
			await axios.post("http://139.177.181.107:3000/ambula/nodes/" + id + "/reboot");
		} catch (error) {
			console.error("Error rebooting the node:", error);
		}
	};

	const deleteNode = async () => {
		try {
			await axios.delete("http://139.177.181.107:3000/ambula/nodes/" + id);
		} catch (error) {
			console.error("Error deleting the node:", error);
		}
	};

	return (
		<div className="AdminNode">
			<div className="title">Ambula Node {name}</div>
			<div className="AdminNodeWrapper">
				<div className="AdminNodeHeader">
					<div className="AdminNodeHeaderPart">NAME</div>
					<div className="AdminNodeHeaderPart">STATUS</div>
					<div className="AdminNodeHeaderPart">SINCE</div>
					<div className="AdminNodeHeaderPart actionContainer">ACTIONS</div>
				</div>
				<div className="AdminNodeContainer">
					<div className="AdminNodeInfo">
						<div className="AdminNodeContainerPart">{name}</div>
						<div className="AdminNodeContainerPart">TODO</div>
						<div className="AdminNodeContainerPart">{dateStatusChanged}</div>
						<div className="AdminNodeContainerPart actionContainer">
							<motion.div
								whileHover={{
									scale: 1.1,
								}}
								whileTap={{ scale: 0.9 }}
								onClick={() => setLogOpen(!isLogOpen)}
							>
								<Tippy theme="ambula" content={<span className="tooltip">See Logs</span>}>
									<img className="run" src={Cmd} />
								</Tippy>
							</motion.div>
							<motion.div
								whileHover={{
									scale: 1.1,
								}}
								whileTap={{ scale: 0.9 }}
								onClick={() =>
									toast.promise(rebootNode(), {
										pending: `Rebooting Ambula Node ${name} 🏗️`,
										success: "Node Restarted 👌",
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
								<Tippy theme="ambula" content={<span className="tooltip">Reboot Node</span>}>
									<img className="power" src={Power} />
								</Tippy>
							</motion.div>
							<motion.div
								whileHover={{
									scale: 1.1,
								}}
								whileTap={{ scale: 0.9 }}
								className={name === "Alice" ? "disabled" : name === "Bob" ? "disabled" : ""}
								onClick={() =>
									name === "Alice"
										? null
										: name === "Bob"
										? null
										: toast.promise(deleteNode(), {
												pending: `Deleting Ambula Node ${name} 🗑️`,
												success: "Node Deleted 👌",
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
								<Tippy disabled={name === "Alice" ? true : name === "Bob" ? true : false} theme="ambula" content={<span className="tooltip">Delete Node</span>}>
									<img className="stop" src={Delete} />
								</Tippy>
							</motion.div>
						</div>
					</div>
					<AnimatePresence>
						<motion.div
							initial={{ height: 0, opacity: 0, marginTop: "-3vh" }}
							animate={{ height: isLogOpen ? 250 : 0, opacity: isLogOpen ? 1 : 0, marginTop: isLogOpen ? "0" : "-3vh" }}
							transition={{
								type: "spring",
								duration: 0.5,
							}}
							className="logContainer"
						>
							<LinodeTerminal ip={ip} />
						</motion.div>
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

export default AdminNode;
