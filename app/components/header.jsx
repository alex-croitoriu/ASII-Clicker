'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { Menu, MenuButton, MenuItems, MenuItem, Transition } from '@headlessui/react'
import useFrameworkStore from '../stores/useFrameworkStore'


export default function Header() {
	const { frameworks,  frameworksPerSecond, frameworksPerClick, autoIncrementFrameworks, initialize, startAutoSave, loading } = useFrameworkStore()

	useEffect(() => {
		initialize();
		startAutoSave();
		autoIncrementFrameworks();
	}, [])

	const pathname = usePathname()

	const style = (route) => {
		return `transition hover:underline ${route === pathname ? "text-yellow-primary underline" : ""}`
	}

	const style1 = (active) => {
		return `cursor-pointer block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${active ? 'rotate-45' : '-translate-y-1.5'}`
	}

	const style2 = (active) => {
		return `cursor-pointer block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${active ? 'opacity-0' : ''}`
	}

	const style3 = (active) => {
		return `cursor-pointer block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${active ? '-rotate-45' : 'translate-y-1.5'}`
	}

	return (
		<div className="grid grid-cols-3 items-center text-lg lg:text-xl font-semibold pt-2 lg:pt-4 px-6 md:px-10 lg:px-14 relative z-10">
			<div className="flex md:hidden">
                <Menu as="div" className="flex items-center relative">
                    <MenuButton as="div" className="cursor-pointer flex items-center text-white w-10 h-10 relative focus:outline-none" aria-label="mobile-menu">
						{({ active }) => 
							<div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
								<span aria-hidden="true" className={style1(active)} />
								<span aria-hidden="true" className={style2(active)} />
								<span aria-hidden="true" className={style3(active)} />
							</div>
						}
                    </MenuButton>
					<MenuItems 
						as="div" 
						className="mx-2 origin-top transition ease-out data-[closed]:opacity-0 flex flex-col  md:hidden absolute outline-none px-4 w-full rounded-3xl"
						transition
						anchor="bottom"
					>
						<div className="flex flex-col bg-gray-500">
							<MenuItem as="div">
							hello
							</MenuItem>
						</div>
					</MenuItems>
                </Menu>
            </div>



			<div className="hidden md:flex items-center gap-2">
				<Link href="https://www.asii.ro/" target="_blank" className="w-fit">
					<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 725.65 409.77" className="w-20 lg:w-24 fill-white hover:fill-yellow-primary transition">
						<path fillRule="evenodd" d="M107.31,86.85c0,.9.65,1.47,1.08,2.14q26.21,40.88,52.44,81.74a10.45,10.45,0,0,0,.86,1.3,2.07,2.07,0,0,0,3.19-.23c3.76-7.08,8.15-13.81,11.7-21a15.86,15.86,0,0,0,.75-1.62c3.27-8.83,8.45-16.66,12.93-24.86.42-.77.78-1.09,1.72-.63q10.19,5,20.43,9.9c1.28.61.91,1.25.45,2.07-2.64,4.66-5.64,9.08-8.54,13.57a125.91,125.91,0,0,0-16.46,36.33A91,91,0,0,0,185,208a114.35,114.35,0,0,0,.67,16.44,100.18,100.18,0,0,0,5.28,20.19,94.71,94.71,0,0,0,9.8,19.69c2.18,3.35,4.26,6.76,6.22,10.32a5.38,5.38,0,0,0,2.1-2.05c6.36-8.14,12.29-16.59,18.36-24.94a366.34,366.34,0,0,1,31.39-38.18c13-13.59,25.45-27.66,38.58-41.11,3.58-3.67,7.28-7.22,11-10.74a6.54,6.54,0,0,1,7.3-1.55,42.48,42.48,0,0,1,7.52,3.33,99.91,99.91,0,0,1,28.41,24.37,43.21,43.21,0,0,1,3.25,4.78,18.23,18.23,0,0,1,2.66,9.72c-.11,13.23,0,26.45-.06,39.68,0,9.44.79,18.82,1.58,28.22.3,3.54.45,7.11.67,10.66.09,1.4.2,2.8.3,4.26a2.44,2.44,0,0,0,.76-.13c15.92-8.7,29.32-20.17,39-35.68a75.42,75.42,0,0,0,11.16-31.41,95.51,95.51,0,0,0-4.25-41.07c-1.28-3.95-2.38-8-3.55-11.94-.16-.57-.22-1.17-.39-1.74-.31-1,.2-1.33,1.13-1.28h.67q11.48,0,23,0c1.91,0,1.93,0,2.36,1.8A256.23,256.23,0,0,1,435,187.42c.92,7.3,2,14.55,4.74,21.44.54,1.36.5,1.44,1.83.89a61.38,61.38,0,0,0,7.1-3.71c8.28-4.82,16.15-10.31,24.45-15.08,13.57-7.82,26.71-16.38,40.4-24,4-2.23,3-2.33,6.59.74,2.94,2.51,5.64,5.28,8.34,8,.51.52,1.15,1,1.3,1.8-4.74,2.9-9.49,5.79-14.22,8.71-6.32,3.9-12.63,7.81-18.76,12l-.92.63c-2.07,1.47-2.13,1.72-.59,3.86a48.28,48.28,0,0,0,5.61,6.34c1.36,1.32,1.37,1.31,3.18.31l32.07-17.94.58-.32c2.33-1.31,2-1.43,3.14.94,1.87,3.79,3.76,7.57,5.62,11.37.93,1.93,1.14,1.76-.95,2.69l-34.56,15.4c-2.43,1.09-2.44,1.09-1.43,3.6s2,5.1,3.06,7.64c.79,1.94.58,1.66,2.37,1q17.66-6.44,35.31-12.93l1.81-.65a21.83,21.83,0,0,1,.76,4.35q.76,5.61,1.57,11.23c.25,1.75.26,1.76-1.5,2.27q-15.29,4.44-30.56,8.84c-1.64.48-3.28.94-4.92,1.41-.67.2-1.17.46-1.16,1.36,0,3.47-.15,7,1.09,10.49l38.84-7.29a19.62,19.62,0,0,1,.18,4.41c0,3.71,0,7.43,0,11.14,0,1-.17,1.54-1.42,1.66-14.38,1.33-28.41,4.45-42.32,8.2-18,4.85-35.56,11-53.19,16.95a463.65,463.65,0,0,0-51.48,21c-11.58,5.54-23.17,11-34.56,17a59.85,59.85,0,0,1-5.48,2.46,1.61,1.61,0,0,0-1.19,1.8,60.8,60.8,0,0,0,1.12,9.72c3,15.88,5.92,31.79,9.71,47.5a555.21,555.21,0,0,0,21.12,68.64c3.08,8,6.57,15.91,9.82,23.88a51.23,51.23,0,0,1,2.93,9c-.58.58-1.2.37-1.76.36-23.7-.26-47.39-.59-71.09-.8-14-.13-27.93-.09-41.9-.12-.59,0-1.19,0-1.78,0s-1-.26-1.2-1c-1.67-7.22-3.48-14.42-4.43-21.79-.71-5.53-.79-11.09-1-16.65a105,105,0,0,1,.64-14.2c.15-1.72.1-1.73-1.55-1.79-13.07-.42-26.14-.65-39.21-.91-5.72-.12-11.44-.06-17.16-.2a3.84,3.84,0,0,0-4.1,2.66,46,46,0,0,0-2.57,9.65,132,132,0,0,0-1.7,25.73c.05,3.53.91,7.05,1.41,10.57.37,2.56.76,5.11,1.13,7.62a4.14,4.14,0,0,1-2.31.28H123.06c-2,0-2,0-1.77-2a243.34,243.34,0,0,1,4.81-26.93c6-27.51,14.16-54.39,23.44-80.94,5.88-16.83,13.63-32.88,21.68-48.78q4-7.85,8.11-15.61a2.15,2.15,0,0,0-.32-2.89c-4.95-5.55-9.91-11.08-15.06-16.43-8.7-9.05-17.26-18.25-26.63-26.62-5.54-4.95-11.21-9.75-16.85-14.58-3.67-3.15-7.33-6.3-10.81-9.65-8.54-8.22-18.2-15-27.83-21.86-14.3-10.16-29.41-19.05-44.2-28.44q-6.48-4.11-12.92-8.32c-1.9-1.24-1.79-1.28-1.37-3.61,1.16-6.39,4-12.22,5.85-18.39a5.24,5.24,0,0,1,2.31,1.15l36.73,23.17c.5.32,1,.63,1.51,1s.94.19,1.26-.36a51.59,51.59,0,0,0,4.17-8.59,2.79,2.79,0,0,0-.81-3,51.88,51.88,0,0,0-5.63-5.06c-7.54-5.91-15.11-11.78-22.66-17.68a81.91,81.91,0,0,1-7.94-6.83c-1.33-1.35-1.33-1.36-.48-3q4.34-8.42,8.7-16.8a4,4,0,0,1,1.32-1.8l36.94,35.95c.73-.16,1-.74,1.31-1.18q3.17-4,6.29-8.09c1.18-1.54,1.43-1.25-.06-2.89l-13.8-15.15c-6-6.65-12.08-13.32-18.18-19.92a2.92,2.92,0,0,1-.7-3.4,10.65,10.65,0,0,1,2.34-3.75,39.78,39.78,0,0,1,2.94-2.72c2.72-2.28,5.7-4.28,7.61-7.72,6.28,6.55,11.49,13.68,16.77,20.75a241.4,241.4,0,0,1,15,21.79,2.84,2.84,0,0,0,1.63-.69q5-2.91,10-5.85c1.45-.86,1.46-.89.55-2.27L104,118.8,88.9,95.92l-1.28-2c.18-.74.77-.73,1.23-.88l15.6-5.28a3.93,3.93,0,0,0,2-.91ZM228.22,271c0,5-.06,9.79,0,14.61a154.1,154.1,0,0,0,1.67,23.51,53.86,53.86,0,0,0,5.28,16.68,26.9,26.9,0,0,0,16.26,13.67,46.36,46.36,0,0,0,20.05,1.21A60.19,60.19,0,0,0,287,336c8.29-3.57,16.22-7.82,22.86-14a172.51,172.51,0,0,0,20.19-22.25A51.37,51.37,0,0,0,337.11,288c.28-.7.79-1.4.46-2.29-.3.12-.51.19-.7.28-14.07,6.7-28.73,10.47-44.47,10.16a95.25,95.25,0,0,1-26.31-3.85c-10.95-3.36-21.11-8.28-29.81-15.9a51,51,0,0,0-5.42-4.28A4.19,4.19,0,0,0,228.22,271Z" transform="translate(-23.09 -86.85)"/>
						<path fillRule="evenodd" d="M748.74,496.49l-36.09,0c-2.89,0-2.68.23-2.68-2.61V314.29c0-2.69,0-2.7,2.68-2.7h33.42c.89,0,1.78,0,2.67-.08Z" transform="translate(-23.09 -86.85)"/>
						<path fillRule="evenodd" d="M509.25,496.47H467.14c-.52,0-1,0-1.56,0-1.66-.05-1.7-.05-1.71-1.79q0-13.81,0-27.64c0-1.59.05-1.6,1.63-1.66.59,0,1.18,0,1.78,0h76c3.87,0,7.7-.09,11.43-1.38,6-2.1,10.08-6.1,11.85-12.28a34.24,34.24,0,0,0,.57-16.28c-1.31-6.58-5.55-10.64-11.65-12.95a43.56,43.56,0,0,0-12.59-2.58,209.21,209.21,0,0,0-24,.06,190.35,190.35,0,0,1-21.36.2c-10.87-.68-20.52-4.52-28.17-12.58a39.79,39.79,0,0,1-9.83-18.93,56.62,56.62,0,0,1-1.38-13.24c.06-6.16-.09-12.33.08-18.49A54.16,54.16,0,0,1,462.26,337a37.57,37.57,0,0,1,20.87-20.54,58.26,58.26,0,0,1,16.77-4.15,134.62,134.62,0,0,1,13.76-.72h74.65c3.39,0,3,0,3,3q0,12.69,0,25.4c0,.44,0,.89,0,1.34,0,.91-.29,1.41-1.27,1.35-.6,0-1.19,0-1.79,0q-34.75,0-69.52,0a53.21,53.21,0,0,0-15.18,1.78c-9.51,2.8-14.16,8.93-15.08,18.24a40.87,40.87,0,0,0,.29,11.31c1.26,7.08,5.26,11.8,12,14.21a36.93,36.93,0,0,0,11.09,2.16c3.4.14,6.8.55,10.22.38,6.08-.29,12.15-.58,18.23-.78,5.42-.17,10.85-.29,16.26.06,8,.53,15.89,1.85,23.09,5.82a32.82,32.82,0,0,1,14.76,16.95,56.27,56.27,0,0,1,3.7,15.74,140.82,140.82,0,0,1,.25,22,57.59,57.59,0,0,1-5.55,22.52c-5.4,11-14.22,17.85-25.9,21.13a62,62,0,0,1-16.7,2.23c-13.66,0-27.33,0-41,0Z" transform="translate(-23.09 -86.85)"/>
						<path fillRule="evenodd" d="M669,404v89.59c0,3.2.29,2.89-2.84,2.89H633.39c-.52,0-1,0-1.56,0-.85,0-1.21-.38-1.18-1.21,0-.52,0-1,0-1.56V314.54c0-2.87-.35-3,2.88-3q16.38,0,32.75,0h.45c2.24,0,2.24,0,2.26,2.15V404Z" transform="translate(-23.09 -86.85)"/>
					</svg>
				</Link>
				<div className="flex items-center justify-center ml-10 gap-10">
					<div className="flex flex-col items-center leading-5">
						<span>
							{frameworksPerSecond.toLocaleString('en-US', {
								maximumFractionDigits: 2,
								notation: 'compact',
								compactDisplay: 'short'
							})} 
						</span>
						<span className="text-[17px] font-semibold"> FPS </span>
					</div>
					<div className="flex flex-col items-center leading-5">
						<span>
							{frameworksPerClick.toLocaleString('en-US', {
								maximumFractionDigits: 2,
								notation: 'compact',
								compactDisplay: 'short'
							})} 
						</span>
						<span className="text-[17px] font-semibold"> FPC </span>
					</div>
				</div>
			</div>
			<div className="col-start-2 flex justify-self-center">
				<h1 className="text-xl  lg:text-3xl font-medium text-center leading-6 whitespace-nowrap">
					<span className="text-3xl  lg:text-5xl"> 
						{Math.floor(frameworks).toLocaleString('en-US', {
							maximumFractionDigits: 2,
							notation: 'compact',
							compactDisplay: 'short'
						})}
					</span>
					<br />
					Frameworks
				</h1>
			</div>
			<div className="hidden md:flex gap-6 lg:gap-8 justify-self-end">
				<Link href="/" className={style('/')}> 
					Home 
				</Link>
				<Link href="/about" className={style('/about')}>
					About
				</Link>
				<Link href="/testimonials" className={style('/testimonials')}>
					Testimonials
				</Link>
			</div>
		</div>
	)
}
