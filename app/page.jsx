'use client'

import useUpgradeStore from './stores/useUpgradeStore'
import useFrameworkStore from './stores/useFrameworkStore'

export default function Page() {
	const { upgradeTrees, advance } = useUpgradeStore()
	const { frameworks, frameworksPerSecond, frameworksPerClick, incrementFrameworksOnClick, upgradeStats } = useFrameworkStore()

	const percentage = (cost) => { 
		return frameworks > 0 ? Math.min(100, (frameworks / cost) * 100) : 0 
	}

	const style = (cost) => {
		return `outline-none text-[17px] transition bg-gray-600 rounded-xl py-1 px-2.5 overflow-hidden ${cost <= frameworks ? "bg-yellow-primary text-gray-900 font-bold hover:opacity-80" : "bg-gray-500 text-gray-300 font-semibold cursor-not-allowed"}`
	}

	const handleUpgrade = (upgradeTreeName, upgradeTree) => {
		if (frameworks >= upgradeTree.tree[upgradeTree.level].cost) {
			upgradeStats(upgradeTree)
			advance(upgradeTreeName, upgradeTree)
		}
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
				<div className="grid grid-cols-5 gap-2 h-full">
					{Object.entries(upgradeTrees).map(([key, value]) => (
						<div 
							className="bg-gray-800 rounded-2xl w-full h-full flex flex-col gap-1.5 justify-center px-4"
							key={key}
						>
							<p className="text-xl font-semibold"> 
								{key}
							</p>
							<div className="leading-tight -mt-1">
								{value.tree[value.level].description}
							</div>
							<div className="flex w-full justify-between items-center">
								<div className="self-start">
									<button 
										className={style(value.tree[value.level].cost)} 
										onClick={() => handleUpgrade(key, value)}
									>
										<span className="mr-1">
											Upgrade 
										</span>
										<span className="tracking-tighter"> 
											({value.tree[value.level].cost})
										</span>
									</button>
								</div>
								<p className="text-lg">
									Level {value.level}
								</p>
							</div>
							<div className="h-[3px] mt-0.5 rounded-full bg-yellow-primary transition-all duration-250 w-full" style={{ width: `${percentage(value.tree[value.level].cost)}%` }} />
						</div>
					))}
					
				</div>
			</div>
		</div>
	)
}
