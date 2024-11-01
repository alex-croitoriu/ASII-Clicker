'use client'


import useFrameworkStore from './stores/useFrameworkStore'
import UpgradeComponent from './components/upgrade'


export default function Page() {

	const { incrementFrameworksOnClick, loading } = useFrameworkStore()

	if (loading)
		return (
			<div className="h-full bg-gray-800 w-full flex flex-col gap-8 items-center -mt-[80px] lg:-mt-[100px] pt-[112px] lg:pt-[132px]">
				Loading...
			</div>
		)

	return (
		<div className="h-full bg-gray-800 w-full flex flex-col gap-8 items-center -mt-[80px] lg:-mt-[100px] pt-[112px] lg:pt-[132px]">
			<button 
				className="rounded-3xl overflow-hidden outline-none transition-all transform hover:scale-[102%] active:scale-95 mt-auto shrink-0" 
				onClick={() => incrementFrameworksOnClick()}
			>
				<img src="JS.png" className="size-56 sm:size-64 md:size-72 hover:opacity-85 transition shrink-0" />
			</button>

			<UpgradeComponent />
		</div>
	)
}
