import React from 'react';
import { Card, CardContent, CardHeader, CardMeta } from 'semantic-ui-react';
import { getBackgroundImageUrl } from '../lib/util';
export default function SongCard(props) {
	const songTitle = props.songTitle.replace(/-/g, ' ');
	return (
		<Card
			className="p-5 border-2 rounded-lg border-slate-300 font-poppins text-slate-200 bg-cover bg-no-repeat backdrop-filter backdrop-blur-md"
			style={{
				backgroundImage: getBackgroundImageUrl(props.category),
				width: 300,
				height: 200,
			}}
		>
			{songTitle !== '' ? (
				<CardContent className="align-items-left justify-center backdrop-filter backdrop-blur-sm">
					{props.category !== 'Mangalam' && props.category !== 'Prayer' && (
						<CardHeader>
							<span className="text-left font-bold">Sthalam: </span>
							<span className="text-left font-bold">{props.sthalam}</span>
						</CardHeader>
					)}
					<CardMeta>
						<span className="align-items-left text-left font-bold">Song: </span>
						<span className="text-left font-bold">{songTitle}</span>
					</CardMeta>
				</CardContent>
			) : (
				<CardContent className="align-items-left justify-center backdrop-filter backdrop-blur-sm">
					<CardHeader>
						<span className="text-left">Coming Soon...</span>
					</CardHeader>
				</CardContent>
			)}
		</Card>
	);
}
