import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { Nav, Server, Dashboard } from './components';
import '../fontStyles.css';
import './app.css';

export default function App() {
	return (
		<Router>
			<div className="flex h-screen text-gray-100">
				<Nav />
				<Routes>
					<Route path="/servers/:id/*" element={<Server />} />
					<Route path="/" element={<Dashboard />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Routes>
			</div>
		</Router>
	);
}
