import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav, Channel } from './components';
import '../fontStyles.css';
import './app.css';

export default function App() {
	return (
		<Router>
			<div className="flex flex-row text-gray-100 h-screen">
				<Nav />
				<Routes>
					<Route path="/servers/:id" element={<Channel />} />
					<Route path="/" element={<Channel />} />
				</Routes>
			</div>
		</Router>
	);
}
