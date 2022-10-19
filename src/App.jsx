import React from 'react';
import { Server, Channel, Message } from './components';
import '../fontStyles.css';
import './app.css';

export default function App() {
	return (
		<div className="flex flex-row text-gray-100 h-screen">
			<Server />
			<Channel />
			<Message />
		</div>
	);
}
