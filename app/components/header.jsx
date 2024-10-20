'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import useFrameworkStore from '../stores/useFrameworkStore'

export default function Header() {
	const { frameworks, autoIncrementFrameworks } = useFrameworkStore()

	useEffect(() => {
		autoIncrementFrameworks()
	}, [])

	const pathname = usePathname()

	const style = (route) => {
		return `transition hover:underline ${route === pathname ? "text-yellow-primary underline" : ""}`
	}

	return (
		<div className="grid grid-cols-3 items-center text-xl font-semibold pt-4 px-20 relative z-10">
			<Link href="https://www.asii.ro/" target="_blank" className="w-fit">
				<img src="ASII.svg" className="w-24 text-white hover:text-yellow-primary" />
			</Link>
			<div className="flex justify-self-center">
				<h1 className="text-3xl font-medium text-center">
					<span className="text-5xl"> 
						{Math.floor(frameworks).toLocaleString('en-US', {
							maximumFractionDigits: 2,
							notation: 'compact',
							compactDisplay: 'short'
						})}
					</span>
					<br />
					JS Frameworks
				</h1>
			</div>
			<div className="flex gap-8 justify-self-end">
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
