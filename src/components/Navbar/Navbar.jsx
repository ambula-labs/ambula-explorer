import { useState } from "react";
import { NavLink } from "react-router-dom";
import AmbulaLogoLarge from "@/assets/AmbulaLogoLarge.svg";
import UK from "@/assets/UK.png";
import { motion } from "framer-motion";
import Hamburger from "hamburger-react";
import useAdminParamStore from "../../stores/useAdminParamStore";
import "./Navbar.scss";

function Navbar() {
	const [isOpen, setOpen] = useState(false);
	const setIsAdminPage = useAdminParamStore((state) => state.setIsAdminPage);

	return (
		<div className="Navbar">
			<img src={AmbulaLogoLarge} className="ambulaLogo" alt="Ambula Logo Large" />
			<Hamburger className="hamburger" toggled={isOpen} toggle={setOpen} direction="left" />
			<div className={isOpen ? "rightContainer" : "rightContainer closed"}>
				<NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "activeRoute" : undefined)}>
					App
				</NavLink>
				<NavLink to="/product" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "activeRoute" : undefined)}>
					Product
				</NavLink>
				<NavLink to="/build" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "activeRoute" : undefined)}>
					Build
				</NavLink>
				<NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? "activeRoute" : undefined)}>
					About
				</NavLink>
				<motion.div
					className="enterApp"
					whileHover={{
						scale: 1.1,
					}}
					whileTap={{ scale: 0.9 }}
					onClick={(e) => {
						e.preventDefault();
						setIsAdminPage(true);
					}}
				>
					<NavLink to="/admin" className={({ isActive }) => (isActive ? "activeRoute btnActive" : undefined)}>
						Admin Pannel
					</NavLink>
				</motion.div>
				<div className="languageSelector">
					<img src={UK} className="languageImage" alt="Language Image" /> EN
				</div>
			</div>
		</div>
	);
}

export default Navbar;
