import React from 'react';
import image from '../images/pier.jpg';
export default function Home() {
	return (
		<main>
			<img
				src={image}
				alt="Pier at dawn"
				className="absolute object-cover w-full h-full"
			/>
			<section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
				<h1 className="text-6xl text-blue-50 font-bold cursive leading-none lg:leading-snug home-name">
					Hello. My name is Marshall.
				</h1>
			</section>
		</main>
	);
}
