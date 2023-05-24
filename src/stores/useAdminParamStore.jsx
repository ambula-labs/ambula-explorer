import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAdminParamStore = create(
	persist(
		(set) => ({
			isAdminPage: false,
			setIsAdminPage: (isAdminPage) =>
				set(() => ({
					isAdminPage: isAdminPage,
				})),
		}),
		{
			name: "adminParam",
		}
	)
);

export default useAdminParamStore;
