import React, { useState, useEffect } from 'react';
import sanityClient from '../client';

export default function Project() {
	const [projectData, setProjectData] = useState(null);

	useEffect(() => {
		sanityClient
			.fetch(
				`*[_type == "project"]{
			title,
			date,
			place,
			description,
			projectType,
			link,
			tags
		}`
			)
			.then((data) => setProjectData(data))
			.catch(console.error);
	}, []);

	return (
		<main className="bg-blue-100 min-h-screen p-12">
			<section className="container mx-auto">
				<h1 className="text-5xl flex justify-center projet-title cursive">
					Mes projets
				</h1>
				<h2 className="text-lg text-blue-600 flex justify-center mt-4 mb-12">
					Bienvenue sur ma page de projets
				</h2>
				<section className="grid grid-cols-2 gap-8">
					{projectData &&
						projectData.map((project, index) => (
							<article className="relative rounded-lg shadow-xl bg-white p-16">
								<h3 className="text-blue-900 text-3xl font-bold mb-2 hover:text-yellow-500">
									<a
										href={project.link}
										alt={project.title}
										target="-blank"
										rel="noopener noreferrer"
									>
										{project.title}
									</a>
								</h3>
								<div className="text-blue-500 text-xs space-x-4">
									<span>
										<strong className="font-bold">Terminé le</strong>:{' '}
										{new Date(project.date).toLocaleDateString()}
									</span>
									<span>
										<strong className="font-bold">Société</strong>:{' '}
										{project.place}
									</span>
									<span>
										<strong className="font-bold">Type</strong>:{' '}
										{project.projectType}
									</span>
									<p className="my-6 text-lg text-blue-700 leading-relaxed">
										{project.description}
									</p>
									<a
										className="text-blue-500 font-bold hover:underline hover:text-yellow-500"
										rel="noopener noreferrer"
										target="_blank"
										href={project.link}
									>
										Visiter le site{' '}
										<span role="img" aria-label="right pointer">
											👉
										</span>
									</a>
								</div>
							</article>
						))}
				</section>
			</section>
		</main>
	);
}
