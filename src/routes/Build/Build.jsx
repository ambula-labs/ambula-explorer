import { useRef, useEffect } from "react";
import lightVector from "@/assets/lightVector.svg";
import AmbulaLogoLarge from "@/assets/AmbulaLogoLarge.svg";
import "./Build.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import WaitingList from "@/assets/build/WaitingList.svg";
import Message from "@/assets/build/Message.svg";
import Configure from "@/assets/build/Configure.svg";

function Build() {
	const screen2 = useRef(null);
	const executeScroll = () =>
		screen2.current.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
		});

	return (
		<div className="Build">
			<div className="buildContainer">
				<div className="leftContainer">
					<div className="titleContainer">
						Run your own
						<span class="colored">Ambula Node</span>
					</div>
					<div className="contentContainer">
						Go green with Ambula <br /> Harness the power of crypto while <br />
						minimizing your environmental impact !
					</div>
					<div className="buttonContainer">
						<motion.button className="startedBtn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							Get Started
						</motion.button>
						<motion.button className="learnBtn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
							Learn More
							<div className="border">&nbsp;</div>
						</motion.button>
					</div>
				</div>
				<div className="rightContainer">
					<div className="terminalBehind">
						<div className="terminalTop">
							<img src={AmbulaLogoLarge} />
						</div>
					</div>
					<div className="terminalFront">
						<div className="terminalTop">
							<div className="rond rond1">&nbsp;</div>
							<div className="rond">&nbsp;</div>
							<div className="rond rond3">&nbsp;</div>
						</div>
						<div className="terminalBottom">
							<TypeAnimation
								sequence={[
									"npm build ambula", // Types 'One'
									1000, // Waits 1s
									"npm install dependancies", // Deletes 'One' and types 'Two'
									2000, // Waits 2s
									"npm run ambula",
									4000,
								]}
								wrapper="span"
								cursor={true}
								repeat={Infinity}
								className="textanim"
							/>
							<div className="ligne">&nbsp;</div>
							<div className="ligne1">&nbsp;</div>
							<div className="ligne2">&nbsp;</div>
							<div className="ligne1">&nbsp;</div>
							<span>✨ Done in 5.60s.</span>
						</div>
					</div>
				</div>
			</div>
			<div className="learnMoreContainer">
				<div className="learnMoreBackground"></div>
				<div className="learnMoreTitle">
					Quick Guide
					<span>Get started together</span>
				</div>
				<div className="learnMoreSteps">
					<div className="learnMoreCard card1">
						<div className="cardTitle">Join the Waiting list</div>
						<div className="imgContainer">
							<img src={WaitingList} />
						</div>
						<div className="cardDescription">
							To build an Ambula node, you first need to join the waitlist by signing up on the Ambula website. Once you've signed up,
							you'll be added to the queue for node approvals.
						</div>
					</div>
					<div className="learnMoreCard">
						<div className="cardTitle">Wait the approval</div>
						<div className="imgContainer">
							<img className="img2" src={Message} />
						</div>
						<div className="cardDescription">
							After joining the waitlist, you'll need to wait for approval from the Ambula team. They'll send you an email letting you
							know if you've been approved to build a node or if you're still on the waiting list.
						</div>
					</div>
					<div className="learnMoreCard">
						<div className="cardTitle">Configure the node</div>
						<div className="imgContainer">
							<img className="img3" src={Configure} />
						</div>
						<div className="cardDescription">
							Once you've received approval, it's time to configure your Ambula node. This involves setting up the hardware and
							connecting to the Ambula network. Ambula provides detailed instructions to guide you through the process.
						</div>
					</div>
				</div>
			</div>
			<img src={lightVector} className="light" alt="Light vector" />
			<img src={lightVector} className="light2" alt="Light vector" />
		</div>
	);
}

export default Build;
