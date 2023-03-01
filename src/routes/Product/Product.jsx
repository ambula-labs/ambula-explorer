import { useState, useEffect } from "react";
import reactLogo from "@/assets/react.svg";
import lightVector from "@/assets/lightVector.svg";
import violetLightVector from "@/assets/violetLightVector.svg";
import AmbulaLogoShort from "@/assets/AmbulaLogoSmall.svg";
import EtherumLogo from "@/assets/eth-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import BlockList from "../../components/BlockList/BlockList";
import "./Product.scss";

function Landing() {
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
				<div className="rightHeader">
					<div className="pub">ADVERTISING INSERT</div>
				</div>
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
						</div>
					</div>
					<div className="statsChart">
						<div className="statsChartBackground"></div>
						<div className="statsChartBorder"></div>
					</div>
				</div>
			</div>
			<div className="blockTransactionContainer">
				<div className="blockTransactionWrapper">
					<div className="title">LATEST BLOCKS</div>
					<BlockList type="block" />
					<div className="seeAll">
						View all <span>blocks</span>
					</div>
				</div>
			</div>
			<img src={lightVector} className="light" alt="Light vector" />
		</div>
	);
}

export default Landing;
