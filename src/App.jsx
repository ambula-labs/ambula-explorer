import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.scss";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import usePolkadotApiStore from "./stores/usePolkadotApiStore.jsx";

function App() {
	const [count, setCount] = useState(0);
	const setPolkadotApi = usePolkadotApiStore((state) => state.setWsProvider);

	useEffect(() => {
		setPolkadotApi(import.meta.env.VITE_WS_PROVIDER);
	}, []);

	return (
		<div className="App">
			<Navbar />
			<div id="detail">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default App;
