import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ApiPromise, WsProvider } from "@polkadot/api";

const usePolkadotApiStore = create(
	persist(
		(set) => ({
			loading: true,
			providerAddress: null,
			api: null,
			setWsProvider: async (providerAddress) => {
				set({
					loading: true,
				});
				console.log(providerAddress);
				let wsProvider = new WsProvider(providerAddress);
				let api = await ApiPromise.create({ provider: wsProvider });
				set({
					loading: false,
					providerAddress: providerAddress,
					api: api,
				});
			},
		}),
		{
			name: "polkadotApi",
		}
	)
);

export default usePolkadotApiStore;
