import { create } from 'zustand'

const useFrameworkStore = create((set) => ({
	frameworks: 100,
	lifetimeFrameworks: 0,
	frameworksPerClick: 1,
	frameworksPerSecond: 1,

	upgradeStats: (upgradeTree) => {
		set((state) => ({
			frameworks: state.frameworks - upgradeTree.tree[upgradeTree.level].cost
		}))
		if (upgradeTree.type === 'FPS')
			set((state) => ({
				frameworksPerSecond:  Math.round((state.frameworksPerSecond + upgradeTree.tree[upgradeTree.level].amount) * 10) / 10
			}))
		else if (upgradeTree.type === 'FPC')
			set((state) => ({
				frameworksPerClick:  Math.round((state.frameworksPerClick + upgradeTree.tree[upgradeTree.level].amount) * 10) / 10
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
				lifetimeFrameworks: state.lifetimeFrameworks + state.frameworksPerClick
			}))
		}, 1000)
		return { intervalId }
	}
}))

export default useFrameworkStore