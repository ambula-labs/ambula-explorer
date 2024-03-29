import AmbulaLogoShort from "@/assets/AmbulaLogoSmall.svg";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Peer } from "./Peer";
import usePeerListStore from "../../stores/usePeerListStore";
import usePolkadotApiStore from "../../stores/usePolkadotApiStore";
import "./PeerList.scss";

function PeerList(props) {
	const { refresh } = props;

	const [peerList, setPeerList] = useState([]);
	const [peerListTmp, setPeerListTmp] = useState([]);
	const polkadotApi = usePolkadotApiStore((state) => state.api);
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
		// Retrieve the list of peers
		const peers = await polkadotApi.rpc.system.peers();
		// const proposal = polkadotApi.tx.democracy.propose(proposalHash, 0, changes);
		// const proposalHash = await proposal.signAndSend(account);

		console.log(peers[0]);

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
