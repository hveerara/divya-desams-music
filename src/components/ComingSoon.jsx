import React from 'react';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

export default function ComingSoon() {
	return (
		<>
			<Navbar />
			<div className="container mx-auto my-10 font-poppins">
				<div className="mb-4 p-3 border-solid border-b-2 border-slate-300">
					<h1 className="title-font sm:text-4xl text-3xl mb-2 p-3 font-medium flex items-center justify-center">
						Coming Soon...
					</h1>
				</div>
			</div>
			<Footer />
		</>
	);
}
