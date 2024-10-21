import { create } from "zustand";

async function fetchInitialState() {
  const response = await fetch("/api/upgrade");
  if (!response.ok) {
    throw new Error("Failed to fetch initial state");
  }
  const data = await response.json();
  return data;
}

const useUpgradeStore = create((set) => ({
  upgradeTrees: {},
  loading: true,

  initialize: async () => {
    try {
      const initialState = await fetchInitialState();
      set({
        upgradeTrees: initialState,
        loading: false,
      });
    } catch (error) {
      console.error("Error loading initial state:", error);
      set({ loading: false });
    }
  },
  advance: async (upgradeTreeName, upgradeTree) => {
    if (upgradeTree.level < upgradeTree.maxLevel) {
      const response = await fetch("/api/upgrade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          _id: upgradeTree._id,
          newLevel: upgradeTree.level + 1,
        }),
      });

      const data = await response.json();
	  console.log(response)
      if (response.status != 200) {
        throw new Error(data);
      } else {
        set((state) => {
          const index = state.upgradeTrees.indexOf(upgradeTree);
          const newUpgradeTrees = [
            ...state.upgradeTrees.slice(0, index),
            data,
            ...state.upgradeTrees.slice(index + 1),
          ];
          return { upgradeTrees: newUpgradeTrees };
        });
      }
    }
  },
}));

export default useUpgradeStore;
