/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useParams, Routes, Route, Link, useMatch } from 'react-router-dom';
import data from '../../data';
import * as Icons from './icons';

export default function Server() {
	const { id } = useParams();
	const cid = useParams()['*'].split('/')[1];

	const server = data[+id];
	const channel = server.categories
		.map((category) => category.channels)
		.flat()
		.find((c) => +c.id === +cid);

	const [closedCategories, setClosedCategories] = useState([]);

	function toggleCategory(categoryId) {
		setClosedCategories(
			closedCategories.includes(categoryId)
				? closedCategories.filter((i) => i !== categoryId)
				: [...closedCategories].concat(categoryId)
		);
	}

	return (
		<div className="flex flex-1 flex-row flex-shrink min-w-0">
			<div className="flex flex-col bg-gray-800 w-60">
				{/* Header of channel */}
				<button
					type="button"
					className="h-12 px-4 flex items-center flex-shrink-0
						text-white text-[15px] font-title
						shadow-sm hover:bg-gray-550/[0.4] transition"
				>
					<div className="relative w-4 h-4 mr-1">
						<Icons.Verified className="absolute w-4 h-4 text-gray-550" />
						<Icons.Check className="absolute w-4 h-4" />
					</div>
					{data[id]?.label || `Server ${id}`}
					<Icons.Chevron className="w-[18px] h-[18px] ml-auto opacity-80" />
				</button>

				{/* Body of channel */}
				<div className="text-gray-300 overflow-y-scroll font-medium mt-3 mr-2 space-y-[21px]">
					{/* Sections of body */}
					{data[+id].categories.map((category) => (
						<div key={category.id}>
							{category.label && (
								<button
									type="button"
									onClick={() => toggleCategory(category.id)}
									className="flex items-center px-0.5 text-xs font-title uppercase tracking-wide hover:text-gray-100 w-full"
								>
									<Icons.Arrow
										className={`${
											closedCategories.includes(category.id)
												? '-rotate-90'
												: 'rotate-0'
										} w-3 h-3 mr-0.5 transition`}
									/>
									{category.label}
								</button>
							)}

							<div className="space-y-0.5 mt-[5px]">
								{category.channels
									.filter((c) => {
										const categoryIsOpen = !closedCategories.includes(
											category.id
										);
										return categoryIsOpen || c.unread;
									})
									.map((c) => (
										<ChannelLink channel={c} key={c.id} />
									))}
							</div>
						</div>
					))}
				</div>
			</div>

			<Routes>
				<Route path="/channels/:cid" element={<Message channel={channel} />} />
			</Routes>
		</div>
	);
}

function ChannelLink({ channel }) {
	const Icon = channel.icon ? Icons[channel.icon] : Icons.Hashtag;
	const match = useMatch('/servers/:id/channels/:cid');
	const cid = match?.params.cid;
	const active = channel.id.toString() === cid;
	const state = active
		? 'active'
		: channel.unread
		? 'inactiveUnread'
		: 'inactiveRead';

	const classes = {
		active: 'text-white bg-gray-550/[0.6]',
		inactiveUnread:
			'text-white hover:bg-gray-550/[0.4] active:bg-gray-550[0.6]',
		inactiveRead:
			'text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.4] active:bg-gray-550[0.6]',
	};

	return (
		<Link
			to={`channels/${channel.id}`}
			className={`${classes[state]} flex items-center ml-2 px-2 py-1 rounded group relative`}
		>
			{state === 'inactiveUnread' && (
				<div className="absolute w-1 h-2 left-0 -ml-2 bg-white rounded-r-full" />
			)}
			<Icon className="w-5 h-5 mr-1.5 text-gray-300" />
			{channel.label}
			<Icons.AddPerson className="w-4 h-4 ml-auto text-gray-200 opacity-0 group-hover:opacity-100 hover:text-gray-100" />
		</Link>
	);
}

function Message({ channel }) {
	return (
		<div className="flex flex-col flex-1 overflow-hidden bg-gray-700">
			<div className="flex items-center h-12 px-2 shadow-sm">
				<div className="flex items-center">
					<Icons.Hashtag className="w-6 h-6 mx-2 font-semibold text-gray-400" />
					<span className='mr-2 text-white font-title'>{channel.label}</span>
				</div>

				{channel.description && (
					<>
						<div className="w-px h-6 mx-2 bg-white/[.06]" />
						<div className="mx-2 text-sm font-medium text-gray-200 truncate">
							{channel.description}
						</div>
					</>
				)}

				<div className="flex items-center ml-auto">
					<button type='button' className='text-gray-200 hover:text-gray-100'>
						<Icons.HashtagWithSpeechBubble className='w-6 h-6 mx-2' />
					</button>
					<button type='button' className='text-gray-200 hover:text-gray-100'>
						<Icons.Bell className='w-6 h-6 mx-2' />
					</button>
					<button type='button' className='text-gray-200 hover:text-gray-100'>
						<Icons.Pin className='w-6 h-6 mx-2' />
					</button>
					<button type='button' className='text-gray-200 hover:text-gray-100'>
						<Icons.People className='w-6 h-6 mx-2' />
					</button>
					<button type='button' className='text-gray-200 hover:text-gray-100'>
						<Icons.Inbox className='w-6 h-6 mx-2' />
					</button>
					<button type='button' className='text-gray-200 hover:text-gray-100'>
						<Icons.QuestionCircle className='w-6 h-6 mx-2' />
					</button>
				</div>
			</div>

			<div className="p-3 space-y-4 overflow-y-scroll">Message</div>
		</div>
	);
}