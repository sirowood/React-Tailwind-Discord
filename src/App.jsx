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
			<div className="flex flex-row flex-1 text-gray-100 h-screen">
				<Nav />
				<Routes>
					<Route path="/servers/:id/*" element={<Server />} />
					<Route path="/servers/@me" element={<Dashboard />} />
					<Route path="*" element={<Navigate to="/servers/@me" />} />
				</Routes>
			</div>
		</Router>
	);
}
