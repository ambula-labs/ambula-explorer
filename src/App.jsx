import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.scss";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import usePolkadotApiStore from "./stores/usePolkadotApiStore.jsx";
import useAdminParamStore from "./stores/useAdminParamStore.jsx";

function App() {
	const setPolkadotApi = usePolkadotApiStore((state) => state.setWsProvider);
	const isAdminPage = useAdminParamStore((state) => state.isAdminPage);

	useEffect(() => {
		setPolkadotApi(import.meta.env.VITE_WS_PROVIDER);
	}, []);

	return (
		<div className="App">
			{!isAdminPage && <Navbar />}
			<div id="detail">
				<Outlet />
			</div>
			{!isAdminPage && <Footer />}
		</div>
	);
}

export default App;
