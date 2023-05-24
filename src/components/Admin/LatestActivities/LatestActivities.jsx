import "./LatestActivities.scss";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getTimeDifference } from "../../../functions/DateUtils";
import axios from "axios";

function LatestActivities({ isParentFetching }) {
	const [data, setData] = useState([]);
	const [initialRender, setInitialRender] = useState(true);

	const fetchData = async () => {
		try {
			if (!isParentFetching) {
				const response = await axios.get("http://139.177.181.107:3000/activities?limit=8");
				setData(response.data);
				setInitialRender(false);
			}
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	useEffect(() => {
		fetchData();

		const interval = setInterval(() => {
			fetchData();
		}, 60000); // Fetch data every minute

		return () => {
			clearInterval(interval);
		};
	}, []);

	useEffect(() => {
		fetchData();
	}, [isParentFetching]);

	//Animation utilisée pour nos Cards présentes dans la liste des derniers blocks
	const animations = {
		initial: { scale: 0, opacity: 0 },
		animate: { scale: 1, opacity: 1 },
		exit: { scale: 0, opacity: 0 },
	};

	return (
		<div className="latestActivities">
			<span className="activityTitle">Latest Activity</span>
			<div className="activityList">
				<AnimatePresence>
					{data.map((item, index) => (
						<motion.div key={item.id} className="activityCard" layout initial="initial" animate="animate" exit="exit" variants={animations} transition={{ delay: initialRender ? index * 0.3 : 0, type: "spring", damping: 10, stiffness: 100 }}>
							<div className="activityHeader">{getTimeDifference(new Date(item.date))}</div>
							<div className="activityContent">{item.message}</div>
						</motion.div>
					))}
				</AnimatePresence>
			</div>
		</div>
	);
}

export default LatestActivities;
