import React from "react";
import {
	HashRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import { Nav, Server, Explore, Dashboard } from "./components";
import '../fontStyles.css';
import './app.css';

export default function App () {
  return (
		<Router>
    <div className="flex h-screen overflow-x-hidden text-gray-100 select-none">
      <Nav />
      <Routes>
					<Route path="/servers/:id/*" element={<Server />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/me" element={<Dashboard />} />
					<Route path="*" element={<Navigate to="/me" />} />
      </Routes>
    </div>
  </Router>
  );
};
