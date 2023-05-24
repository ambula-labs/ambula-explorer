import React, { useEffect, useState, useRef } from "react";
import { ForceGraph2D } from "react-force-graph";
import usePolkadotApiStore from "../../../stores/usePolkadotApiStore";

const Benchmark = () => {
	const polkadotApi = usePolkadotApiStore((state) => state.api);

	// Sample graph data
	const [graphData, setGraphData] = useState({
		nodes: [],
		links: [],
	});

	const tmpParentHashRef = useRef(0);

	// Ajout d'un block dans la liste des derniers Blocks
	const addBlock = (block) => {
		const view = new DataView(block.parentHash.buffer);
		// Convert the ArrayBuffer to a string representation
		let sum = 0;
		for (let i = 0; i < block.parentHash.buffer.byteLength; i += 4) {
			const value = view.getUint32(i, true); // Assuming little-endian byte order
			sum += value;
		}

		if (tmpParentHashRef.current !== 0) {
			console.log("icici");
			setGraphData((prevGraphData) => {
				const updatedGraphData = {
					...prevGraphData,
					nodes: [
						...prevGraphData.nodes,
						{ id: sum }, // Add a new node
					],
					links: [
						...prevGraphData.links,
						{ source: tmpParentHashRef.current, target: sum }, // Add a new link
					],
				};
				return updatedGraphData;
			});
		}

		tmpParentHashRef.current = sum;
	};

	async function getBlockList() {
		// Souscription aux nouveaux Header
		const hu = await polkadotApi.rpc.chain.subscribeNewHeads((block) => {
			// Ajout d'un nouveau block
			addBlock(block);
		});
	}

	// On appelle la fonction une fois au démarrage afin de recevoir les derniers blocs
	useEffect(() => {
		getBlockList();
	}, []);

	useEffect(() => {
		console.log(graphData);
	}, [graphData]);

	return <ForceGraph2D graphData={graphData} width={1000} height={500} nodeLabel="id" />;
};

export default Benchmark;
