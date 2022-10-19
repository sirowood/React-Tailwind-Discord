/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useParams } from 'react-router-dom';
import {
	AddPersonIcon,
	BookIcon,
	CheckIcon,
	ChevronIcon,
	SpeakerphoneIcon,
	VerifiedIcon,
} from './icons';

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
				<div className="text-gray-300 overflow-y-scroll font-medium mt-[17px] mr-2">
					<div className="space-y-0.5">
						<a
							href="#"
							className="flex items-center ml-2 px-2 py-1 rounded text-gray-300
								hover:bg-gray-550/[0.4] hover:text-gray-100 group"
						>
							<BookIcon className="w-5 h-5 mr-1.5 text-gray-300" />
							welcome
							<AddPersonIcon className="w-4 h-4 ml-auto text-gray-200 opacity-0 group-hover:opacity-100 hover:text-gray-100" />
						</a>
						<a
							href="#"
							className="flex items-center ml-2 px-2 py-1 rounded text-gray-300
								hover:bg-gray-550/[0.4] hover:text-gray-100 group"
						>
							<SpeakerphoneIcon className="w-5 h-5 mr-1.5 text-gray-300" />
							announcements
							<AddPersonIcon className="w-4 h-4 ml-auto text-gray-200 opacity-0 group-hover:opacity-100 hover:text-gray-100" />
						</a>
					</div>
				</div>
			</div>

			<div className="bg-gray-700 flex-1 flex flex-col">
				<div className="px-3 h-12 flex items-center flex-shrink-0 shadow-md text-white font-semibold">
					Main
				</div>
				<div className="p-3 space-y-4 overflow-y-scroll">
					{[...Array(10)].map((_, i) => (
						<p key={`message-${i.toString()}`}>
							Message {i}.Lorem ipsum dolor sit amet. Ex officiis culpa et
							placeat explicabo sed sunt nobis qui voluptatem amet At officiis
							totam vel excepturi ducimus et omnis error. Non dolore pariatur
							non molestiae culpa quo perferendis praesentium. Nam dolor nobis a
							quam nemo eum molestias reiciendis et facere iste in dolorem
							consectetur sed quos optio. Eos consequatur quaerat aut maiores
							dignissimos sed optio perferendis ut architecto omnis? Et quae
							eaque vel obcaecati vero est molestias illo. Aut illo aliquid est
							natus repudiandae sed quas necessitatibus. Id voluptates nisi ex
							blanditiis repellat nam nisi dolorem. Non deserunt aliquid ea
							reprehenderit sapiente est soluta quod et harum aliquam eos veniam
							neque aut minima officiis. Eos omnis nisi non nobis repellat id
							dignissimos excepturi.
						</p>
					))}
				</div>
			</div>
		</div>
	);
}
