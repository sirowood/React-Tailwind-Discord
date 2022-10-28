import React from 'react';
import BottomBar from './BottomBar';
import {
 Friends, Nitro, Add, ListPlaceholder,
} from './icons';

export default function Dashboard() {
	return (
		<>
			{/* The middle part */}
			<div className="flex flex-col flex-shrink-0 min-w-0 overflow-x-hidden bg-gray-800 w-60">
				{/* Header */}
				<div className="flex items-center h-12 px-[10px] w-full shadow-sm">
					<button
						type="button"
						className="w-full px-[6px] py-px bg-gray-900 rounded h-7 text-[14px] font-[500] leading-6 text-gray-250 text-left hover:cursor-pointer"
					>
						Find or start a conversation
					</button>
				</div>

				{/* Body */}
				<div className="flex flex-col h-[calc(100%-48px)] justify-between">
					{/* Body content */}
					<div className="overflow-y-auto text-gray-300 font-[500] flex-shrink-1 w-[232px]">
						<div className="h-[9px]" />
						<div className="flex flex-row py-px ml-2 mb-0.5 rounded active:bg-gray-550/60 hover:bg-gray-550/40 hover:text-gray-100 hover:cursor-pointer h-[42px] items-center pr-2 space-x-4 active:text-white">
							<div className="ml-3">
								<Friends className="w-6 h-6" />
							</div>
							<div className="leading-5">
								Friends
							</div>
						</div>

						<div className="flex flex-row py-px ml-2 mb-0.5 rounded active:bg-gray-550/60 hover:bg-gray-550/40 hover:text-gray-100 hover:cursor-pointer h-[42px] items-center pr-2 space-x-4 active:text-white">
							<div className="ml-3">
								<Nitro className="w-6 h-6" />
							</div>
							<div className="leading-5">
								Nitro
							</div>
						</div>

						<div className="flex flex-row items-center h-10 pt-[14px] pr-2 pb-1 pl-[18px] justify-between group">
							<span className="font-title text-[12px] leading-4 tracking-[.24px] group-hover:text-gray-100 group-hover:cursor-default">DIRECT MESSAGES</span>
							<div>
								<Add className="w-4 h-4 mr-0.5 text-white hover:cursor-pointer" />
							</div>
						</div>

						<div className="w-[216px] text-gray-700 p-4 -translate-y-px">
							<ListPlaceholder />
						</div>
					</div>

					{/* Body bottom */}
					<div className="flex-shrink-0">
						<BottomBar />
					</div>
				</div>
			</div>

			{/* The right part */}
			<div className="flex flex-col w-full min-w-0 overflow-x-hidden bg-gray-700">
				{/* Header */}
				<div className="flex flex-row items-center justify-between h-12 px-2 shadow-sm">
					{/* Left shrinkable part */}
					<div className="flex flex-row items-center overflow-x-hidden">
						{/* Friends */}
						<div className="flex flex-row items-center mr-2">
							<div className="mx-2 text-gray-300">
								<Friends className="w-6 h-6" />
							</div>
							<div className="text-white font-title text-[17px] font-[500] leading-[22px] hover:cursor-default">
								Friends
							</div>
						</div>
						{/* Vertical line */}
						<div className="w-px h-6 mx-2 bg-gray-550/[0.48] antialiased" />
						{/* Rest lables */}
						<div className="flex flex-row items-center">
							<div className="py-0.5 px-2 mx-2 rounded leading-5 text-center font-[500] text-gray-200 hover:cursor-pointer hover:bg-gray-550/40 hover:text-gray-100">Online</div>
							<div className="py-0.5 px-[10.4px] mx-2 rounded leading-5 text-center font-[500] text-gray-200 hover:cursor-pointer hover:bg-gray-550/40 hover:text-gray-100">All</div>
							<div className="py-0.5 px-2 mx-2 rounded leading-5 text-center font-[500] text-gray-200 hover:cursor-pointer hover:bg-gray-550/40 hover:text-gray-100">Pending</div>
							<div className="py-0.5 px-2 mx-2 rounded leading-5 text-center font-[500] text-gray-200 hover:cursor-pointer hover:bg-gray-550/40 hover:text-gray-100">Blocked</div>
							<div className="py-0.5 px-2 mx-2 rounded leading-5 text-center font-[500] text-white hover:cursor-pointer bg-green-600 flex-shrink-0 -tracking-[0.005rem]">Add Friend</div>
						</div>
					</div>
					{/* Right un-shrinkable icons */}
					<div className="relative flex flex-row items-center flex-shrink-0">
						{/* Transparent vertical bar */}
						<div className="absolute w-2 h-6 -left-2 bg-gradient-to-r from-gray-700/0 to-gray-700" />
						<div>Icons</div>
					</div>
				</div>
				{/* Body */}
			</div>
		</>
	);
}
