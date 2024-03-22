import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardDescription } from 'semantic-ui-react';
import ComingSoon from './ComingSoon.jsx';
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';
export default function Song({ songs }) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	let { songTitle } = useParams();
	const song = songs[songTitle];
	songTitle = songTitle.replace(/-/g, ' ');
	const {
		id,
		author,
		category,
		sthalam,
		songURL,
		songIntro,
		songLyrics,
		songRagam,
		songThalam,
		additionalSongs,
	} = song;

	if (songURL && songIntro) {
		return (
			<>
				<Navbar />
				<div>
					<div className="mb-4 p-3 border-solid border-b-2 border-slate-300">
						<h1 className="title-font sm:text-4xl text-3xl mb-2 p-3 font-medium flex items-center justify-center">
							{id}. {sthalam} : {songTitle}
						</h1>
						<h6 className="title-font sm:text-2xl text-2xl mb-2 p-3 font-medium flex items-center justify-center">
							({category})
						</h6>
					</div>
					<div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-2 p-3 lg:space-x-10 xl:space-x-10 pb-20">
						<div className="pr-5 pt-4">
							<div className="grid w-full grid-cols-4 sm:grid-cols-2 border-solid border-b-2 rounded-md p-2">
								<div className="font-light pl-4 grow-0 col-span-1">Title:</div>
								<div className="font-bold col-span-3 sm:col-span-1 break-words">
									{songTitle}
								</div>
							</div>
							<div className="grid w-full grid-cols-4 sm:grid-cols-2 border-solid border-b-2 rounded-md p-2">
								<div className="font-light pl-4 grow-0 col-span-1">Author:</div>
								<div className="font-bold col-span-3 sm:col-span-1 break-words">
									{author}
								</div>
							</div>
							<div className="grid w-full grid-cols-4 sm:grid-cols-2 border-solid border-b-2 rounded-md p-2">
								<div className="font-light pl-4 flex grow-0 col-span-1">
									Ragam:
								</div>
								<div className="font-bold col-span-3 sm:col-span-1 break-words">
									{songRagam}
								</div>
							</div>
							<div className="grid w-full grid-cols-4 sm:grid-cols-2 border-solid border-b-2 rounded-md p-2">
								<div className="font-light pl-4 flex grow-0 col-span-1">
									Thalam:
								</div>
								<div className="font-bold col-span-3 sm:col-span-1 break-words">
									{songThalam}
								</div>
							</div>
							<div className="grid w-full grid-cols-4 sm:grid-cols-2 border-solid border-b-2 rounded-md p-2">
								<div className="font-light pl-4 flex grow-0 col-span-1">
									Song:
								</div>
								<div className="container col-span-3 sm:col-span-1">
									<iframe
										title={songTitle}
										src={songURL}
										width="100%"
										height="100"
										scrolling="no"
										frameBorder="no"
										loading="lazy"
									></iframe>
								</div>
							</div>
							<div className="grid w-full grid-cols-4 sm:grid-cols-2 border-solid border-b-2 rounded-md p-2">
								<div className="font-light pl-4 grow-0 col-span-1">
									Sthalam Story:{' '}
								</div>
								<div className="font-bold p-2 pt-0 col-span-3 sm:col-span-1 break-words">
									<Card>
										<CardContent>
											<CardDescription
												className="text-justify"
												dangerouslySetInnerHTML={{ __html: songIntro }}
											></CardDescription>
										</CardContent>
									</Card>
								</div>
							</div>
							{additionalSongs && (
								<div>
									<div className="grid w-full grid-cols-4 sm:grid-cols-2 border-solid border-b-2 rounded-md p-2">
										<div className="font-light pl-4 flex grow-0 col-span-1">
											Additional Songs:
										</div>
										<div className="font-bold col-span-3 sm:col-span-1 break-words">
											{additionalSongs.map((additionalSong) => (
												<iframe
													key={id}
													title={songRagam}
													src={additionalSong}
													width="100%"
													height="100"
													scrolling="no"
													frameBorder="no"
													loading="lazy"
												></iframe>
											))}
										</div>
									</div>
								</div>
							)}
						</div>
						<div className="flex sm:pt-10 md:pt-10 lg:pt-4 xl:pt-4 sm:items-start sm:justify-start items-center justify-center">
							<iframe
								title={songTitle}
								src={songLyrics}
								width="600"
								height="770"
								frameBorder="no"
							></iframe>
						</div>
					</div>
				</div>
				<Footer />
			</>
		);
	} else {
		return <ComingSoon />;
	}
}
