import "./AdminNode.scss";
import { useState, useEffect } from "react";
import "tippy.js/themes/light.css";
import { motion, AnimatePresence } from "framer-motion";
import Tippy from "@tippyjs/react";
import Log from "@/assets/admin/logs.svg";
import Cmd from "@/assets/admin/command.svg";
import Delete from "@/assets/admin/delete.svg";

function AdminNode() {
	const [isLogOpen, setLogOpen] = useState(false);
	return (
		<div className="AdminNode">
			<div className="title">Ambula Node ALICE</div>
			<div className="AdminNodeWrapper">
				<div className="AdminNodeHeader">
					<div className="AdminNodeHeaderPart">NAME</div>
					<div className="AdminNodeHeaderPart">STATUS</div>
					<div className="AdminNodeHeaderPart">SINCE</div>
					<div className="AdminNodeHeaderPart">TYPE</div>
					<div className="AdminNodeHeaderPart actionContainer">ACTIONS</div>
				</div>
				<div className="AdminNodeContainer">
					<div className="AdminNodeInfo">
						<div className="AdminNodeContainerPart">NAME</div>
						<div className="AdminNodeContainerPart">STATUS</div>
						<div className="AdminNodeContainerPart">SINCE</div>
						<div className="AdminNodeContainerPart">TYPE</div>
						<div className="AdminNodeContainerPart actionContainer">
							<motion.div
								whileHover={{
									scale: 1.1,
								}}
								whileTap={{ scale: 0.9 }}
								onClick={() => setLogOpen(!isLogOpen)}
							>
								<Tippy theme="ambula" content={<span className="tooltip">See Logs</span>}>
									<img className="run" src={Log} />
								</Tippy>
							</motion.div>
							<motion.div
								whileHover={{
									scale: 1.1,
								}}
								whileTap={{ scale: 0.9 }}
								className="disabled"
							>
								<Tippy disabled={true} theme="ambula" content={<span className="tooltip">Run command</span>}>
									<img className="power" src={Cmd} />
								</Tippy>
							</motion.div>
							<motion.div
								whileHover={{
									scale: 1.1,
								}}
								whileTap={{ scale: 0.9 }}
								className="disabled"
							>
								<Tippy disabled={true} theme="ambula" content={<span className="tooltip">Delete Node</span>}>
									<img className="stop" src={Delete} />
								</Tippy>
							</motion.div>
						</div>
					</div>
					<AnimatePresence>
						{isLogOpen && (
							<motion.div
								initial={{ height: 0 }}
								animate={{ height: 250 }}
								exit={{ height: 0 }}
								transition={{
									type: "spring",
									duration: 0.5,
								}}
								className="logContainer"
							>
								&nbsp;
							</motion.div>
						)}
					</AnimatePresence>
				</div>
			</div>
		</div>
	);
}

export default AdminNode;
