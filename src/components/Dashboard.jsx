import React from 'react';

export default function Dashboard() {
	return (
		<>
			<div className="bg-gray-800 w-60 flex flex-col flex-shrink min-w-0">
				<div className="flex items-center h-12 px-3 font-semibold text-title shadow-md font-title">
					Dashboard
				</div>
				<div className="flex-1 p-3 space-y-2 overflow-y-scroll font-medium text-gray-300">
					<p className="text-white">Friends</p>
				</div>
			</div>

			<div className="flex flex-col flex-1 bg-gray-700" />
		</>
	);
}
