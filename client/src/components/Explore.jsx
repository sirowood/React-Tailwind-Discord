import React from 'react';

export default function Explore() {
	return (
		<>
			<div className="flex-col flex-shrink hidden min-w-0 bg-gray-800 md:flex w-60">
				<div className="flex items-center h-12 px-3 font-semibold shadow-md text-title font-title">
					Dscover
				</div>
				<div className="flex-1 p-3 space-y-2 overflow-y-auto font-medium text-gray-300">
					<p className="text-white">Friends</p>
				</div>
			</div>

			<div className="flex flex-col flex-1 bg-gray-700" />
		</>
	);
}
