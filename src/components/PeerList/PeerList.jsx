import AmbulaLogoShort from "@/assets/AmbulaLogoSmall.svg";
import { ApiPromise, WsProvider } from "@polkadot/api";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Peer } from "./Peer";
import usePeerListStore from "../../stores/usePeerListStore";
import "./PeerList.scss";

function PeerList(props) {
	const { refresh } = props;

	const [peerList, setPeerList] = useState([]);
	const [peerListTmp, setPeerListTmp] = useState([]);
	const setStoredPeerList = usePeerListStore((state) => state.setPeerList);
	const setStoredBestNumber = usePeerListStore((state) => state.setBestNumber);

	function uniq(a) {
		var seen = {};
		return a.filter(function (item) {
			return seen.hasOwnProperty(item.peerId) ? false : (seen[item.peerId] = true);
		});
	}

	function equalPeerList(l1, l2) {
		if (l1.length !== l2.length) {
			return false;
		}
		l1.map((p1, index) => {
			if (p1.peerId != l2[index].peerId) {
				return false;
			}
		});
		return true;
	}

	function checkModification() {
		if (!equalPeerList(peerListTmp, peerList)) {
			setPeerList(peerListTmp);
		}
	}

	//Ajout d'un peer dans la liste des derniers Peers
	const addPeer = (peer) => {
		setPeerListTmp((prevPeers) => {
			let tmpArray = [...prevPeers, peer];
			return uniq(tmpArray);
		});
	};

	async function getPeerInformation() {
		// Se connecter au nœud Substrate
		//const wsProvider = new WsProvider("wss://rpc.polkadot.io"); // REMOTE MODE
		const wsProvider = new WsProvider("ws://127.0.0.1:9944"); // LOCAL MODE

		const api = await ApiPromise.create({ provider: wsProvider });
		// Retrieve the list of peers
		const peers = await api.rpc.system.peers();

		peers.map((peer) => {
			addPeer(new Peer(peer.roles, peer.peerId, peer.bestHash, peer.bestNumber));
		});
	}

	function getBestNumber() {
		let bestNumber = 0;
		peerList.map((peer) => {
			if (peer.bestNumber > bestNumber) {
				bestNumber = peer.bestNumber;
			}
		});

		return bestNumber === 0 ? "-" : bestNumber;
	}

	//On appelle la fonction une fois au démarage afin de recevoir les derniers blocs
	useEffect(() => {
		setPeerListTmp([]);
		getPeerInformation();
		checkModification();
	}, [refresh]);

	useEffect(() => {
		setStoredPeerList(peerList);
		setStoredBestNumber(getBestNumber());
	}, [peerList]);

	//Animation utilisée pour nos Cards présentes dans la liste des derniers peers
	const animations = {
		initial: { scale: 0, opacity: 0 },
		animate: { scale: 1, opacity: 1 },
		exit: { scale: 0, opacity: 0 },
	};

	return (
		<div className="PeerList">
			<AnimatePresence>
				{peerList.map((peer, key) => {
					return (
						<motion.div {...animations} key={key} className="PeerCard" layout>
							<div className="peerCardLeft">
								<div className="peerCardRole">{peer.role}</div>
								<div className="peerCardId">{peer.peerId}</div>
							</div>
							<div className="peerCardBestHash">{peer.bestHash}</div>
							<div className="peerCardBestNumber">{peer.bestNumber.words}</div>
						</motion.div>
					);
				})}
			</AnimatePresence>
		</div>
	);
}

export default PeerList;
