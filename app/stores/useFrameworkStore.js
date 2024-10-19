import { create } from 'zustand'

const useFrameworkStore = create((set) => ({
	frameworks: 10000,
	frameworksPerClick: 1,
	frameworksPerSecond: 0,

	buyUpgrade: (upgrade) => {
		set((state) => ({
			frameworks: state.frameworks - upgrade.cost
		}))
		if (upgrade.type === 'FPS')
			set((state) => ({
				frameworksPerSecond:  Math.round((state.frameworksPerSecond + upgrade.amount) * 10) / 10
			}))
		else if (upgrade.type === 'FPC')
			set((state) => ({
				frameworksPerClick:  Math.round((state.frameworksPerClick + upgrade.amount) * 10) / 10
			}))
	},
	incrementFrameworksOnClick: () =>
		set((state) => ({
			frameworks: state.frameworks + state.frameworksPerClick
		})),
	autoIncrementFrameworks: () => {
		const intervalId = setInterval(() => {
			set((state) => ({ frameworks: state.frameworks + state.frameworksPerSecond }))
		}, 1000)
		return { intervalId }
	}
}))

export default useFrameworkStore
