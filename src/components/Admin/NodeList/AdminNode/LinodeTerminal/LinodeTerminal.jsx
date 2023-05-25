import "./LinodeTerminal.scss";
import React, { useEffect, useState } from "react";
const LinodeTerminal = ({ ip }) => {
	const [terminalOutput, setTerminalOutput] = useState("");
	const [socket, setSocket] = useState(null);

	useEffect(() => {
		let socketLocal = JSON.parse(localStorage.getItem("websocket" + ip));
		console.log(socketLocal);
		if (!socketLocal || (typeof socketLocal === "object" && Object.keys(socketLocal).length === 0)) {
			const newSocket = new WebSocket("ws://" + ip + ":8080");

			console.log(newSocket);
			setSocket(newSocket);
		} else {
			setSocket(socketLocal);
		}
		return () => {
			if (socket) {
				localStorage.setItem("websocket", JSON.stringify(socket));
			}
		};
	}, []);

	useEffect(() => {
		if (socket) {
			localStorage.setItem("websocket" + ip, JSON.stringify(socket));
			socket.onmessage = (event) => {
				const message = event.data;
				setTerminalOutput((prevOutput) => prevOutput + "\n" + message);
			};
		}
	}, [socket]);

	return (
		<div className="linodeTerminal">
			<pre>{terminalOutput}</pre>
		</div>
	);
};

export default LinodeTerminal;
