import { create } from "zustand";

async function fetchInitialState() {
  const response = await fetch("/api/game-state");
  if (!response.ok) {
    throw new Error("Failed to fetch initial state");
  }
  const data = await response.json();
  return data;
}

const useFrameworkStore = create((set) => ({
  frameworks: 0,
  lifetimeFrameworks: 0,
  frameworksPerClick: 0,
  frameworksPerSecond: 0,
  loading: true,
  autoSaveIntervalId: null,

  initialize: async () => {
    try {
      const initialState = await fetchInitialState();
      set({
        frameworks: initialState.frameworks,
        lifetimeFrameworks: initialState.lifetimeFrameworks,
        frameworksPerClick: initialState.frameworksPerClick,
        frameworksPerSecond: initialState.frameworksPerSecond,
        loading: false,
      });
    } catch (error) {
      console.error("Error loading initial state:", error);
      set({ loading: false });
    }
  },

  sendGameState: async (state) => {
    try {
      if (state == null) {
        state = useFrameworkStore.getState();
      }
      const response = await fetch("/api/game-state", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          frameworks: state.frameworks,
          lifetimeFrameworks: state.lifetimeFrameworks,
          frameworksPerClick: state.frameworksPerClick,
          frameworksPerSecond: state.frameworksPerSecond,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save game state");
      }
    } catch (error) {
      console.error("Error sending game state:", error);
    }
  },

  upgradeStats: (upgradeTree) => {
    set((state) => ({
      frameworks:
        state.frameworks - upgradeTree.tree[upgradeTree.level].upgradeCost,
    }));
    if (upgradeTree.type === "FPS")
      set((state) => ({
        frameworksPerSecond:
          Math.round(
            (state.frameworksPerSecond +
              upgradeTree.tree[upgradeTree.level].upgradeIncrease) *
              10
          ) / 10,
      }));
    else if (upgradeTree.type === "FPC")
      set((state) => ({
        frameworksPerClick:
          Math.round(
            (state.frameworksPerClick +
              upgradeTree.tree[upgradeTree.level].upgradeIncrease) *
              10
          ) / 10,
      }));
    useFrameworkStore.getState().sendGameState();
  },

  incrementFrameworksOnClick: () =>
    set((state) => ({
      frameworks: state.frameworks + state.frameworksPerClick,
      lifetimeFrameworks: state.lifetimeFrameworks + state.frameworksPerClick,
    })),

  autoIncrementFrameworks: () => {
    const intervalId = setInterval(() => {
      set((state) => ({
        frameworks: state.frameworks + state.frameworksPerSecond,
        lifetimeFrameworks:
          state.lifetimeFrameworks + state.frameworksPerSecond,
      }));
    }, 1000);
    return { intervalId };
  },

  startAutoSave: () => {
    const intervalId = setInterval(() => {
      const state = useFrameworkStore.getState();
      state.sendGameState(state);
    }, 1000);

    set({ autoSaveIntervalId: intervalId });
  },

  stopAutoSave: () => {
    const { autoSaveIntervalId } = useFrameworkStore.getState();
    if (autoSaveIntervalId) {
      clearInterval(autoSaveIntervalId);
      set({ autoSaveIntervalId: null });
    }
  },
}));

export default useFrameworkStore;
