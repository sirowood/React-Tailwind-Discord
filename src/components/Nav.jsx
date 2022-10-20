/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Discord as DiscordIcon } from './icons';
import data from '../../data';

export default function Nav() {
	return (
		<div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll flex-shrink-0">
			<NavLink href="/">
				<DiscordIcon className="w-7 h-5" />
			</NavLink>

			<hr className="border-t-gray-550/[.48] border-t-2 rounded mx-2" />

			{data.map((server) => (
				<NavLink
					href={`/servers/${server.id}/channels/${server.categories[0].channels[0].id}`}
					key={server.id}
				>
					<img
						src={require(`../../public/servers/${server.img}`).default}
						alt=""
					/>
				</NavLink>
			))}
		</div>
	);
}

function NavLink({ href, children }) {
	const { pathname } = useLocation();
	const active = href.split('/')[2] === pathname.split('/')[2];

	return (
		<Link to={href} className="relative block group">
			<div className="absolute flex items-center -left-3 h-full">
				<div
					className={`${
						active
							? 'h-10'
							: 'h-5 scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100'
					}
					w-1 bg-white rounded-r
					transition-all duration-200 origin-left`}
				/>
			</div>
			<div className="group-active:translate-y-px">
				<div
					className={`${
						active
							? 'bg-brand text-white rounded-2xl'
							: 'group-hover:bg-brand group-hover:text-white group-hover:rounded-2xl rounded-3xl'
					} 
						bg-gray-700 text-gray-100 w-12 h-12
						flex items-center justify-center 
						hover:cursor-pointer
						transition-all duration-200 overflow-hidden`}
				>
					{children}
				</div>
			</div>
		</Link>
	);
}
