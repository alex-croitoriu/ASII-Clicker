import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'
import { useState } from 'react'

export default function Modal({ isOpen, close, submit }) {

	const [hoverRating, setHoverRating] = useState(0)
	const [rating, setRating] = useState(0)
	const [testimonial, setTestimonial] = useState('')
	const [name, setName] = useState('')

	const style = () => {
		return `${rating && testimonial ? 
		'bg-yellow-primary text-gray-900 font-bold hover:opacity-75'
		: 'bg-gray-500 text-gray-300 font-semibold cursor-not-allowed'} outline-none text-[17px] transition rounded-xl py-1 px-2.5 overflow-hidden w-full mt-4`
	}

	return (
		<Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={() => close()}>
			<div className="fixed inset-0 z-10 w-screen overflow-y-auto">
				<div className="flex min-h-full items-center justify-center p-4">
					<DialogBackdrop 
						transition
						className="fixed inset-0 bg-black/[0.34] z-0 duration-300 data-[closed]:opacity-0" 
					/>
					<DialogPanel
						transition
						className="w-full max-w-md rounded-3xl bg-gray-600 p-6 duration-300 data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 relative z-10"
					>
						<button 
							className="absolute top-4 right-4"
							onClick={() => close()}
						>
							<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-5 fill-white">
								<path d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z" />
							</svg>
						</button>
						<div className="flex flex-col gap-4 items-center">
							<h1 className="text-white text-2xl font-semibold">
								Add your testimonial
							</h1>
							<div className="flex flex-col items-center">
								<label className="text-lg text-white font-medium">
									Rating
								</label>
								<div className="flex hover:cursor-pointer" onMouseLeave={() => setHoverRating(rating)}>
									{[...Array(hoverRating)].map((a, b) => 
										<div 
											key={b}
											onMouseOver={() => setHoverRating(b + 1)}
											onClick={() => setRating(hoverRating)}
										>
											<svg key={b} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-8 fill-yellow-primary stroke-yellow-primary">
												<path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										</div>
									)}
									{[...Array(5 - hoverRating)].map((a, b) => 
										<div 
											key={b}
											onMouseOver={() => setHoverRating(prevHoverRating => prevHoverRating + b + 1)}
											onClick={() => setRating(hoverRating)}
										>
											<svg key={b} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-8 fill-gray-800 stroke-gray-800">
												<path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
											</svg>
										</div>
									)}
								</div>
								<div className="flex flex-col items-center mt-4">
									<label for="testimonial" className="text-lg text-white font-medium">
										Testimonial
									</label>
									<textarea id="testimonial" className="rounded-xl bg-gray-800 text-[17px] px-3.5 py-1.5 text-white outline-none focus:outline-none" onChange={(e) => setTestimonial(e.target.value)} />
									<label for="name" className="text-lg text-white font-medium mt-4">
										Name (optional)
									</label>
									<input id="name" className="rounded-xl bg-gray-800 text-[17px] px-3.5 py-1.5 text-white outline-none focus:outline-none" onChange={(e) => setName(e.target.value)} />
								</div>
								{rating !== 0 && testimonial !== ""}
								<button 
									className={style()}
									disabled={!rating || !testimonial} 
									onClick={() => { submit(rating, name, testimonial); close() }}
								>
									Add your testimonial
								</button>
							</div>
						</div>
					</DialogPanel>
				</div>
			</div>
		</Dialog>
	)
}
