/* eslint-disable react/prop-types */
import React from 'react';
import {
 Explore as ExploreIcon, Gaming, Music, Education, Science, Entertainment, StudentHub,
} from './icons';

const exploreData = [
	{
		name: 'Home',
		icon: <ExploreIcon className="w-6 h-6" />,
	},
	{
		name: 'Gaming',
		icon: <Gaming className="w-6 h-6" />,
	},
	{
		name: 'Music',
		icon: <Music className="w-6 h-6" />,
	},
	{
		name: 'Education',
		icon: <Education className="w-6 h-6" />,
	},
	{
		name: 'Science & tech',
		icon: <Science className="w-6 h-6" />,
	},
	{
		name: 'Entertainment',
		icon: <Entertainment className="w-6 h-6" />,
	},
	{
		name: 'Student Hubs',
		icon: <StudentHub className="w-6 h-6" />,
	},
];

function ExploreRow({ rowName, children }) {
	return (
		<div className="flex h-full rounded px-2 py-[5px] items-center text-gray-200 text-base leading-5 font-[500] hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
			<div className="flex items-center justify-center w-8 h-8 mr-3">{children}</div>
			<div>{rowName}</div>
		</div>
	);
}

export default function Explore() {
	return (
		<>
			<div className="relative flex-col flex-shrink hidden min-w-0 bg-gray-800 md:flex w-60">
				<div className="pr-2">
					<div className="text-[25px] w-[216px] h-[30px] text-white font-title my-4 ml-4 leading-[30px]">
						Discover
					</div>
					<div className="flex flex-col gap-y-[2px] py-px ml-2 h-11">
						{exploreData.map((item) => (
							<ExploreRow key={item.name} rowName={item.name}>
								{item.icon}
							</ExploreRow>
						))}
					</div>
				</div>
				<div className="absolute bottom-0 bg-red-500 w-60 h-[52px] px-2">
					Bottom
				</div>
			</div>

			<div className="flex flex-col flex-1 bg-gray-700" />
		</>
	);
}
