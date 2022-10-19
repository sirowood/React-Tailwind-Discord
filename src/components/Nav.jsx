/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import DiscordIcon from './DiscordIcon';

export default function Nav() {
	const { pathname } = useLocation();
	return (
		<div className="w-18 bg-gray-900 p-3 space-y-2 overflow-y-scroll flex-shrink-0">
			<Link to="/" className="relative block group">
				<div className="absolute flex items-center -left-3 h-full">
					<div
						className={`${
							pathname === '/'
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
							pathname === '/'
								? 'bg-brand text-white rounded-2xl'
								: 'group-hover:bg-brand group-hover:text-white group-hover:rounded-2xl'
						} 
							bg-gray-700 text-gray-100 w-12 h-12
							flex items-center justify-center rounded-3xl 
							hover:cursor-pointer
							transition-all duration-200`}
					>
						<DiscordIcon className="w-7 h-5" />
					</div>
				</div>
			</Link>
			<Link
				to="/servers/1"
				className="bg-gray-700 text-gray-100 w-12 h-12
      flex items-center justify-center rounded-3xl 
      hover:bg-brand hover:text-white hover:cursor-pointer hover:rounded-2xl
			transition-all duration-200"
			>
				TW
			</Link>
		</div>
	);
}
