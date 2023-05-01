import { useEffect } from "react";
import lightVector from "@/assets/lightVector.svg";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./About.scss";

function About() {
	const ctrls = useAnimation();
	const ctrls2 = useAnimation();
	const ctrls3 = useAnimation();
	const ctrls4 = useAnimation();

	const [ref1, inView] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});
	const [ref2, inView2] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});
	const [ref3, inView3] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});
	const [ref4, inView4] = useInView({
		threshold: 0.5,
		triggerOnce: false,
	});

	useEffect(() => {
		if (inView) {
			ctrls.start("visible");
		}
		if (!inView) {
			ctrls.start("hidden");
		}
	}, [ctrls, inView]);

	useEffect(() => {
		if (inView2) {
			ctrls2.start("visible");
		}
		if (!inView2) {
			ctrls2.start("hidden");
		}
	}, [ctrls2, inView2]);

	useEffect(() => {
		if (inView3) {
			ctrls3.start("visible");
			console.log("visible");
		}
		if (!inView3) {
			ctrls3.start("hidden");
		}
	}, [ctrls3, inView3]);

	useEffect(() => {
		if (inView4) {
			ctrls4.start("visible");
		}
		if (!inView4) {
			ctrls4.start("hidden");
		}
	}, [ctrls4, inView4]);

	const phaseCardAnimation = {
		visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.2, 0.65, 0.3, 0.9] } },
		hidden: { opacity: 0, y: 100 },
	};

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
					<motion.div className="phaseCard phaseCard1" ref={ref1} animate={ctrls} initial="hidden" variants={phaseCardAnimation}>
						<div className="phaseTitle">Private Blockchain</div>
						<div className="phaseDescription">
							We will first release an open source version of the Ambula blockchain, based on the PoI algorithm in it's initial form. It
							will serve as a free and monitorable private blockchain network.
						</div>
					</motion.div>
					<motion.div className="phaseCard phaseCard2" ref={ref2} animate={ctrls2} initial="hidden" variants={phaseCardAnimation}>
						<div className="phaseTitle">Public blockchain with staking, private testnet</div>
						<div className="phaseDescription">
							We will then release an upgraded version of Ambula, supporting public access thanks to a modified version of the PoI
							algorithm. It will use staking as a way to ensure the consensus is reached and punish bad nodes. We will make our test on
							a private test network
						</div>
					</motion.div>
					<motion.div className="phaseCard phaseCard3" ref={ref3} animate={ctrls3} initial="hidden" variants={phaseCardAnimation}>
						<div className="phaseTitle">Launch of the public testnet</div>
						<div className="phaseDescription">
							We will allow anyone to access the test network, to get a last bit of user feedback and test the resilience of the
							algorithm.
						</div>
					</motion.div>
					<motion.div className="phaseCard phaseCard4" ref={ref4} animate={ctrls4} initial="hidden" variants={phaseCardAnimation}>
						<div className="phaseTitle">Public launch on mainnet</div>
						<div className="phaseDescription">Public launch on mainnet</div>
					</motion.div>
				</div>
			</div>
			<div className="buyContainer">
				<div className="buyHeader">
					<div className="ligne">&nbsp;</div>
					<div className="title">
						<span>How to buy</span>
						<span>Ambula</span>
					</div>
					<div className="subtitle">
						We at Ambula aim to use our reach to change the mentality around the globe and to have fun while doing so.
					</div>
					<div className="boxDecoration">&nbsp;</div>
				</div>
				<div className="stepContainer">
					<div className="stepCard stepCard1">
						<div className="topContainer">
							<span>1</span>
							Get MetaMask Wallet
						</div>
						<div className="bottomContainer">
							Go to <span>Metamask.io</span> and the Chrome extensions. Finish the setup and make sure to keep your secret phrase
							somewhere safe !
						</div>

						<motion.div
							drag
							dragElastic={0.2}
							dragSnapToOrigin={true}
							whileHover={{
								scale: 1.1,
							}}
							whileDrag={{
								scale: 0.9,
							}}
							className="stepCardPuce stepCardPuce1"
						>
							&nbsp;
						</motion.div>
					</div>
					<div className="stepCardBorder stepCard1">
						<div className="topContainer">
							<span>1</span>
							Get MetaMask Wallet
						</div>
						<div className="bottomContainer">
							Go to <span>Metamask.io</span> and the Chrome extensions. Finish the setup and make sure to keep your secret phrase
							somewhere safe !
						</div>
					</div>
					<div className="stepCard stepCard2">
						<div className="topContainer">
							<span>2</span>
							Send ETH to Metamask
						</div>
						<div className="bottomContainer">
							Once you have setup metamask, you can send ETH from an exchange like Kraken, Coinbase or Binance to your Metamask wallet
						</div>
						<motion.div
							drag
							dragElastic={0.2}
							dragSnapToOrigin={true}
							whileHover={{
								scale: 1.1,
							}}
							whileDrag={{
								scale: 0.9,
							}}
							className="stepCardPuce stepCardPuce2"
						>
							&nbsp;
						</motion.div>
					</div>
					<div className="stepCardBorder stepCard2">
						<div className="topContainer">
							<span>2</span>
							Send ETH to Metamask
						</div>
						<div className="bottomContainer">
							Once you have setup metamask, you can send ETH from an exchange like Kraken, Coinbase or Binance to your Metamask wallet
						</div>
					</div>
					<div className="stepCard stepCard3">
						<div className="topContainer">
							<span>3</span>
							Connect to Uniswap
						</div>
						<div className="bottomContainer">
							Go to <span>Uniswap.org</span> and click the “Use Uniswap” button. When Metamask ask for your signature go ahead and sign
							it.
						</div>
						<motion.div
							drag
							dragElastic={0.2}
							dragSnapToOrigin={true}
							whileHover={{
								scale: 1.1,
							}}
							whileDrag={{
								scale: 0.9,
							}}
							className="stepCardPuce stepCardPuce3"
						>
							&nbsp;
						</motion.div>
					</div>
					<div className="stepCardBorder stepCard3">
						<div className="topContainer">
							<span>3</span>
							Connect to Uniswap
						</div>
						<div className="bottomContainer">
							Go to <span>Uniswap.org</span> and click the “Use Uniswap” button. When Metamask ask for your signature go ahead and sign
							it.
						</div>
					</div>
					<div className="stepCard stepCard4">
						<div className="topContainer">
							<span>4</span>
							Swap your ETH for Ambula
						</div>
						<div className="bottomContainer">
							Set your percentage to 5-7% and buy an event amount of Ambula. Click on the swap button and make sure to set fast
							transaction speed in Metamask
						</div>
					</div>
					<div className="stepCardBorder stepCard4">
						<div className="topContainer">
							<span>4</span>
							Swap your ETH for Ambula
						</div>
						<div className="bottomContainer">
							Set your percentage to 5-7% and buy an event amount of Ambula. Click on the swap button and make sure to set fast
							transaction speed in Metamask
						</div>
					</div>
					<div className="stepCardLink1">&nbsp;</div>
					<div className="stepCardLink2">&nbsp;</div>
					<div className="stepCardLink3">&nbsp;</div>
				</div>
			</div>
			<img src={lightVector} className="light" alt="Light vector" />
			<img src={lightVector} className="light2" alt="Light vector" />
		</div>
	);
}

export default About;
