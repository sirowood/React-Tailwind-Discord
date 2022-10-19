import React from 'react';

export default function Message() {
	return (
		<div className="bg-gray-700 flex-1 flex flex-col">
			<div className="px-3 h-12 flex items-center flex-shrink-0 shadow-md text-white font-semibold">
				Main
			</div>
			<div className="p-3 space-y-4 overflow-y-scroll">
				{[...Array(10)].map((_, i) => (
					<p>
						Message {i}.Lorem ipsum dolor sit amet. Ex officiis culpa et placeat
						explicabo sed sunt nobis qui voluptatem amet At officiis totam vel
						excepturi ducimus et omnis error. Non dolore pariatur non molestiae
						culpa quo perferendis praesentium. Nam dolor nobis a quam nemo eum
						molestias reiciendis et facere iste in dolorem consectetur sed quos
						optio. Eos consequatur quaerat aut maiores dignissimos sed optio
						perferendis ut architecto omnis? Et quae eaque vel obcaecati vero
						est molestias illo. Aut illo aliquid est natus repudiandae sed quas
						necessitatibus. Id voluptates nisi ex blanditiis repellat nam nisi
						dolorem. Non deserunt aliquid ea reprehenderit sapiente est soluta
						quod et harum aliquam eos veniam neque aut minima officiis. Eos
						omnis nisi non nobis repellat id dignissimos excepturi.
					</p>
				))}
			</div>
		</div>
	);
}
