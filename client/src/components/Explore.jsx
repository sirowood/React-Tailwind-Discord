import React from 'react';
import {
 Explore as ExploreIcon, Gaming, Music, Education, Science, Entertainment, StudentHub,
} from './icons';

export default function Explore() {
	return (
		<>
			<div className="relative flex-col flex-shrink hidden min-w-0 bg-gray-800 md:flex w-60">
				<div className="pr-2">
					<div className="text-[25px] w-[216px] h-[30px] text-white font-title my-4 ml-4 leading-[30px]">
						Discover
					</div>
					<div className="flex flex-col gap-y-[2px] py-px ml-2 h-11">
						<div className="flex h-full rounded px-2 py-[5px] items-center text-gray-200 text-base leading-5 font-[500] hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
							<div className="flex items-center justify-center w-8 h-8 mr-3"><ExploreIcon className="w-6 h-6" /></div>
							<div>Home</div>
						</div>

						<div className="flex h-full rounded px-2 py-[5px] items-center text-gray-200 text-base leading-5 font-[500] hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
							<div className="flex items-center justify-center w-8 h-8 mr-3"><Gaming className="w-6 h-6" /></div>
							<div>Gaming</div>
						</div>

						<div className="flex h-full rounded px-2 py-[5px] items-center text-gray-200 text-base leading-5 font-[500] hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
							<div className="flex items-center justify-center w-8 h-8 mr-3"><Music className="w-6 h-6" /></div>
							<div>Music</div>
						</div>

						<div className="flex h-full rounded px-2 py-[5px] items-center text-gray-200 text-base leading-5 font-[500] hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
							<div className="flex items-center justify-center w-8 h-8 mr-3"><Education className="w-6 h-6" /></div>
							<div>Education</div>
						</div>

						<div className="flex h-full rounded px-2 py-[5px] items-center text-gray-200 text-base leading-5 font-[500] hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
							<div className="flex items-center justify-center w-8 h-8 mr-3"><Science className="w-6 h-6" /></div>
							<div>Science & tech</div>
						</div>

						<div className="flex h-full rounded px-2 py-[5px] items-center text-gray-200 text-base leading-5 font-[500] hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
							<div className="flex items-center justify-center w-8 h-8 mr-3"><Entertainment className="w-6 h-6" /></div>
							<div>Entertainment</div>
						</div>

						<div className="flex h-full rounded px-2 py-[5px] items-center text-gray-200 text-base leading-5 font-[500] hover:cursor-pointer hover:bg-gray-650 hover:text-gray-100">
							<div className="flex items-center justify-center w-8 h-8 mr-3"><StudentHub className="w-6 h-6" /></div>
							<div>Student Hubs</div>
						</div>
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
