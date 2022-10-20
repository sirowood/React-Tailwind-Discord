/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useParams, Routes, Route, Link, useMatch } from 'react-router-dom';
import data from '../../data.json';
import * as Icons from './icons';

export default function Server() {
	const { id } = useParams();
	const [closedCategories, setClosedCategories] = useState([]);

	function toggleCategory(categoryId) {
		setClosedCategories(closedCategories.includes(categoryId)
			? closedCategories.filter((cid) => cid !== categoryId)
			: [...closedCategories].concat(categoryId)
		);
	};

	return (
		<div className="flex flex-1 flex-row">
			<div className="bg-gray-800 w-60 flex flex-col">
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
					{data['1'].categories.map((category) => (
						<div key={category.id}>
							{category.label && (
								<button
									type="button"
									onClick={() => toggleCategory(category.id)}
									className="flex items-center px-0.5 text-xs font-title uppercase tracking-wide hover:text-gray-100 w-full"
								>
									<Icons.Arrow className={`${closedCategories.includes(category.id) ? '-rotate-90' : 'rotate-0'} w-3 h-3 mr-0.5 transition`} />
									{category.label}
								</button>
							)}

							<div className="space-y-0.5 mt-[5px]">
								{category.channels.filter((channel) => {
									const categoryIsOpen = !closedCategories.includes(category.id);
									return categoryIsOpen || channel.unread;
								}).map((channel) => (
									<ChannelLink channel={channel} key={channel.id} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>

			<Routes>
				<Route path="/channels/:cid" element={<Message />} />
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
			: 'inactiveRead'

	const classes = {
		active: 'text-white bg-gray-550/[0.6]',
		inactiveUnread: 'text-white hover:bg-gray-550/[0.4] active:bg-gray-550[0.6]',
		inactiveRead: 'text-gray-300 hover:text-gray-100 hover:bg-gray-550/[0.4] active:bg-gray-550[0.6]',
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

function Message() {
	return (
		<div className="bg-gray-700 flex-1 flex flex-col">
			<div className="px-3 h-12 flex items-center flex-shrink-0 shadow-md text-white font-semibold">
				Main
			</div>
			<div className="p-3 space-y-4 overflow-y-scroll">
				{[...Array(10)].map((_, i) => (
					<p key={`message-${i.toString()}`}>
						Message {i}.Lorem ipsum dolor sit amet. Ex officiis culpa et placeat
						explicabo sed sunt nobis qui voluptatem amet At officiis totam vel
						excepturi ducimus et omnis error. Non dolore pariatur non molestiae
						culpa quo perferendis praesentium. Nam dolor nobis a quam nemo eum
						molestias reiciendis et facere iste in dolorem consectetur sed quos
						optio. Eos consequatur quaerat aut maiores dignissimos sed optio
						perferendis ut architecto omnis? Et quae eaque vel obcaecati vero
						est molestias illo. Aut illo aliquid est natus repudiandae sed quas
						necessitatibus. Id voluptates nisi ex blanditiis repellat nam nisi
						dolorem. Non deserunt aliquid ea reprehenderit sapiente est soluta
						quod et harum aliquam eos veniam neque aut minima officiis. Eos
						omnis nisi non nobis repellat id dignissimos excepturi.
					</p>
				))}
			</div>
		</div>
	);
}
