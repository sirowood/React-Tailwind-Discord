import React from 'react';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { Nav, Channel, Dashboard } from './components';
import '../fontStyles.css';
import './app.css';

export default function App() {
	return (
		<Router>
			<div className="flex flex-row text-gray-100 h-screen">
				<Nav />
				<Routes>
					<Route path="/channels/:id" element={<Channel />} />
					<Route path="/channels/@me" element={<Dashboard />} />
					<Route path="*" element={<Navigate to="/channels/@me" />} />
				</Routes>
			</div>
		</Router>
	);
}
