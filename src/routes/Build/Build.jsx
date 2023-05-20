import { useRef, useEffect } from "react";
import lightVector from "@/assets/lightVector.svg";
import AmbulaLogoLarge from "@/assets/AmbulaLogoLarge.svg";
import AmbulaLogoShort from "@/assets/AmbulaLogoSmall.svg";
import "./Build.scss";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import WaitingList from "@/assets/build/WaitingList.svg";
import Message from "@/assets/build/Message.svg";
import Configure from "@/assets/build/Configure.svg";
import UserSVG from "@/assets/build/User.svg";
import MailSVG from "@/assets/build/Mail.svg";
import ArrowRightSVG from "@/assets/build/ArrowRight.svg";
import useAdminParamStore from "../../stores/useAdminParamStore";

function Build() {
	const setIsAdminPage = useAdminParamStore((state) => state.setIsAdminPage);
	useEffect(() => {
		setIsAdminPage(false);
	}, []);

	const screen = useRef(null);
	const screen2 = useRef(null);
	const executeScroll = (screenId) => {
		if (screenId === 1) {
			screen.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "nearest",
			});
		} else {
			screen2.current.scrollIntoView({
				behavior: "smooth",
				block: "nearest",
				inline: "nearest",
			});
		}
	};

	const textMotion = {
		rest: {
			scale: 1,
		},
		hover: {
			scale: 1.1,
		},
	};

	const textMotion2 = {
		rest: {
			x: 0,
			scale: 1,
		},
		hover: {
			x: -10,
			scale: 1.1,
		},
	};

	return (
		<div className="Build">
			<div className="buildContainer">
				<div className="leftContainer">
					<div className="titleContainer">
						Run your own
						<span className="colored">Ambula Node</span>
					</div>
					<div className="contentContainer">
						Go green with Ambula <br /> Harness the power of crypto while <br />
						minimizing your environmental impact !
					</div>
					<div className="buttonContainer">
						<motion.button className="startedBtn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => executeScroll(2)}>
							Get Started
						</motion.button>
						<motion.button className="learnBtn" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={() => executeScroll(1)}>
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
			<div className="learnMoreContainer" ref={screen}>
				<div className="learnMoreBackground"></div>
				<div className="starContainer">
					<div id="stars"></div>
					<div id="stars2"></div>
					<div id="stars3"></div>
				</div>
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
						<div className="cardDescription">To build an Ambula node, you first need to join the waitlist by signing up on the Ambula website. Once you've signed up, you'll be added to the queue for node approvals.</div>
					</div>
					<div className="learnMoreCard">
						<div className="cardTitle">Wait the approval</div>
						<div className="imgContainer">
							<img className="img2" src={Message} />
						</div>
						<div className="cardDescription">After joining the waitlist, you'll need to wait for approval from the Ambula team. They'll send you an email letting you know if you've been approved to build a node or if you're still on the waiting list.</div>
					</div>
					<div className="learnMoreCard">
						<div className="cardTitle">Configure the node</div>
						<div className="imgContainer">
							<img className="img3" src={Configure} />
						</div>
						<div className="cardDescription">Once you've received approval, it's time to configure your Ambula node. This involves setting up the hardware and connecting to the Ambula network. Ambula provides detailed instructions to guide you through the process.</div>
					</div>
				</div>
			</div>
			<div className="waitingListFormContainer" ref={screen2}>
				<div className="logoTopContainer">
					<div className="logoTopSubcontainer">
						<div className="logoTopSubsubcontainer">
							<img src={AmbulaLogoShort} />
						</div>
					</div>
				</div>
				<div className="titleContainer">
					<span>AMBULA CRYPTO SYSTEM</span>
					<div className="title">
						Join the Waiting list for the
						<span>Official Release</span>
					</div>
				</div>

				<div className="formContainer">
					<div className="inputsContainer">
						<motion.div initial="rest" whileHover="hover" animate="rest" className="inputContainer">
							<motion.input variants={textMotion} placeholder="Full name..." />
							<motion.img variants={textMotion2} src={UserSVG} />
						</motion.div>
						<motion.div initial="rest" whileHover="hover" animate="rest" className="inputContainer">
							<motion.input variants={textMotion} placeholder="Email address..." />
							<motion.img variants={textMotion2} src={MailSVG} />
						</motion.div>
					</div>
					<motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
						Continue
						<img src={ArrowRightSVG} />
					</motion.button>
				</div>
			</div>
			<img src={lightVector} className="light" alt="Light vector" />
			<img src={lightVector} className="light2" alt="Light vector" />
		</div>
	);
}

export default Build;
