import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import "./App.scss";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer.jsx";
import usePolkadotApiStore from "./stores/usePolkadotApiStore.jsx";
import useAdminParamStore from "./stores/useAdminParamStore.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const setPolkadotApi = usePolkadotApiStore((state) => state.setWsProvider);
	const isAdminPage = useAdminParamStore((state) => state.isAdminPage);

	// useEffect(() => {
	// 	setPolkadotApi("wss://rpc.polkadot.io");
	// }, []);

	return (
		<div className="App">
			<ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="dark" />
			{!isAdminPage && <Navbar />}
			<div id="detail">
				<Outlet />
			</div>
			{!isAdminPage && <Footer />}
		</div>
	);
}

export default App;
