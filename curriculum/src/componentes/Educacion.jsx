import React from 'react';
import malha from '../images/Logo Malharro-06.png';
import prom from '../images/Calificacion coder-07.png';
import coder from '../images/Logo CODER-05.png';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

export default function Educacion() {
	return (
		<div>
			<div className="flex sm:justify-center justify-start ">
				<NavBar />
			</div>
			<h1 className="text-2xl text-amber-400 pl-4 pb-8 pt-8 sm:pt-32	 text-3xl sm:text-6xl font-bold sm:ml-8">
				Educación
			</h1>
			<div className="">
				<div className="pb-8">
					<div className="border-2 border-amber-400 flex flex-col flex-wrap rounded-xl px-2 pt-2 pb-2 sm:w-4/5 sm:ml-8 ">
						<h1 className=" text-xl sm:text-3xl font-bold">
							Escuela de Artes Visuales Martín A. Malharro
						</h1>

						<h2 className=" sm:text-2xl sm:mt-4 text-amber-400">
							-Tecnicatura en Diseño Gráfico
						</h2>
						<h2 className="sm:mb-4 sm:text-2xl text-amber-400">
							-Diseñador gráfico profesional
						</h2>
						<h3 className=" sm:text-2xl">Mar del Plata, Argentina</h3>
						<h3 className="sm:text-2xl text-amber-400">
							marzo 2016/Marzo 2021
						</h3>
						<div className="flex justify-end pt-1 ">
							<img
								src={malha}
								alt=""
								className="w-48 sm:w-96 sm:-mb-8  -mb-4"
							/>
						</div>
					</div>
				</div>
				<div className=" border-2 border-amber-400 flex flex-col flex-wrap rounded-xl px-2 py-2 sm:w-4/5 sm:ml-8">
					<div className="sm:flex ">
						<div>
							<h1 className=" text-xl sm:text-3xl font-bold">Coder House</h1>
							<h2 className="sm:mb-4 mt-4 sm:text-2xl text-amber-400">
								-UX/UI bootcamp
							</h2>
							<h3 className=" sm:text-2xl">modalidad ON-LINE</h3>
							<h3 className="sm:mb-4 sm:text-2xl text-amber-400">
								marzo/abril 2021
							</h3>
						</div>
						<img
							src={prom}
							alt=""
							className="w-4/5 h-16  mt-8 sm:w-3/5 sm:h-4/5 sm:ml-28"
						/>
					</div>
					<div className="flex justify-end pt-1 ">
						<img src={coder} alt="" className="w-48 sm:w-96 sm:-mb-8 -mb-4" />
					</div>
				</div>
			</div>
			<Link to="/" className="flex justify-center pt-10 sm:pb-10">
				<button className="text-2xl border-2 border-amber-400 rounded-xl px-4 py-2 hover:bg-amber-400 hover:text-black ">
					Volver
				</button>
			</Link>
		</div>
	);
}
