/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Discord as DiscordIcon, Add, Explore } from './icons';
import data from '../../data';

export default function Nav() {
	const { pathname } = useLocation();

	return (
		<div className="flex flex-col flex-shrink-0 p-3 space-y-2 overflow-y-auto bg-gray-900">
			<Link to="/me" className="relative block group">
				<div className="absolute flex items-center h-full -left-3">
					<div
						className={`${
							pathname === '/me'
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
							pathname === '/me'
								? 'bg-brand text-white rounded-2xl'
								: 'group-hover:bg-brand group-hover:text-white group-hover:rounded-2xl rounded-3xl'
						} 
							bg-gray-700 text-gray-100 w-12 h-12
							flex items-center justify-center 
							hover:cursor-pointer
							transition-all duration-200 overflow-hidden`}
					>
						<DiscordIcon className="h-5 w-7" />
					</div>
				</div>
			</Link>

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

			{/* Add Icon */}
			<div className="group hover:cursor-pointer active:translate-y-px">
				<div
					className="flex items-center justify-center w-12 h-12 overflow-hidden transition-all duration-200 bg-gray-700 text-green-550 group-hover:bg-green-550 group-hover:text-white group-hover:rounded-2xl rounded-3xl"
				>
					<Add className="w-6 h-6" />
				</div>
			</div>

			{/* Explore Icon */}
			<Link to="/explore" className="relative block group">
				<div className="absolute flex items-center h-full -left-3">
					<div
						className={`${
							pathname === '/explore'
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
							pathname === '/explore'
								? 'bg-green-550 text-white rounded-2xl'
								: 'bg-gray-700 hover:text-gray-100 group-hover:bg-green-550 group-hover:text-white text-green-550 group-hover:rounded-2xl rounded-3xl'
						} 
							w-12 h-12
							flex items-center justify-center 
							hover:cursor-pointer
							transition-all duration-200 overflow-hidden`}
					>
						<Explore className="w-6 h-6" />
					</div>
				</div>
			</Link>
		</div>
	);
}

function NavLink({ href, children }) {
	const { pathname } = useLocation();
	const active = href.split('/')[2] === pathname.split('/')[2];

	return (
		<Link to={href} className="relative block group">
			<div className="absolute flex items-center h-full -left-3">
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
