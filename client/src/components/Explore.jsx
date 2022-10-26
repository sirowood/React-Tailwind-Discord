/* eslint-disable react/prop-types */
import React from 'react';
import {
 Explore as ExploreIcon, Gaming, Music, Education,
 Science, Entertainment, StudentHub, MutedMicrophone,
 HeadPhone, Setting,
} from './icons';

import discordPng from '../../public/servers/discord.png';

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
			{/* The middle part */}
			<div className="relative flex-col flex-shrink hidden min-w-0 bg-gray-800 md:flex w-60">
				<div className="h-full pr-2 overflow-y-auto">
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

				{/* Bottom */}
				<div className="absolute bottom-0 w-60 h-[52px] px-2 mb-px bg-gray-850 flex items-center justify-between">
					{/* Left part */}
					<div className="flex flex-row -ml-0.5 mr-2 pl-0.5 w-[122px] items-center hover:cursor-pointer hover:bg-gray-650 rounded group">
						{/* Discord icon with a dot */}
						<div className="relative flex items-center justify-center">
							<div className="w-8 h-8 overflow-hidden rounded-2xl bg-green-550">
								<img src={discordPng} alt="discord logo" />
							</div>
							<div className="absolute w-4 h-4 -bottom-[3px] -right-[3px] bg-gray-350 rounded-xl border-[3px] border-gray-850 group-hover:border-gray-650 flex items-center justify-center">
								<div className="w-[5px] h-[5px] rounded bg-gray-850 -translate-x-[0.5px] -translate-y-[0.5px] group-hover:bg-gray-650" />
							</div>
						</div>
						<div className="flex flex-col items-start justify-center py-1 pl-2">
							<div className="w-[76px] text-sm text-white leading-[18px] font-[600] truncate">Xuefeng Wu</div>
							<div className="w-[76px] text-[12px] font-[400] leading-[13px] text-gray-200">#1111</div>
						</div>
					</div>
					{/* Right part */}
					<div className="flex items-center text-gray-200">
						<div className="flex items-center justify-center w-8 h-8 rounded hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
							<MutedMicrophone className="w-5 h-5" />
						</div>
						<div className="flex items-center justify-center w-8 h-8 rounded hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
							<HeadPhone className="w-5 h-5" />
						</div>
						<div className="flex items-center justify-center w-8 h-8 rounded hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
							<Setting className="w-5 h-5" />
						</div>
					</div>
				</div>
			</div>

			{/* The right-most part */}
			<div className="flex flex-col flex-1 bg-gray-700" />
		</>
	);
}
