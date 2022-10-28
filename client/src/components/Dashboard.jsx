import React from 'react';

export default function Dashboard() {
	return (
		<>
			{/* The middle part */}
			<div className="flex-col flex-shrink hidden min-w-0 bg-gray-800 md:flex w-60">
				{/* Header */}
				<div className="flex items-center h-12 px-[10px] w-full shadow-sm">
					<button type="button" className="w-full px-[6px] py-px bg-gray-900 rounded h-7 text-[14px] font-[500] leading-6 text-gray-250 text-left hover:cursor-pointer">Find or start a conversation</button>
				</div>
				{/* Body */}
				<div className="flex-1 p-3 space-y-2 overflow-y-auto font-medium text-gray-300">
					<p className="text-white">Friends</p>
				</div>
			</div>

			{/* The right part */}
			<div className="flex flex-col flex-1 bg-gray-700" />
		</>
	);
}
