'use client'

import useUpgradeStore from './stores/useUpgradeStore'
import useFrameworkStore from './stores/useFrameworkStore'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';


export default function Page() {

	const { upgradeTrees, advance } = useUpgradeStore()
	const { frameworks, frameworksPerSecond, frameworksPerClick, incrementFrameworksOnClick, upgradeStats } = useFrameworkStore()

	const percentage = (cost) => { 
		return frameworks > 0 ? Math.min(100, (frameworks / cost) * 100) : 0 
	}

	const style = (cost, upgradeTree) => {
		return `outline-none text-[17px] transition rounded-xl py-1 px-2.5 overflow-hidden ${frameworks < cost || upgradeTree.level >= upgradeTree.maxLevel ? "bg-gray-500 text-gray-300 font-semibold cursor-not-allowed" : "bg-yellow-primary text-gray-900 font-bold hover:opacity-75"}`
	}

	const svgStyle = (cost) => {
		return frameworks < cost ? "stroke-gray-300" : "stroke-gray-900"
	}

	const icon = (upgradeTreeName) => {
		return {
			'Code Editor':
				`<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`,
			'Package Manager':
				`<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M20.5 7.27783L12 12.0001M12 12.0001L3.49997 7.27783M12 12.0001L12 21.5001M21 12.0001V7.94153C21 7.59889 21 7.42757 20.9495 7.27477C20.9049 7.13959 20.8318 7.01551 20.7354 6.91082C20.6263 6.79248 20.4766 6.70928 20.177 6.54288L12.777 2.43177C12.4934 2.27421 12.3516 2.19543 12.2015 2.16454C12.0685 2.13721 11.9315 2.13721 11.7986 2.16454C11.6484 2.19543 11.5066 2.27421 11.223 2.43177L3.82297 6.54288C3.52345 6.70928 3.37368 6.79248 3.26463 6.91082C3.16816 7.01551 3.09515 7.13959 3.05048 7.27477C3 7.42757 3 7.59889 3 7.94153V16.0586C3 16.4013 3 16.5726 3.05048 16.7254C3.09515 16.8606 3.16816 16.9847 3.26463 17.0893C3.37368 17.2077 3.52346 17.2909 3.82297 17.4573L11.223 21.5684C11.5066 21.726 11.6484 21.8047 11.7986 21.8356C11.9315 21.863 12.0685 21.863 12.2015 21.8356C12.3516 21.8047 12.4934 21.726 12.777 21.5684L13 21.4445M7.5 4.50008L16.5 9.50008M22 21.5001L21 20.5001M22 18.0001C22 19.6569 20.6569 21.0001 19 21.0001C17.3431 21.0001 16 19.6569 16 18.0001C16 16.3432 17.3431 15.0001 19 15.0001C20.6569 15.0001 22 16.3432 22 18.0001Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`,
			'Operating System': 
				`<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
					<path d="M12.9046 3.06005C12.6988 3 12.4659 3 12 3C11.5341 3 11.3012 3 11.0954 3.06005C10.7942 3.14794 10.5281 3.32808 10.3346 3.57511C10.2024 3.74388 10.1159 3.96016 9.94291 4.39272C9.69419 5.01452 9.00393 5.33471 8.36857 5.123L7.79779 4.93281C7.3929 4.79785 7.19045 4.73036 6.99196 4.7188C6.70039 4.70181 6.4102 4.77032 6.15701 4.9159C5.98465 5.01501 5.83376 5.16591 5.53197 5.4677C5.21122 5.78845 5.05084 5.94882 4.94896 6.13189C4.79927 6.40084 4.73595 6.70934 4.76759 7.01551C4.78912 7.2239 4.87335 7.43449 5.04182 7.85566C5.30565 8.51523 5.05184 9.26878 4.44272 9.63433L4.16521 9.80087C3.74031 10.0558 3.52786 10.1833 3.37354 10.3588C3.23698 10.5141 3.13401 10.696 3.07109 10.893C3 11.1156 3 11.3658 3 11.8663C3 12.4589 3 12.7551 3.09462 13.0088C3.17823 13.2329 3.31422 13.4337 3.49124 13.5946C3.69158 13.7766 3.96395 13.8856 4.50866 14.1035C5.06534 14.3261 5.35196 14.9441 5.16236 15.5129L4.94721 16.1584C4.79819 16.6054 4.72367 16.829 4.7169 17.0486C4.70875 17.3127 4.77049 17.5742 4.89587 17.8067C5.00015 18.0002 5.16678 18.1668 5.5 18.5C5.83323 18.8332 5.99985 18.9998 6.19325 19.1041C6.4258 19.2295 6.68733 19.2913 6.9514 19.2831C7.17102 19.2763 7.39456 19.2018 7.84164 19.0528L8.36862 18.8771C9.00393 18.6654 9.6942 18.9855 9.94291 19.6073C10.1159 20.0398 10.2024 20.2561 10.3346 20.4249C10.5281 20.6719 10.7942 20.8521 11.0954 20.94C11.3012 21 11.5341 21 12 21C12.4659 21 12.6988 21 12.9046 20.94C13.2058 20.8521 13.4719 20.6719 13.6654 20.4249C13.7976 20.2561 13.8841 20.0398 14.0571 19.6073C14.3058 18.9855 14.9961 18.6654 15.6313 18.8773L16.1579 19.0529C16.605 19.2019 16.8286 19.2764 17.0482 19.2832C17.3123 19.2913 17.5738 19.2296 17.8063 19.1042C17.9997 18.9999 18.1664 18.8333 18.4996 18.5001C18.8328 18.1669 18.9994 18.0002 19.1037 17.8068C19.2291 17.5743 19.2908 17.3127 19.2827 17.0487C19.2759 16.8291 19.2014 16.6055 19.0524 16.1584L18.8374 15.5134C18.6477 14.9444 18.9344 14.3262 19.4913 14.1035C20.036 13.8856 20.3084 13.7766 20.5088 13.5946C20.6858 13.4337 20.8218 13.2329 20.9054 13.0088C21 12.7551 21 12.4589 21 11.8663C21 11.3658 21 11.1156 20.9289 10.893C20.866 10.696 20.763 10.5141 20.6265 10.3588C20.4721 10.1833 20.2597 10.0558 19.8348 9.80087L19.5569 9.63416C18.9478 9.26867 18.6939 8.51514 18.9578 7.85558C19.1262 7.43443 19.2105 7.22383 19.232 7.01543C19.2636 6.70926 19.2003 6.40077 19.0506 6.13181C18.9487 5.94875 18.7884 5.78837 18.4676 5.46762C18.1658 5.16584 18.0149 5.01494 17.8426 4.91583C17.5894 4.77024 17.2992 4.70174 17.0076 4.71872C16.8091 4.73029 16.6067 4.79777 16.2018 4.93273L15.6314 5.12287C14.9961 5.33464 14.3058 5.0145 14.0571 4.39272C13.8841 3.96016 13.7976 3.74388 13.6654 3.57511C13.4719 3.32808 13.2058 3.14794 12.9046 3.06005Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`,
			'Debugging Technique':
				`<svg width="24px" height="24px" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xml:space="preserve">
					<style type="text/css">
						.st0{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
						.st1{fill:none;stroke:#FFFFFF;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
					</style>
					<ellipse class="st0" cx="16" cy="16" rx="7" ry="8"/>
					<path class="st0" d="M13,8c0-1.7,1.3-3,3-3s3,1.3,3,3"/>
					<polyline class="st0" points="16,8 16,18 12,22 "/>
					<line class="st0" x1="16" y1="18" x2="20" y2="22"/>
					<path class="st0" d="M7,5v0.4c0,2.3,1.1,4.4,3,5.6l0,0"/>
					<path class="st0" d="M25,5v0.4c0,2.3-1.1,4.4-3,5.6l0,0"/>
					<path class="st0" d="M7,27v-0.4c0-2.3,1.1-4.4,3-5.6l0,0"/>
					<path class="st0" d="M25,27v-0.4c0-2.3-1.1-4.4-3-5.6l0,0"/>
					<line class="st0" x1="3" y1="16" x2="9" y2="16"/>
					<line class="st0" x1="23" y1="16" x2="29" y2="16"/>
				</svg>`,
			'Vulnerability Patching':
				`<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39542 13.1046 8.49999 12 8.49999C10.8954 8.49999 10 9.39542 10 10.5C10 11.6046 10.8954 12.5 12 12.5ZM12 12.5V15.5M20 12C20 16.4611 14.54 19.6937 12.6414 20.683C12.4361 20.79 12.3334 20.8435 12.191 20.8712C12.08 20.8928 11.92 20.8928 11.809 20.8712C11.6666 20.8435 11.5639 20.79 11.3586 20.683C9.45996 19.6937 4 16.4611 4 12V8.21759C4 7.41808 4 7.01833 4.13076 6.6747C4.24627 6.37113 4.43398 6.10027 4.67766 5.88552C4.9535 5.64243 5.3278 5.50207 6.0764 5.22134L11.4382 3.21067C11.6461 3.13271 11.75 3.09373 11.857 3.07827C11.9518 3.06457 12.0482 3.06457 12.143 3.07827C12.25 3.09373 12.3539 3.13271 12.5618 3.21067L17.9236 5.22134C18.6722 5.50207 19.0465 5.64243 19.3223 5.88552C19.566 6.10027 19.7537 6.37113 19.8692 6.6747C20 7.01833 20 7.41808 20 8.21759V12Z" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
				</svg>`
		}[upgradeTreeName]
	}

	const handleUpgrade = (upgradeTreeName, upgradeTree) => {
		if (frameworks >= upgradeTree.tree[upgradeTree.level].upgradeCost) {
			upgradeStats(upgradeTree)
			advance(upgradeTreeName, upgradeTree)
		}
	}

	return (
		<div className="h-full bg-gray-800 w-full flex flex-col gap-8 items-center -mt-[100px] pt-[132px]">
			<button 
				className="rounded-3xl overflow-hidden outline-none transition-all transform active:scale-95 mt-auto shrink-0" 
				onClick={incrementFrameworksOnClick}
			>
				<img src="JS.png" className="size-72 hover:opacity-85 transition shrink-0" />
			</button>

			{/* <div className="flex w-64 mt-4 justify-between">
				<div className="text-center">
					{frameworksPerSecond} FPS
				</div>
				<div className="text-center">
					{frameworksPerClick} FPC
				</div>
			</div> */}

			<div className="w-full mt-auto bg-gray-800">
				<div className="bg-gray-600 h-40 mb-6 rounded-3xl mx-6 p-2">
					<Swiper
						spaceBetween={8}
						slidesPerView={5}
						className="h-full"
					>
						{Object.entries(upgradeTrees).map(([key, value]) => (
							<SwiperSlide key={key}>
								<div className="bg-gray-800 rounded-2xl w-full h-full flex flex-col gap-1.5 justify-center px-4">
									<div className="flex items-center gap-1">
										<div dangerouslySetInnerHTML={{__html: icon(key)}}></div>
										<p className="text-xl font-semibold"> 
											{key}
										</p>
									</div>
									<div className="leading-tight -mt-1 h-10">
										{value.tree[value.level].description}
									</div>
									<div className="flex w-full justify-between items-center">
										<div className="self-start">
											<button 
												className={style(value.tree[value.level].upgradeCost, value)} 
												onClick={() => handleUpgrade(key, value)}
											>
												{value.level < value.maxLevel ? 
													<div className="flex items-center">
														<div className="mr-1 flex gap-1 items-center">
															{value.level === 0 ? 
																<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={svgStyle(value.tree[value.level].upgradeCost)}>
																	<path d="M12 14.5V16.5M7 10.0288C7.47142 10 8.05259 10 8.8 10H15.2C15.9474 10 16.5286 10 17 10.0288M7 10.0288C6.41168 10.0647 5.99429 10.1455 5.63803 10.327C5.07354 10.6146 4.6146 11.0735 4.32698 11.638C4 12.2798 4 13.1198 4 14.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V14.8C20 13.1198 20 12.2798 19.673 11.638C19.3854 11.0735 18.9265 10.6146 18.362 10.327C18.0057 10.1455 17.5883 10.0647 17 10.0288M7 10.0288V8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V10.0288" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																</svg> :
																<svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={svgStyle(value.tree[value.level].upgradeCost)}>
																	<path d="M17.4 10L21 12L17.4 14M17.4 10L12 13L6.6 10M17.4 10L21 8L12 3L3 8L6.6 10M6.6 10L3 12L6.6 14M17.4 14L21 16L12 21L3 16L6.6 14M17.4 14L12 17L6.6 14" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
																</svg>
															}
															{value.level === 0 ? 'Unlock' : 'Upgrade'}
														</div>
														<span className="tracking-tighter"> 
															({value.tree[value.level].upgradeCost.toLocaleString('en-US', {
																maximumFractionDigits: 2,
																notation: 'compact',
																compactDisplay: 'short'
															})})
														</span>
													</div>
													:
													<span>
														Max Level
													</span>
												}
											</button>
										</div>
										<p className="text-lg">
											{value.level !== 0 ? `Level ${value.level}` : ''}
										</p>
									</div>
									<div className={`${value.level < value.maxLevel ? 'bg-yellow-primary' : 'bg-gray-500'} h-[3px] mt-0.5 rounded-full transition-all duration-250 w-full`} style={{ width: `${percentage(value.tree[value.level].upgradeCost)}%` }} />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</div>
		</div>
	)
}
