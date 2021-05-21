import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client';

export default function Post() {
	const [postData, setPost] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "post"]{
				title,
				slug,mainImage{
					asset->{
						_id,
						url
					},
					alt
				}
			}`
			).then((data) => setPost(data)).catch(console.error);
	}, []);

	return (
		<main className="bg-blue-100 min-h-screen p12">
			<section className="container mx-auto">
				<h1 className="text-5xl text-yellow-500 pt-12 flex justify-center cursive">
					Mes Articles
				</h1>
				<h2 className="text-lg text-blue-600 mt-4 flex justify-center mb-12">
					Bienvenue sur ma page d'articles
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{postData &&
						postData.map((post, index) => (
							<article>
								<Link to={'/post/' + post.slug.current} key={post.slug.current}>
									<span
										className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-blue-800"
										key={index}
									>
										<img
											src={post.mainImage.asset.url}
											alt={post.mainImage.alt}
											className="w-full h-full rounded-r object-cover absolute"
										/>
										<span className="block relative flex h-full justify-end items-end pr-4 pb-4">
											<h3 className="text-blue-100 text-lg font-bold px-3 py-4 bg-blue-600 bg-opacity-75 rounded">
												{post.title}
											</h3>
										</span>
									</span>
								</Link>
							</article>
						))}
				</div>
			</section>
		</main>
	);
}
