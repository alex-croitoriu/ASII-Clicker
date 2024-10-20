import './globals.css'
import Header from './components/header'

export const metadata = {
	title: 'ASII Clicker',
	description: 'ASII Clicker'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<div className="bg-gray-800 h-screen text-white flex flex-col flex-grow w-screen">
					<Header />
					{children}
				</div>
			</body>
		</html>
	)
}
