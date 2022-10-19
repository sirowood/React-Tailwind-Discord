import React from 'react';

export default function Dashboard() {
	return (
		<div className="flex flex-1 flex-row">
			<div className="bg-gray-800 w-60 flex flex-col">
				<div className="text-white px-3 font-semibold h-12 flex items-center flex-shrink-0 shadow-md">
					Dashboard
				</div>
				<div className="text-gray-300 p-3 space-y-2 overflow-y-scroll font-medium">
					<p className="text-white">Friends</p>
				</div>
			</div>
			<div className="bg-gray-700 flex-1 flex flex-col" />
		</div>
	);
}
