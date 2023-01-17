import React from 'react';
import { Link } from 'react-router-dom';

export default function Experiencia() {
	return (
		<div>
			<div>
				<h1 className="text-2xl text-amber-400 pl-4 pb-8 pt-8 sm:pt-32	 text-3xl sm:text-6xl font-bold sm:ml-8">
					{' '}
					Experiencia laboral
				</h1>
				<div className="sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:grid-flow-row">
					<div className="px-4 pb-4 sm:w-[45vw] sm:ml-8 ">
						<div className="border-2 border-amber-400 rounded-xl py-2 px-2 sm:py-4 sm:px-4">
							<h1 className="text-xl sm:text-3xl ">RANDOM! Taller gráfico</h1>
							<h3 className="text-amber-400 pt-1 sm:text-2xl">
								Diseñadora gráfica freelancer
							</h3>
							<h2 className="text-amber-400 pt-1 sm:text-xl ">
								septiembre 2019 - actualidad
							</h2>
							<p className="pt-1 sm:text-xl">
								- Concepto y desarrollo de marcas, identidad visual, diseño de
								piezas gráficas, diseño editorial, contenido para redes,
								presentaciones, comunicación, edición de foto y video,
								animaciones, packaging, trabajos de imprenta y gráfica.
							</p>
							<p className="pt-1 sm:text-xl">
								- Trabajos con clientes nacionales de Argentina y en
								Latinoamérica de Uruguay y Colombia.
							</p>
							<p className="pt-1 sm:text-xl">
								- Emprendimiento personal de sublimación y estampas
								personalizadas para empresas y clientes finales.
							</p>
						</div>
					</div>
					<div className="px-4 pb-4 sm:w-[45vw] ">
						<div className="border-2 border-amber-400 rounded-xl py-2 px-2 sm:py-4 sm:px-4">
							<h1 className="text-xl sm:text-3xl">
								FRANCOSMÉTICA Distribuidora
							</h1>
							<h3 className="text-amber-400 pt-1 sm:text-2xl">
								Diseñadora gráfica | e-commerce
							</h3>
							<h2>modalidad presencial</h2>
							<h2 className="text-amber-400 pt-1 sm:text-xl">
								mayo 2019 - septiembre 2020
							</h2>
							<p className="pt-1 sm:text-xl">-Community Manager.</p>
							<p className="pt-1 sm:text-xl">
								-Creación y manejo de e-commerce en plataforma TIENDUP. Creación
								de produc- tos, realización y actualización de stocks, creación
								de miles de SKUs. Incremento del porcentaje de ventas online a
								través de distintos mecanismos.
							</p>
							<p className="pt-1 sm:text-xl">
								-Control, ventas y armado de pedidos por medio de plataforma
								Mercado Libre y Mercado Shops.
							</p>
						</div>
					</div>
					<div className="px-4 pb-4 sm:pb-0 sm:w-[45vw] sm:ml-8">
						<div className="border-2 border-amber-400 rounded-xl py-2 px-2 sm:py-4 sm:px-4">
							<h1 className="text-xl sm:text-3xl">BELLAVISTA Distribuidora</h1>
							<h3 className="text-amber-400 pt-1 sm:text-2xl">
								Diseñadora gráfica | e-commerce
							</h3>
							<h2>modalidad híbrida (presencial-remoto)</h2>
							<h2 className="text-amber-400 pt-1 sm:text-xl">
								septiembre 2020 - noviembre 2021
							</h2>
							<p className="pt-1 sm:text-xl">
								-Diseño de identidad corporativa completa y catálogo de
								productos.
							</p>
							<p className="pt-1 sm:text-xl">
								-Encargada de todo lo relacionado con Social Media y atención al
								cliente vía online.
							</p>
							<p className="pt-1 sm:text-xl">
								-Creación y manejo de e-commerce en plataforma Tienda Nube.
							</p>
							<p className="pt-1 sm:text-xl">
								-Control y venta de productos por medio de plataforma Mercado
								Libre.
							</p>
						</div>
					</div>

					<div className="px-4 pb-4  sm:w-[45vw]  ">
						<div className="border-2 border-amber-400 rounded-xl py-2 px-2 sm:py-4 sm:px-4">
							<h1 className="text-xl sm:text-3xl">MACROFER Paseo ferretero</h1>
							<h3 className="text-amber-400 pt-1 sm:text-2xl">
								Diseñadora gráfica
							</h3>
							<h2>modalidad presencial</h2>
							<h2 className="text-amber-400 pt-1 sm:text-xl">
								febrero 2019 - mayo 2020
							</h2>
							<p className="pt-1 sm:text-xl">
								-Manejo de redes sociales, creación de contenido y fotografía de
								extenso catálogo de productos para incluir en e-commerce.
							</p>
							<p className="pt-1 sm:text-xl">
								-Ventas a través de plataforma e-commerce y mercado libre.
							</p>
							<p className="pt-1 sm:text-xl">
								-Creación de catálogo de productos físico y digital.
							</p>
						</div>
					</div>
				</div>
			</div>
			<Link to="/" className="flex justify-center pt-4 sm:pb-10">
				<button className="text-2xl border-2 border-amber-400 rounded-xl px-4 py-2 hover:bg-amber-400 hover:text-black ">
					Volver
				</button>
			</Link>
		</div>
	);
}
