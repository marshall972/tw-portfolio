import React, { useState, useEffect } from 'react';
import sanityClient from '../client';
import palmiers from '../images/palmiers.jpg';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
	return builder.image(source);
}

export default function About() {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "author"]{
				name,
				bio,
				"authorImage": image.asset->url
			}`
			)
			.then((data) => setAuthor(data[0]))
			.catch(console.error);
	}, []);
	if (!author) return <div>Loading...</div>;

	return (
		<main className="relative">
			<img className="absolute w-full" src={palmiers} alt="Palmiers" />
			<div className="p-10 lg:pt-48 container mx-auto relative">
				<section className="bg-blue-600 rounded-lg shadow-2xl lg:flex p-20">
					<img
						className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
						src={urlFor(author.authorImage).url()}
						alt={author.name}
					/>
					<div className="text-lg flex flex-col justify-center">
						<h1 className="cursive text-6xl text-yellow-500 mb-4">
							Salut ! Je m'appelle{" "} <span className="text-blue-100">{author.name}</span>
						</h1>
						<div className="prose lg:prose-xl flex text-white">
							<BlockContent
								blocks={author.bio}
								projectId="tqnmhx2p"
								dataset="production"
							/>
						</div>
					</div>
				</section>
			</div>
		</main>
	);
}
