import { create } from "zustand";
import { persist } from "zustand/middleware";

const usePeerListStore = create(
	persist(
		(set) => ({
			peerList: null,
			bestNumber: "-",
			setPeerList: (peerList) =>
				set(() => ({
					peerList: peerList,
				})),
			setBestNumber: (bestNumber) =>
				set(() => ({
					bestNumber: bestNumber,
				})),
		}),
		{
			name: "peerList",
		}
	)
);

export default usePeerListStore;
