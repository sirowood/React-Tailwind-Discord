import React from 'react';
import BottomBar from './BottomBar';
import {
 Friends, Nitro, Add, ListPlaceholder,
 AddMessage, Inbox, QuestionCircle,
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
				<div className="flex flex-row items-center justify-between flex-shrink-0 h-12 px-2 shadow-sm">
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
						<div className="w-px h-6 mx-2 bg-gray-550/[0.48]" />
						{/* Rest lables */}
						<div className="flex flex-row items-center font-[500]">
							<div className="py-0.5 px-2 mx-2 rounded leading-5 text-center text-gray-200 hover:cursor-pointer hover:bg-gray-550/40 hover:text-gray-100">Online</div>
							<div className="py-0.5 px-[10.5px] mx-2 rounded leading-5 text-center text-gray-200 hover:cursor-pointer hover:bg-gray-550/40 hover:text-gray-100">All</div>
							<div className="py-0.5 px-2 mx-2 rounded leading-5 text-center text-gray-200 hover:cursor-pointer hover:bg-gray-550/40 hover:text-gray-100">Pending</div>
							<div className="py-0.5 px-2 mx-2 rounded leading-5 text-center text-gray-200 hover:cursor-pointer hover:bg-gray-550/40 hover:text-gray-100">Blocked</div>
							<div className="py-0.5 px-2 mx-2 rounded leading-5 text-center text-white hover:cursor-pointer bg-green-600 flex-shrink-0 -tracking-[0.005rem]">Add Friend</div>
						</div>
					</div>
					{/* Right un-shrinkable icons */}
					<div className="relative flex flex-row items-center flex-shrink-0 bg-gray-700">
						{/* Transparent vertical bar */}
						<div className="absolute w-2 h-6 -left-2 bg-gradient-to-r from-gray-700/0 to-gray-700" />
						{/* Icons */}
						<div className="flex flex-row items-center text-gray-200">
							<div className="relative group">
								<AddMessage className="hidden w-6 h-6 mx-2 hover:cursor-pointer special:block" />
								<div className="hidden group-hover:block absolute border-[5px] translate-x-4 top-[18px] translate-y-1 border-t-transparent border-x-transparent border-b-gray-1000" />
								<div
									className="hidden group-hover:block hover:cursor-default shadow-lg
										absolute px-3 py-2 text-sm font-[500] leading-4 text-gray-100
										rounded-[5px] w-max bg-gray-1000 -left-[100%] translate-x-0.5 translate-y-2"
								>
									New Group DM
								</div>
							</div>
							{/* Vertical line */}
							<div className="w-px h-6 mx-2 bg-gray-550/[0.48] hidden special:block" />
							<div className="relative group">
								<Inbox className="w-6 h-6 mx-2 hover:cursor-pointer hover:text-gray-100" />
								<div className="hidden group-hover:block absolute border-[5px] translate-x-[15px] top-[18px] translate-y-1 border-t-transparent border-x-transparent border-b-gray-1000" />
								<div
									className="hidden group-hover:block hover:cursor-default shadow-lg
										absolute px-3 py-2 text-sm font-[500] leading-4 text-gray-100
										rounded-[5px] w-max bg-gray-1000 -translate-x-2 translate-y-2"
								>
									Inbox
								</div>
							</div>
							<div className="relative group">
								<QuestionCircle className="w-6 h-6 mx-2 hover:cursor-pointer hover:text-gray-100" />
								<div className="hidden group-hover:block absolute border-[5px] translate-x-[15px] top-[18px] translate-y-1 border-t-transparent border-x-transparent border-b-gray-1000" />
								<div
									className="hidden group-hover:block hover:cursor-default shadow-lg
										absolute px-3 py-2 text-sm font-[500] leading-4 text-gray-100
										rounded-[5px] w-max bg-gray-1000 -translate-x-4 translate-y-2"
								>
									Help
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Body */}
				<div className="flex flex-row w-full h-full">
					<div className="flex flex-col items-center justify-center grow">
						<div>Img</div>
						<div>No one&apos;s around to play with Wumpus.</div>
					</div>
					<div className="flex flex-col w-[358px] ml-0.5 border-l-[1px] border-l-gray-550/[0.48] p-4 pr-2 flex-shrink-0">
						<div>Active Now</div>
						<div>It&apos;s quiet for now...</div>
						<div>
							When a friend starts an activity -
							like playing a game or hanging out on voice - we&apos;ll show it here!
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
