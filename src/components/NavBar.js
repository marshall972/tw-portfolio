import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
	return (
		<header className="bg-blue-600 ">
			<div className="container mx-auto flex justify-between ">
				<nav className="flex ">
					<NavLink
						to="/"
						exact
						activeClassName="text-white"
						className="inline-flex items-center py-6 px-3 mr-4 text-blue-50 hover:text-yellow-500 text-4xl font-bold cursive tracking-widest"
					>
						Marshall
					</NavLink>
					<NavLink
						to="/post"
						activeClassName="text-yellow-500 bg-blue-700"
						className=" inline-flex items-center py-3 px-3 my-6 rounded text-blue-50 hover:text-yellow-500 "
					>
						Blog
					</NavLink>
					<NavLink
						to="/project"
						activeClassName="text-yellow-500 bg-blue-700"
						className=" inline-flex items-center py-3 px-3 my-6 rounded text-blue-50 hover:text-yellow-500 "
					>
						Projets
					</NavLink>
					<NavLink
						to="/about"
						activeClassName="text-yellow-500 bg-blue-700"
						className=" inline-flex items-center py-3 px-3 my-6 rounded text-blue-50 hover:text-yellow-500 "
					>
						À propos
					</NavLink>
				</nav>
				<div className="inline-flex py-3 my-6">
					<SocialIcon
						url="https://twitter.com"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://instagram.com"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
					<SocialIcon
						url="https://linkedin.com"
						className="mr-4"
						target="_blank"
						fgColor="#fff"
						style={{ height: 35, width: 35 }}
					/>
				</div>
			</div>
		</header>
	);
}
