import React from 'react';
import BottomBar from './BottomBar';
import {
 Friends, Nitro, Add, ListPlaceholder,
} from './icons';

export default function Dashboard() {
	return (
		<>
			{/* The middle part */}
			<div className="flex-col flex-shrink hidden min-w-0 bg-gray-800 md:flex w-60">
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
			<div className="flex flex-col flex-1 bg-gray-700" />
		</>
	);
}
