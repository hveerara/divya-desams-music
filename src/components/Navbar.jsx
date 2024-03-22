import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<header className="bg-[#a16207] sticky top-0 z-10 w-full font-poppins">
			<div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row sm:flex-row xs:flex-row justify-center items-center">
				<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap break-words items-center text-base justify-center">
					<Link
						to="/about"
						className="ml-2 mr-4 text-xl title-font  text-white hover:text-black hover:font-bold"
					>
						Veeraragavathatham
					</Link>
					{/* <Link to="/prayer" className="mr-3 hover:text-white">
            Prayer
          </Link> */}
					<Link
						to="/chozhaNaadu"
						className="mr-3 text-white hover:text-black hover:font-bold"
					>
						Chozha Naadu
					</Link>
					<Link
						to="/naduNaadu"
						className="mr-3 text-white hover:text-black hover:font-bold"
					>
						Nadu Naadu
					</Link>
					<Link
						to="/thondaiNaadu"
						className="mr-3 text-white hover:text-black hover:font-bold"
					>
						Thondai Naadu
					</Link>
					<Link
						to="/malaiNaadu"
						className="mr-3 text-white hover:text-black hover:font-bold"
					>
						Malai Naadu
					</Link>
					{/* <Link to="/pandiyaNaadu" className="mr-3 hover:text-white">
            Pandiya Naadu
          </Link>
          <Link to="/vadaNaadu" className="mr-3 hover:text-white">
            Vada Naadu
          </Link>
          <Link to="/thirupparkadal" className="mr-3 hover:text-white">
            Thirupparkadal
          </Link>
          <Link to="/thiruparamapadam" className="mr-3 hover:text-white">
            Thiruparamapadam
          </Link>
          <Link to="/mangalam" className="mr-3 hover:text-white">
            Mangalam
          </Link> */}
				</nav>
			</div>
		</header>
	);
}
