import React from 'react';

import { Link } from 'react-router-dom';
import NavBar from './NavBar';

export default function InformacioPersonal() {
	return (
		<div>
			<div className="flex sm:justify-center justify-start ">
				<NavBar />
			</div>
			<div>
				<h1 className="text-amber-400 text-3xl sm:text-6xl pt-10 sm:pt-20 font-bold pb-10 pl-4 sm:pl-8">
					Información personal
				</h1>

				<div className="pl-4 sm:pl-8">
					<div className="flex flex-col ">
						<h3 className="text-amber-400 text-2xl pb-1 sm:text-3xl font-bold">
							Ciudad:{' '}
						</h3>
						<h2 className="text-xl">Mar del Plata, Buenos Aires</h2>
					</div>
					<div className="flex flex-col">
						<h3 className="text-amber-400 text-2xl pb-1 sm:text-3xl font-bold">
							Teléfono:{' '}
						</h3>
						<h2 className="text-xl">+54 9 223 620-5905</h2>
					</div>
					<div className="flex flex-col">
						<h3 className="text-amber-400 text-2xl pb-1 sm:text-3xl font-bold">
							Email:{' '}
						</h3>
						<h2 className="text-xl">camilabosco3@gmail.com</h2>
					</div>
					<div className="flex flex-col">
						<h3 className="text-amber-400 text-2xl pb-1 sm:text-3xl font-bold">
							Linkedin:{' '}
						</h3>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.linkedin.com/in/camila-bosco-5288951b4/"
							className="text-xl underline"
						>
							linkedin.com/in/camila-bosco-5288951b4/
						</a>
					</div>
					<div className="flex flex-col">
						<h3 className="text-amber-400 text-2xl pb-1 sm:text-3xl font-bold">
							Behance:{' '}
						</h3>
						<a
							target="_blank"
							rel="noreferrer"
							href="https://behance.net/camilabosco2"
							className="text-xl underline"
						>
							behance.net/camilabosco2
						</a>
					</div>
				</div>
			</div>
			<Link to="/" className="flex justify-center pt-10">
				<button className="text-2xl border-2 border-amber-400 rounded-xl px-4 py-2 hover:bg-amber-400 hover:text-black ">
					Volver
				</button>
			</Link>
		</div>
	);
}
