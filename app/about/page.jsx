export default function Page() {
    return (
        <div className="bg-gray-800 flex flex-col gap-5 md:gap-7 lg:gap-8 p-5 md:pt-5 md:p-7 lg:p-8">
            <div className="max-w-5xl container mx-auto rounded-3xl bg-gray-600 px-4 py-3 md:px-6 md:py-4">
                <h1 className="text-2xl lg:text-3xl font-semibold flex justify-center md:justify-start gap-1 lg:gap-2 items-center">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6 lg:size-8">
                        <path d="M10 16.584V18.9996C10 20.1042 10.8954 20.9996 12 20.9996C13.1046 20.9996 14 20.1042 14 18.9996L14 16.584M12 3V4M18.3643 5.63574L17.6572 6.34285M5.63574 5.63574L6.34285 6.34285M4 12H3M21 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>
                        Game Idea
                    </span>
                </h1>
                <p className="mt-1 lg:mt-2 text-base md:text-[17px] lg:text-lg leading-snug">
                    Our project was inspired by the ongoing trend in the JavaScript community, where it seems like a new framework is released every day. 
                    It’s almost become an inside joke among developers - how everyone and their mother, at some point, have thought about creating their own JavaScript framework. 
                    <br />
                    <br />
                    We wanted to capture this humorous reality and turn it into an engaging game. 
                    Instead of the typical Cookie Clicker format, we decided to focus on the development and growth of fictional JavaScript frameworks while respecting the project theme.
                    <br />
                    <br />
                    The progression system represents the constant evolution in the web development world, with upgrades symbolizing the challenges and improvements that come with every new framework release. 
                    Our aim is to provide a lighthearted reflection on the JavaScript ecosystem, where innovation never stops, and there’s always something new to build or improve.
                </p>
            </div>

            <div className="max-w-5xl w-full mx-auto rounded-3xl bg-gray-600 px-4 py-3 md:px-6 md:py-4">
                <h1 className="text-2xl lg:text-3xl font-semibold justify-center md:justify-start flex gap-2 items-center">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6 lg:size-8">
                        <path d="M17.4 10L21 12L17.4 14M17.4 10L12 13L6.6 10M17.4 10L21 8L12 3L3 8L6.6 10M6.6 10L3 12L6.6 14M17.4 14L21 16L12 21L3 16L6.6 14M17.4 14L12 17L6.6 14" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>
                        Tech Stack
                    </span>
                </h1>
                <div className="mt-1 lg:mt-2 text-base md:text-[17px] lg:text-lg">
                    <p>
                        Here’s a breakdown of our tech stack, which came highly recommended and perfectly suited our needs, so we decided to stick with it:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>
                            <span className="font-semibold"> Next.js </span> - Utilized for server-side rendering and static site generation, optimizing performance and SEO.
                        </li>
                        <li>
                            <span className="font-semibold"> React </span> - Powers the front-end with its component-based architecture, enabling dynamic and interactive gameplay.
                        </li>

                        <li>
                            <span className="font-semibold"> MongoDB </span> - NoSQL database used for storing player data, progress, and ensuring scalability for future growth.
                        </li>
                    </ul>
                    <br/>
                    <p>
                        In addition, we chose a few more technologies to facilitate the development process:
                    </p>
                    <ul className="list-disc ml-6">
                        <li>
                            <span className="font-semibold"> Tailwind CSS </span> - A utility-first CSS framework that helps us design a responsive, custom UI with minimal code.
                        </li>
                        <li>
                            <span className="font-semibold"> Swiper.js </span> - For smooth and responsive carousels and sliders within the UI.
                        </li>
                        <li>
                            <span className="font-semibold"> Headless UI </span> - Unstyled, accessible UI components, giving us flexibility in custom design while maintaining accessibility.
                        </li>
                        <li>
                            <span className="font-semibold"> Zustand </span> - Lightweight state management solution, crucial for tracking real-time progress and game state.
                        </li>
                    </ul>

                </div>
            </div>

            <div className="max-w-5xl w-full mx-auto rounded-3xl bg-gray-600 px-4 py-3 md:px-6 md:py-4">
                <h1 className="text-2xl lg:text-3xl font-semibold justify-center md:justify-start flex gap-2 items-center">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6 lg:size-8">
                        <path d="M13 20V18C13 15.2386 10.7614 13 8 13C5.23858 13 3 15.2386 3 18V20H13ZM13 20H21V19C21 16.0545 18.7614 14 16 14C14.5867 14 13.3103 14.6255 12.4009 15.6311M11 7C11 8.65685 9.65685 10 8 10C6.34315 10 5 8.65685 5 7C5 5.34315 6.34315 4 8 4C9.65685 4 11 5.34315 11 7ZM18 9C18 10.1046 17.1046 11 16 11C14.8954 11 14 10.1046 14 9C14 7.89543 14.8954 7 16 7C17.1046 7 18 7.89543 18 9Z" stroke="#111827" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span>
                        Our Team
                    </span>
                </h1>
                <p className="mt-1 lg:mt-2 text-base md:text-[17px] lg:text-lg text-center md:text-start">
                    <span className="font-semibold"> Alex Croitoriu </span> - Frontend, UI & UX
                    <br />
                    <span className="font-semibold"> Cosmin Ciobanu </span> - Frontend
                    <br />
                    <span className="font-semibold"> Alex Calcan </span> - Backend
                </p>
            </div>
        </div>
    )
}