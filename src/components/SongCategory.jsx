import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
import SongCard from './SongCard.jsx';

export default function SongCategory({ songs, pageTitle }) {
	// const categoryData = songsData[`${props.category}`];
	return (
		<>
			<Navbar />
			<div className="container px-5 py-10 mx-auto mb-20">
				<h1 className="text-left sm:text-4xl text-3xl mt-4 font-medium title-font text-gray-900 mb-4 border-solid border-b-2 border-slate-300">
					{pageTitle}
				</h1>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-center justify-center">
					{Object.entries(songs).map(
						([songTitle, { category, id, sthalam, naadu }]) => (
							<Link to={`/song/${naadu}/${songTitle}`} key={id}>
								<SongCard
									key={id}
									category={category}
									id={id}
									songTitle={songTitle}
									sthalam={sthalam}
									naadu={naadu}
								></SongCard>
							</Link>
						)
					)}
				</div>
			</div>
			<Footer />
		</>
	);
}
