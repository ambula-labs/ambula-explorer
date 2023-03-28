import { useState, useEffect } from "react";
import reactLogo from "@/assets/react.svg";
import lightVector from "@/assets/lightVector.svg";
import violetLightVector from "@/assets/violetLightVector.svg";
import AmbulaLogoShort from "@/assets/AmbulaLogoSmall.svg";
import EtherumLogo from "@/assets/eth-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faCircleInfo, faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Toggle from "react-toggle";
import BlockList from "../../components/BlockList/BlockList";
import "./Product.scss";
import usePeerListStore from "../../stores/usePeerListStore";
import PeerList from "../../components/PeerList/PeerList";
import usePolkadotApiStore from "../../stores/usePolkadotApiStore";

function Product() {
	const [isCurrentMarketPrice, setIsCurrentMarketPrice] = useState(true);
	const polkadotApiIsLoading = usePolkadotApiStore((state) => state.loading);
	const storedPeerList = usePeerListStore((state) => state.peerList);
	const storedBestNumber = usePeerListStore((state) => state.bestNumber);

	function toggleMarketPrice() {
		setIsCurrentMarketPrice(!isCurrentMarketPrice);
	}

	const [count, setCount] = useState(10);
	const [refreshPeerList, setRefreshPeerList] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setCount(10);
			setRefreshPeerList((refreshPeerList) => !refreshPeerList); //
		}, 10000);

		const intervalPrint = setInterval(() => {
			setCount((count) => (count > 0 ? count - 0.1 : count));
		}, 100);

		return () => {
			clearInterval(interval);
			clearInterval(intervalPrint);
		};
	}, []);

	useEffect(() => {
		console.log(isCurrentMarketPrice);
	}, [isCurrentMarketPrice]);

	return (
		<div className="Product">
			<div className="cryptoHeader">
				<div className="leftHeader">
					<div className="titleHeader">Cryptocurrency | Coin</div>
					<div className="informationHeader">
						<div className="ambulaLogoSmall">
							<img src={AmbulaLogoShort} alt="Ambula Logo Small" />
						</div>
						<div className="informationContainer">
							<div className="informationTitle">Ambula</div>
							<div className="informationContent">
								<span>$ 2,400.80</span>
								<div className="progress">
									<FontAwesomeIcon icon={faCaretUp} />
									0,50%
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="rightHeader"></div>
			</div>
			<div className="cryptoStats">
				<div className="statsBarBackground">
					<div className="statsContainer">
						<div className="statsTitle">Market cap</div>
						<div className="statsContent">
							<span>$</span>
							275,580,894
						</div>
						<div className="statsProgress up">
							<FontAwesomeIcon icon={faCaretUp} /> 0,50%
						</div>
					</div>
					<div className="statsContainer">
						<div className="statsTitle">Fully Diluted</div>
						<div className="statsContent">
							<span>$</span>
							274,736,646
						</div>
						<div className="statsProgress down">
							<FontAwesomeIcon icon={faCaretDown} /> 0,75%
						</div>
					</div>
					<div className="statsContainer">
						<div className="statsTitle">Volume</div>
						<div className="statsContent">
							<span>$</span>
							23,274,917
						</div>
						<div className="statsProgress up"></div>
					</div>
					<div className="statsContainer">
						<div className="statsTitle">Circulating supply</div>
						<div className="statsContent">
							116,275,400
							<span>AMB</span>
						</div>
						<div className="statsProgress amb">116,275,400</div>
					</div>
				</div>
				<div className="statsBar"></div>
				<div className="statsBottom">
					<div className="statsOrder">
						<div className="orderTitle">
							Create Order
							<span>
								<FontAwesomeIcon icon={faCircleInfo} /> How it works
							</span>
						</div>
						<div className="hr">&nbsp;</div>
						<div className="tradingContainer">
							Trading Pair
							<div className="orderCardContainer">
								<div className="orderCard">
									<div className="orderCardLeft">
										<div className="orderCardImage">
											<img src={AmbulaLogoShort} alt="Ambula Logo Small" />
											<img src={lightVector} className="lightCard amb" alt="Light vector" />
										</div>
										<div className="orderInfos">
											<div className="orderType">Buy :</div>
											<div className="orderName amb">AMBULA</div>
										</div>
									</div>
									<div className="orderCardRight">
										<div className="orderNumber">100</div>
										<div className="orderNumberDollar">$40,36</div>
									</div>
								</div>
								<div className="orderCard">
									<div className="orderCardLeft">
										<div className="orderCardImage">
											<img src={EtherumLogo} alt="Etherum Logo" />
											<img src={violetLightVector} className="lightCard" alt="Light vector" />
										</div>
										<div className="orderInfos">
											<div className="orderType">Sell :</div>
											<div className="orderName">ETHERUM</div>
										</div>
									</div>
									<div className="orderCardRight">
										<div className="orderNumber">291.53</div>
										<div className="orderNumberDollar">$40,36</div>
									</div>
								</div>
							</div>
							<div className="marketPriceContainer">
								<div className="marketPriceCard">
									Market price:
									<span>2.91053 ETH</span>
									<img src={lightVector} className="marketPriceLight" alt="Light vector" />
								</div>
								<div className="marketPriceSelect">
									<Toggle id="market-status" defaultChecked={isCurrentMarketPrice} onChange={toggleMarketPrice} />
									<label htmlFor="market-status">Set current market price</label>
								</div>
							</div>
							<div className="totalFeeContainer">
								Total fee:
								<div className="fee">
									0,52 AMB{" "}
									<motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
										<FontAwesomeIcon icon={faAnglesDown} className="faAnglesDown" />
									</motion.div>
								</div>
							</div>
						</div>
						<motion.button
							className="createOrderBtn"
							whileHover={{
								scale: 1.1,
							}}
							whileTap={{ scale: 0.9 }}
						>
							Create Order
						</motion.button>
					</div>
					<div className="peerStats">
						<div className="peerStatsBackground">
							<div className="peerStatsTop">
								<div className="peerStatsTopCardsLeft">
									<div className="peerStatsTopCard">
										<div className="peerStatsTopCardTitle">Refresh in</div>
										<div className="peerStatsTopCardContent">
											{count.toFixed(1)}
											<span> s</span>
										</div>
									</div>
									<div className="peerStatsTopCard">
										<div className="peerStatsTopCardTitle">Total Peer</div>
										<div className="peerStatsTopCardContent">{storedPeerList?.length}</div>
									</div>
								</div>
								<div className="peerStatsTopCardsRight">
									<div className="peerStatsTopCard">
										<div className="peerStatsTopCardTitle">Peer Best</div>
										<div className="peerStatsTopCardContent">{storedBestNumber}</div>
									</div>
								</div>
							</div>
							<div className="peerStatsMiddle">
								<div className="peerStatsMiddleConnectedPeer">CONNECTED PEER</div>
								<div className="peerStatsMiddleBestHash">Best Hash</div>
								<div className="peerStatsMiddleBeshNumber">Best #</div>
							</div>
							{!polkadotApiIsLoading && <PeerList refresh={refreshPeerList} />}
						</div>
						<div className="peerStatsBorder"></div>
					</div>
				</div>
			</div>
			<div className="blockTransactionContainer">
				<div className="blockTransactionWrapper">
					<div className="title">LATEST BLOCKS</div>
					{!polkadotApiIsLoading && <BlockList type="block" />}
					<div className="seeAll">
						View all <span>blocks</span>
					</div>
				</div>
			</div>
			<img src={lightVector} className="light" alt="Light vector" />
		</div>
	);
}

export default Product;
