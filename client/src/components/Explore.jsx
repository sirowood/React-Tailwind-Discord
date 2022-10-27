/* eslint-disable react/prop-types */
import React from 'react';
import {
 Explore as ExploreIcon, Gaming, Music, Education,
 Science, Entertainment, StudentHub,
} from './icons';
import BottomBar from './BottomBar';

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
		new: true,
	},
];

function ExploreRow({ rowName, children, isNew }) {
	return (
		<div className="relative flex h-full rounded px-2 py-[5px] items-center text-gray-200 text-base leading-5 font-[500] hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
			<div className="flex items-center justify-center w-8 h-8 mr-3">{children}</div>
			<div>{rowName}</div>
			{isNew && (
				<div className="h-4 text-white bg-gray-550 leading-4 text-[12px] px-2 rounded-xl absolute right-2 font-[600]">NEW</div>
			)}
		</div>
	);
}

export default function Explore() {
	return (
		<>
			{/* The middle part */}
			<div className="flex-col justify-between flex-shrink hidden h-screen min-w-0 bg-gray-800 md:flex w-60">
				<div className="h-full pr-2 overflow-y-auto">
					<div className="text-[25px] w-[216px] h-[30px] text-white font-title my-4 ml-4 leading-[30px]">
						Discover
					</div>
					<div className="flex flex-col gap-y-[2px] py-px ml-2 h-11">
						{exploreData.map((item) => (
							<ExploreRow key={item.name} rowName={item.name} isNew={item.new}>
								{item.icon}
							</ExploreRow>
						))}
					</div>
				</div>

				{/* Bottom */}
				<BottomBar />
			</div>

			{/* The right-most part */}
			<div className="flex flex-col flex-1 bg-gray-700" />
		</>
	);
}
