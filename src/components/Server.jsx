import React from 'react';
import DiscordIcon from './DiscordIcon';

export default function Server() {
	return (
		<div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
			<div
				className="bg-gray-700 text-gray-100 w-12 h-12
      flex items-center justify-center rounded-full 
      hover:bg-brand hover:text-white transition duration-200"
			>
				<DiscordIcon className="w-7 h-5" />
			</div>
		</div>
	);
}
