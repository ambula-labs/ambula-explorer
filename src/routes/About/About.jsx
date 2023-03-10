import { useRef } from "react";
import lightVector from "@/assets/lightVector.svg";
import "./About.scss";

function About() {
	return (
		<div className="About">
			<div className="aboutContainer">
				<div className="aboutHeader">
					<div className="subtitle">ABOUT US</div>
					<div className="title">
						<span>We are building a</span>
						<span className="betterFuture">better future</span>
					</div>
				</div>
				<div className="aboutContent">
					<span>
						A group of friends, who shared a passion for cryptography and blockchain technology, came up with the idea of creating a truly
						decentralized and secure proof-of-work cryptocurrency that could resist attacks and manipulation. They decided to combine
						their skills and knowledge to design Ambula.
					</span>
					<span>
						The team worked tirelessly for months, designing, testing, and refining the Ambula algorithm to make it secure and efficient.
						They also created a user-friendly interface and started building a community of supporters who shared their vision.
					</span>
					<span>
						Even though Ambula has not yet launched, the team is excited about the potential of their cryptocurrency and the positive
						impact it could have on the world. They hope that by creating a truly decentralized and secure proof-of-work system, they can
						help to make the world a better place for everyone who uses cryptocurrency.
					</span>
				</div>
			</div>
			<div className="roadmapContainer">
				<div className="roadmapHeader">
					<div className="ligne">&nbsp;</div>
					<div className="title">Our Roadmap</div>
				</div>
				<div className="roadmapContent">
					<div className="ligneCentrale">&nbsp;</div>
					<div className="currentRond">&nbsp;</div>
					<div className="rond rond1">&nbsp;</div>
					<div className="rond rond2">&nbsp;</div>
					<div className="rond rond3">&nbsp;</div>
					<div className="rond rond4">&nbsp;</div>
					<div className="phaseCard phaseCard1">
						<div className="phaseTitle">Private Blockchain</div>
						<div className="phaseDescription">
							We will first release an open source version of the Ambula blockchain, based on the PoI algorithm in it's initial form. It
							will serve as a free and monitorable private blockchain network.
						</div>
					</div>
					<div className="phaseCard phaseCard2">
						<div className="phaseTitle">Public blockchain with staking, private testnet</div>
						<div className="phaseDescription">
							We will then release an upgraded version of Ambula, supporting public access thanks to a modified version of the PoI
							algorithm. It will use staking as a way to ensure the consensus is reached and punish bad nodes. We will make our test on
							a private test network
						</div>
					</div>
					<div className="phaseCard phaseCard3">
						<div className="phaseTitle">Launch of the public testnet</div>
						<div className="phaseDescription">
							We will allow anyone to access the test network, to get a last bit of user feedback and test the resilience of the
							algorithm.
						</div>
					</div>
					<div className="phaseCard phaseCard4">
						<div className="phaseTitle">Public launch on mainnet</div>
						<div className="phaseDescription">Public launch on mainnet</div>
					</div>
				</div>
			</div>
			<div className="buyContainer">&nbsp;</div>
			<img src={lightVector} className="light" alt="Light vector" />
			<img src={lightVector} className="light2" alt="Light vector" />
		</div>
	);
}

export default About;
