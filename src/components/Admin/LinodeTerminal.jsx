import React, { useEffect, useState } from "react";

const LinodeTerminal = () => {
	const [terminalOutput, setTerminalOutput] = useState("");

	useEffect(() => {
		const socket = new WebSocket("ws://your-linode-server-url");

		socket.onopen = () => {
			console.log("WebSocket connection established.");
		};

		socket.onmessage = (event) => {
			const message = event.data;
			setTerminalOutput((prevOutput) => prevOutput + message);
		};

		return () => {
			socket.close();
		};
	}, []);

	const handleCommandSubmit = (command) => {
		// Send the command to the server via the WebSocket connection
		// For example:
		// socket.send(command);
	};

	return (
		<div>
			<pre>{terminalOutput}</pre>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					const command = e.target.elements.command.value;
					handleCommandSubmit(command);
					e.target.reset();
				}}
			>
				<input type="text" name="command" placeholder="Enter command" />
				<button type="submit">Submit</button>
			</form>
		</div>
	);
};

export default LinodeTerminal;
