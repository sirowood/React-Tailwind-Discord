import React from 'react';
import { useParams } from 'react-router-dom';
import { CheckIcon, ChevronIcon, VerifiedIcon } from './icons';
import Message from './Message';

export default function Channel() {
	const { id } = useParams();
	return (
		<div className="flex flex-1 flex-row">
			<div className="bg-gray-800 w-60 flex flex-col">
				<button
					type="button"
					className="h-12 px-4 flex items-center flex-shrink-0
						text-white text-[15px] font-title
						shadow-sm hover:bg-gray-550/[0.4] transition"
				>
					<div className="relative w-4 h-4 mr-1">
						<VerifiedIcon className="absolute w-4 h-4 text-gray-550" />
						<CheckIcon className="absolute w-4 h-4" />
					</div>
					Server {id}
					<ChevronIcon className="w-[18px] h-[18px] ml-auto opacity-80" />
				</button>
				<div className="text-gray-300 p-3 space-y-2 overflow-y-scroll font-medium">
					<p className="text-white">general</p>
					{[...Array(20)].map((_, i) => (
						<p key={`channel-${i.toString()}`}>channel {i}</p>
					))}
				</div>
			</div>
			<Message />
		</div>
	);
}
