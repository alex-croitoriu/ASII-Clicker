'use client'

import useUpgradeStore from './stores/useUpgradeStore'
import useFrameworkStore from './stores/useFrameworkStore'

export default function Page() {
	const { upgrades } = useUpgradeStore()
	const { frameworks, frameworksPerSecond, frameworksPerClick, incrementFrameworksOnClick, buyUpgrade } = useFrameworkStore()

	const percentage = (cost) => { 
		return frameworks > 0 ? Math.min(100, (frameworks / cost) * 100) : 0 
	}

	const style = (cost) => {
		return `outline-none transition bg-gray-600 rounded-xl py-1 px-2.5 overflow-hidden ${cost <= frameworks ? "bg-yellow-primary text-gray-900 font-bold" : "bg-gray-500 text-gray-300 font-semibold"}`
	}

	const handleUpgrade = (upgrade) => {
		console.log('here')
		if (frameworks >= upgrade.cost)
			buyUpgrade(upgrade)
	}

	return (
		<div className="h-full w-full flex flex-col items-center justify-center -mt-[72px]">
			<button 
				className="rounded-3xl overflow-hidden outline-none transition-all transform active:scale-95" 
				onClick={incrementFrameworksOnClick}
			>
				<img src="JS.png" className="size-72" />
			</button>

			<div className="flex w-64 mt-4 justify-between">
				<div className="text-center">
					{frameworksPerSecond} FPS
				</div>
				<div className="text-center">
					{frameworksPerClick} FPC
				</div>
			</div>

			<div className="bg-gray-600 h-40 absolute rounded-3xl bottom-6 left-6 right-6 p-2">
				<div className="grid grid-cols-6 gap-2 h-full">
					<div className="bg-gray-800 rounded-2xl w-full h-full flex flex-col items-center justify-center px-4">
						<p class="text-xl font-semibold"> 
							Package manager 
						</p>
						<div className="text-center text-[15px] leading-tight -mt-1">
							{upgrades[0].levels[upgrades[0].level].description}
						</div>
						<div>
							<button 
								className={style(upgrades[0].levels[upgrades[0].level].cost)} 
								onClick={() => handleUpgrade(upgrades[0].levels[upgrades[0].level])}
							>
								Upgrade
								<span className="tracking-tighter"> 
									({upgrades[0].levels[upgrades[0].level].cost})
								</span>
							</button>

							<div className="h-1 mt-1.5 rounded-full bg-yellow-primary transition-all duration-250" style={{ width: `${percentage(upgrades[0].levels[upgrades[0].level].cost)}%` }} />
						</div>
					</div>
					<div className="bg-gray-800 rounded-2xl w-full h-full">
						
					</div>
					<div className="bg-gray-800 rounded-2xl w-full h-full">
						
					</div>
					<div className="bg-gray-800 rounded-2xl w-full h-full">
						
					</div>
					<div className="bg-gray-800 rounded-2xl w-full h-full">
						
					</div>
					<div className="bg-gray-800 rounded-2xl w-full h-full">
						
					</div>
				</div>
			</div>
		</div>
	)
}
