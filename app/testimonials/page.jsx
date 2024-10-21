'use client'

import Modal from '../components/modal'
import { useEffect, useState } from 'react'

export default function Page() {

    const data = [
    ]

    const [testimonials, setTestimonials] = useState(data)
    const [isOpen, setIsOpen] = useState(false)

    const handleSubmit = async (rating, name, message) => {
        try {
            const response = await fetch("/api/review", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    rating: rating,
                    name: name,
                    message: message,
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to save game state");
            }

            await initializeData();

        } catch (error) {
            console.error("Error sending review:", error);
        }
    }

    const initializeData = async () => {
        const response = await fetch("/api/review");
        if (!response.ok) {
            throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setTestimonials(data);
    }

    useEffect(() => {
        initializeData()
    }, data)

    return (
        <div className="bg-gray-800 flex flex-col gap-4 p-5 md:p-7 lg:p-8">
            <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-[17px]">

                {testimonials.map((testimonial, i) =>
                    <div key={i} className="rounded-3xl bg-gray-600 px-4 py-3 flex flex-col items-center justify-between gap-2">
                        <div className="flex flex-col items-center">
                            <div className="flex gap-0.5 justify-center">
                                {[...Array(Math.floor(testimonial.rating))].map((a, b) =>
                                    <svg key={b} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="size-4 fill-yellow-primary stroke-yellow-primary">
                                        <path d="M11.2691 4.41115C11.5006 3.89177 11.6164 3.63208 11.7776 3.55211C11.9176 3.48263 12.082 3.48263 12.222 3.55211C12.3832 3.63208 12.499 3.89177 12.7305 4.41115L14.5745 8.54808C14.643 8.70162 14.6772 8.77839 14.7302 8.83718C14.777 8.8892 14.8343 8.93081 14.8982 8.95929C14.9705 8.99149 15.0541 9.00031 15.2213 9.01795L19.7256 9.49336C20.2911 9.55304 20.5738 9.58288 20.6997 9.71147C20.809 9.82316 20.8598 9.97956 20.837 10.1342C20.8108 10.3122 20.5996 10.5025 20.1772 10.8832L16.8125 13.9154C16.6877 14.0279 16.6252 14.0842 16.5857 14.1527C16.5507 14.2134 16.5288 14.2807 16.5215 14.3503C16.5132 14.429 16.5306 14.5112 16.5655 14.6757L17.5053 19.1064C17.6233 19.6627 17.6823 19.9408 17.5989 20.1002C17.5264 20.2388 17.3934 20.3354 17.2393 20.3615C17.0619 20.3915 16.8156 20.2495 16.323 19.9654L12.3995 17.7024C12.2539 17.6184 12.1811 17.5765 12.1037 17.56C12.0352 17.5455 11.9644 17.5455 11.8959 17.56C11.8185 17.5765 11.7457 17.6184 11.6001 17.7024L7.67662 19.9654C7.18404 20.2495 6.93775 20.3915 6.76034 20.3615C6.60623 20.3354 6.47319 20.2388 6.40075 20.1002C6.31736 19.9408 6.37635 19.6627 6.49434 19.1064L7.4341 14.6757C7.46898 14.5112 7.48642 14.429 7.47814 14.3503C7.47081 14.2807 7.44894 14.2134 7.41394 14.1527C7.37439 14.0842 7.31195 14.0279 7.18708 13.9154L3.82246 10.8832C3.40005 10.5025 3.18884 10.3122 3.16258 10.1342C3.13978 9.97956 3.19059 9.82316 3.29993 9.71147C3.42581 9.58288 3.70856 9.55304 4.27406 9.49336L8.77835 9.01795C8.94553 9.00031 9.02911 8.99149 9.10139 8.95929C9.16534 8.93081 9.2226 8.8892 9.26946 8.83718C9.32241 8.77839 9.35663 8.70162 9.42508 8.54808L11.2691 4.41115Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                )}
                            </div>
                            <p className="italic text-center mt-1.5">
                                "{testimonial.text}"
                            </p>
                        </div>
                        <p className=" font-medium text-lg">
                            - {testimonial.name ?? 'Anonymous'} -
                        </p>
                    </div>
                )}

            </div>
            <button 
                className="max-w-5xl w-full mx-auto outline-none rounded-3xl bg-gray-600 px-4 py-3 flex items-center gap-1 justify-center text-xl hover:opacity-85 transition font-semibold"
                onClick={() => { console.log(isOpen); setIsOpen(true); console.log(isOpen) }}
            >
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6 stroke-gray-900">
                    <path d="M13 3H8.2C7.0799 3 6.51984 3 6.09202 3.21799C5.71569 3.40973 5.40973 3.71569 5.21799 4.09202C5 4.51984 5 5.0799 5 6.2V17.8C5 18.9201 5 19.4802 5.21799 19.908C5.40973 20.2843 5.71569 20.5903 6.09202 20.782C6.51984 21 7.0799 21 8.2 21H10M13 3L19 9M13 3V7.4C13 7.96005 13 8.24008 13.109 8.45399C13.2049 8.64215 13.3578 8.79513 13.546 8.89101C13.7599 9 14.0399 9 14.6 9H19M19 9V10M9 17H11.5M9 13H14M9 9H10M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span> Add your testimonial </span>
            </button>
            <Modal isOpen={isOpen} close={() => setIsOpen(false)} submit={(rating, name, message) => handleSubmit(rating, name, message)} />
        </div>
    )
}