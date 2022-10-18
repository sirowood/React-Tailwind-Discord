import React from 'react';
import '../fontStyles.css';
import './app.css';

function App() {
	return (
		<div className="flex flex-row text-gray-100 h-screen">
			<div className="bg-gray-900 p-3 space-y-2 overflow-y-scroll">
				{[...Array(40)].map((_, i) => (
					<div
						className="bg-white text-gray-800 w-12 h-12
					flex items-center justify-center rounded-full"
					>
						{i}
					</div>
				))}
			</div>
			<div className="bg-gray-800 w-60 flex flex-col">
				<div className="text-white px-3 font-semibold h-12 flex items-center flex-shrink-0 shadow-md">
					Tailwind CSS
				</div>
				<div className="text-gray-300 p-3 space-y-2 overflow-y-scroll font-medium">
					<p className="text-white">channel (unread)</p>
					<p className="text-white">channel (unread)</p>
					{[...Array(40)].map((_, i) => (
						<p>channel {i}</p>
					))}
				</div>
			</div>
			<div className="bg-gray-700 flex-1 flex flex-col ">
				<div className="px-3 h-12 flex items-center flex-shrink-0 shadow-md">
					Main
				</div>
				<div className="p-3 space-y-4 overflow-y-scroll">
					{[...Array(40)].map((_, i) => (
						<p>
							Message {i}.Lorem ipsum dolor sit amet. Ex officiis culpa et
							placeat explicabo sed sunt nobis qui voluptatem amet At officiis
							totam vel excepturi ducimus et omnis error. Non dolore pariatur
							non molestiae culpa quo perferendis praesentium. Nam dolor nobis a
							quam nemo eum molestias reiciendis et facere iste in dolorem
							consectetur sed quos optio. Eos consequatur quaerat aut maiores
							dignissimos sed optio perferendis ut architecto omnis? Et quae
							eaque vel obcaecati vero est molestias illo. Aut illo aliquid est
							natus repudiandae sed quas necessitatibus. Id voluptates nisi ex
							blanditiis repellat nam nisi dolorem. Non deserunt aliquid ea
							reprehenderit sapiente est soluta quod et harum aliquam eos veniam
							neque aut minima officiis. Eos omnis nisi non nobis repellat id
							dignissimos excepturi.
						</p>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
