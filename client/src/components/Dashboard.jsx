import React from 'react';
import BottomBar from './BottomBar';
import { Friends } from './icons';

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
					<div className="overflow-y-auto font-medium text-gray-300 flex-1space-y-2 flex-shrink-1 w-[232px]">
						<div className="h-[9px]" />
						<div className="flex flex-row py-px ml-2 rounded bg-gray-550/60 h-[42px] items-center pr-2 gap-4 text-white">
							<div className="ml-3">
								<Friends className="w-6 h-6" />
							</div>
							<div className="leading-5">
								Friends
							</div>
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
