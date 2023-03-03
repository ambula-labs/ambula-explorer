import { useRef } from "react";
import lightVector from "@/assets/lightVector.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Github from "@/assets/github.svg";
import Discord from "@/assets/discord.svg";
import Mail from "@/assets/telegram-alt.svg";
import Twitter from "@/assets/twitter.svg";
import Youtube from "@/assets/youtube.svg";
import { motion } from "framer-motion";
import TextAnim from "@/components/TextAnim/TextAnim";
import { Canvas } from "@react-three/fiber";

import "./Landing.scss";
import AmbulaModel from "../../components/Models/AmubulaModel";

function Landing() {
	const screen2 = useRef(null);
	const executeScroll = () =>
		screen2.current.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
		});

	return (
		<div className="Landing">
			<div className="landingContainer">
				<div className="leftContainer">
					<div className="title">
						<div className="t1">
							<TextAnim text="The first Blockchain using" />
						</div>
						<div className="t2">
							<TextAnim text="Proof of Interaction" />
						</div>
					</div>
					<div className="content">
						Get started with a new client-puzzle called
						Proof-of-Interaction to define a new energy-efficient
						Blockchain protocol.
					</div>
					<motion.button
						className="initiateButton"
						whileHover={{
							scale: 1.1,
						}}
						whileTap={{ scale: 0.9 }}
					>
						<span>Initiate the change</span>
						<FontAwesomeIcon icon={faArrowRight} />
					</motion.button>
				</div>
				<Canvas
					flat
					camera={{
						fov: 30,
						near: 1,
						far: 20,
						position: [12, 5, 8],
					}}
					className="ambulaModel"
				>
					<AmbulaModel />
				</Canvas>
			</div>
			<div className="learnMoreContainer">
				<motion.div
					className="learnMore"
					whileHover={{
						scale: 1.1,
					}}
					whileTap={{ scale: 0.9 }}
					onClick={executeScroll}
				>
					<span>Learn More</span>
					<FontAwesomeIcon
						className="angle"
						icon={faAngleDown}
						bounce
					/>
				</motion.div>
				<div className="appLogoContainer">
					<img
						src={Youtube}
						className="appLogo youtube"
						alt="Youtube logo"
					/>
					<img
						src={Twitter}
						className="appLogo twitter"
						alt="Twitter logo"
					/>
					<img src={Mail} className="appLogo" alt="Mail logo" />
					<img src={Discord} className="appLogo" alt="Discord logo" />
					<img
						src={Github}
						className="appLogo github"
						alt="Github logo"
					/>
				</div>
			</div>
			<img src={lightVector} className="light" alt="Light vector" />
			<img src={lightVector} className="light2" alt="Light vector" />
			<div class="screen screen2" ref={screen2}>
				<div className="titleScreen">
					The <span>Environmental•Future</span> is now
				</div>
			</div>
			<div class="screen screen3">
				<div className="titleScreen">
					<div><span>Monitoring</span></div>
					<div>Real-Time Transaction</div>
				</div>
			</div>
			<div class="screen screen4">
				<div className="titleScreen">
					<div>Transaction Enabled</div>
					<div><span>Wallet</span></div>
				</div>
			</div>
			<div class="screen screen5">
				<div className="titleScreen">
					<div>Take part of our <span>fast</span></div>
					<div><span>growing</span> community</div>
				</div>
				<div className="growingFastContainer">
					<div className="growingFastCard"><img src={lightVector} className="growingFastLight" alt="Light vector" /></div>
					<div className="growingFastCard big"><img src={lightVector} className="growingFastLight" alt="Light vector" /></div>
					<div className="growingFastCard"><img src={lightVector} className="growingFastLight" alt="Light vector" /></div>
				</div>
			</div>
		</div>
	);
}

export default Landing;
