import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import Song from './components/Song.jsx';
import SongCategory from './components/SongCategory.jsx';
import { songsData } from './lib/songs-data';

const App = () => {
	const chozhaNaadu = songsData['chozhaNaadu'];
	const naduNaadu = songsData['naduNaadu'];
	const thondaiNaadu = songsData['thondaiNaadu'];
	const malaiNaadu = songsData['malaiNaadu'];
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/about" element={<About />} />
					<Route
						path="/song/chozhaNaadu/:songTitle"
						element={<Song songs={chozhaNaadu} />}
					/>
					<Route
						path="/chozhaNaadu"
						element={
							<SongCategory
								pageTitle="Chozha Naatu Thirupathigal Songs"
								songs={chozhaNaadu}
							/>
						}
					/>
					<Route
						path="/song/naduNaadu/:songTitle"
						element={<Song songs={naduNaadu} />}
					/>
					<Route
						path="/naduNaadu"
						element={
							<SongCategory
								pageTitle="Nadu Naatu Thirupathigal Songs"
								songs={naduNaadu}
							/>
						}
					/>
					<Route
						path="/song/thondaiNaadu/:songTitle"
						element={<Song songs={thondaiNaadu} />}
					/>
					<Route
						path="/thondaiNaadu"
						element={
							<SongCategory
								pageTitle="Thondai Naatu Thirupathigal Songs"
								songs={thondaiNaadu}
							/>
						}
					/>
					<Route
						path="/song/malaiNaadu/:songTitle"
						element={<Song songs={malaiNaadu} />}
					/>
					<Route
						path="/malaiNaadu"
						element={
							<SongCategory
								pageTitle="Malai Naatu Thirupathigal Songs"
								songs={malaiNaadu}
							/>
						}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default App;
