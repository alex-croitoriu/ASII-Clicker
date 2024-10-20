import { create } from 'zustand'

const useFrameworkStore = create((set) => ({
	frameworks: 0,
	lifetimeFrameworks: 0,
	frameworksPerClick: 1,
	frameworksPerSecond: 0,

	upgradeStats: (upgradeTree) => {
		set((state) => ({
			frameworks: state.frameworks - upgradeTree.tree[upgradeTree.level].upgradeCost
		}))
		if (upgradeTree.type === 'FPS')
			set((state) => ({
				frameworksPerSecond:  Math.round((state.frameworksPerSecond + upgradeTree.tree[upgradeTree.level].upgradeIncrease) * 10) / 10
			}))
		else if (upgradeTree.type === 'FPC')
			set((state) => ({
				frameworksPerClick:  Math.round((state.frameworksPerClick + upgradeTree.tree[upgradeTree.level].upgradeIncrease) * 10) / 10
			}))
	},

	incrementFrameworksOnClick: () =>
		set((state) => ({
			frameworks: state.frameworks + state.frameworksPerClick,
			lifetimeFrameworks: state.lifetimeFrameworks + state.frameworksPerClick
		})),

	autoIncrementFrameworks: () => {
		const intervalId = setInterval(() => {
			set((state) => ({ 
				frameworks: state.frameworks + state.frameworksPerSecond,
				lifetimeFrameworks: state.lifetimeFrameworks + state.frameworksPerSecond
			}))
		}, 1000)
		return { intervalId }
	}
}))

export default useFrameworkStore
