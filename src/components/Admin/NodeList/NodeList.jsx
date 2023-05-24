import "./NodeList.scss";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdminNode from "./AdminNode/AdminNode";
import axios from "axios";
import { getTimeDifference } from "../../../functions/DateUtils";

function NodeList({ isParentFetching }) {
	const [nodeList, setNodeList] = useState([]);

	const fetchNodeList = async () => {
		try {
			if (!isParentFetching) {
				const response = await axios.get("http://139.177.181.107:3000/nodes");
				if (nodeList !== response.data) {
					setNodeList(response.data);
				}
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchNodeList();

		const interval = setInterval(() => {
			fetchNodeList();
		}, 60000); // Fetch chainStatus every minute

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		fetchNodeList();
	}, [isParentFetching]);

	return (
		<div className="nodeList">
			<AnimatePresence>
				{nodeList.map((item) => (
					<AdminNode key={item.id} id={item.id} ip={item.ip} name={item.name} status={item.status} dateStatusChanged={getTimeDifference(new Date(item.dateStatusChanged))} type={item.type} />
				))}
			</AnimatePresence>
		</div>
	);
}

export default NodeList;
