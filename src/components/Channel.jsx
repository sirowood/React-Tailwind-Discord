import React from 'react';
import { useParams } from 'react-router-dom';
import Message from './Message';

export default function Channel() {
	const { id } = useParams();
	return (
		<div className="flex flex-1 flex-row">
			<div className="bg-gray-800 w-60 flex flex-col">
				<div className="text-white px-3 font-semibold h-12 flex items-center flex-shrink-0 shadow-md">
					Server {id}
				</div>
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
