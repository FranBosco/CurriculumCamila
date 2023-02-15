// import React from 'react';
// import foto from '../images/foto.png';
// import { RiStarSFill } from 'react-icons/ri';
// import { SiAdobeillustrator } from 'react-icons/si';
// import { SiAdobeindesign } from 'react-icons/si';
// import { RiStarSLine } from 'react-icons/ri';
// import { SiFigma } from 'react-icons/si';
// import { SiAdobeaftereffects } from 'react-icons/si';
// import { SiAdobephotoshop } from 'react-icons/si';
// import { SiAdobexd } from 'react-icons/si';
// import { Icon } from '@iconify/react';
// import { Link } from 'react-router-dom';
// import { MdSubdirectoryArrowRight } from 'react-icons/md';

// export default function HomePage() {
// 	return (
// 		<div className="flex flex-col ">
// 			<div className="flex justify-center pt-20 pl-8">
// 				<img src={foto} alt="" className="w-36 h-36  sm:w-64 sm:h-64 " />

// 				<div className="pl-6 sm:pl-20">
// 					<h1 className="text-2xl sm:text-7xl sm:font-bold pt-2 sm:pt-8 ">
// 						Bosco Camila
// 					</h1>
// 					<h2 className="sm:text-5xl text-amber-400 sm:text-bold sm:pt-4">
// 						Diseñadora gráfica
// 					</h2>
// 					<h2 className="sm:text-5xl text-amber-400 sm:text-bold sm:pt-4">
// 						Diseñadora UX/UI
// 					</h2>
// 				</div>
// 			</div>
// 			<div className="sm:pl-48 sm:pr-48 sm:pt-20 pt-8">
// 				<h1 className="text-2xl text-amber-400 pb-4 px-4 font-bold  sm:text-5xl sm:pb-8 ">
// 					Sobre mí
// 				</h1>
// 				<p className="px-4 ">
// 					Tengo 25 años, soy Diseñadora Gráfica Profesional recibida en la
// 					ciudad de Mar del Plata, Argentina. Soy una persona a la que no le
// 					gusta la monotonía, por eso busco con mis conocimientos, ingresar en
// 					un ambiente en el que pueda expresar mis ideas y explotar al máximo mi
// 					creatividad. Me gusta recibir nuevos desafíos y proyectos todos los
// 					días. Tengo facilidad para trabajar en equipo, soy responsable y
// 					activa, dispuesta a colaborar en un ambiente proactivo y siempre en
// 					pos de ayudar y llevar adelante los proyectos y dificultades de manera
// 					responsable.
// 				</p>
// 			</div>
// 			<div className="sm:pl-48 sm:pr-48 sm:pt-20 pt-8">
// 				<h1 className="text-2xl text-amber-400 pb-4 sm:pb-8 font-bold  sm:text-5xl flex px-4">
// 					Mis intereses
// 				</h1>
// 				<ul className="flex sm:flex-wrap flex-col sm:flex-row px-4 justify-center">
// 					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center ">
// 						desarrollo de identidad
// 					</li>
// 					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
// 						diseño de piezas graficas
// 					</li>
// 					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
// 						presentaciones
// 					</li>
// 					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
// 						trabajos editoriales
// 					</li>
// 					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
// 						prototipos funcionales
// 					</li>
// 					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
// 						UX
// 					</li>
// 					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
// 						UI
// 					</li>
// 					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
// 						catálogos
// 					</li>
// 					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
// 						redes sociales
// 					</li>
// 					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
// 						venta online
// 					</li>
// 					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
// 						e-commerce
// 					</li>
// 				</ul>
// 			</div>

// 			<div className="sm:pl-48 sm:pr-48 sm:pt-20 pt-8">
// 				<h1 className="text-2xl text-amber-400 pb-4 sm:pb-8 font-bold  sm:text-5xl flex px-4">
// 					Skills
// 				</h1>
// 				<ul className="grid sm:grid-rows-3 grid-rows-4 grid-flow-col sm:gap-4   ">
// 					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex ">
// 						<div>
// 							<SiAdobeillustrator className="text-amber-400 text-3xl sm:text-8xl  " />
// 						</div>
// 						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
// 							<div className="flex pl-3 sm:justify-center">
// 								<h2 className=" pb-1 text-xl text-white sm:text-4xl flex justify-center">
// 									Illustrator
// 								</h2>
// 							</div>
// 							<div className="flex flex-row sm:pl-4 ">
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 							</div>
// 							<h2 className="flex justify-center text-sm   sm:text-2xl">
// 								avanzado
// 							</h2>
// 						</div>
// 					</li>
// 					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex ">
// 						<div className="">
// 							<SiAdobeindesign className="text-amber-400 text-3xl sm:text-8xl  " />
// 						</div>
// 						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
// 							<div className="flex pl-3 sm:justify-center">
// 								<h2 className=" pb-1 text-xl text-white sm:text-4xl flex justify-center">
// 									InDesign
// 								</h2>
// 							</div>
// 							<div className="flex flex-row sm:pl-4">
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 							</div>
// 							<h2 className="flex justify-center text-sm   sm:text-2xl">
// 								avanzado
// 							</h2>
// 						</div>
// 					</li>
// 					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex ">
// 						<div className="">
// 							<SiFigma className="text-amber-400 text-3xl sm:text-8xl  " />
// 						</div>
// 						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
// 							<div className="flex pl-3 sm:justify-center">
// 								<h2 className=" pb-1 text-xl text-white sm:text-4xl flex justify-center">
// 									Figma
// 								</h2>
// 							</div>
// 							<div className="flex flex-row sm:pl-4">
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSLine />
// 							</div>
// 							<h2 className="flex justify-center text-sm  sm:text-2xl">
// 								avanzado
// 							</h2>
// 						</div>
// 					</li>
// 					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex ">
// 						<div className="">
// 							<SiAdobeaftereffects className="text-amber-400 text-3xl sm:text-8xl  " />
// 						</div>
// 						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
// 							<div className="flex pl-3 sm:justify-center">
// 								<h2 className=" pb-1 text-xl text-white sm:text-4xl flex justify-center">
// 									After Effects
// 								</h2>
// 							</div>
// 							<div className="flex flex-row sm:pl-4">
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSLine />
// 								<RiStarSLine />
// 							</div>
// 							<h2 className="flex justify-center text-sm sm:text-2xl">medio</h2>
// 						</div>
// 					</li>

// 					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex ">
// 						<div className="">
// 							<SiAdobephotoshop className="text-amber-400 text-3xl sm:text-8xl  " />
// 						</div>
// 						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
// 							<div className="flex pl-3 sm:justify-center">
// 								<h2 className=" pb-1 text-xl text-white sm:text-4xl flex justify-center">
// 									Photoshop
// 								</h2>
// 							</div>
// 							<div className="flex flex-row sm:pl-4">
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 							</div>
// 							<h2 className="flex justify-center text-sm sm:text-2xl">
// 								avanzado
// 							</h2>
// 						</div>
// 					</li>

// 					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex ">
// 						<div className="">
// 							<SiAdobexd className="text-amber-400 text-3xl sm:text-8xl  " />
// 						</div>
// 						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
// 							<div className="flex pl-3 sm:justify-center">
// 								<h2 className=" pb-1 text-xl text-white sm:text-4xl flex justify-center">
// 									XD
// 								</h2>
// 							</div>
// 							<div className="flex flex-row sm:pl-4">
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 							</div>
// 							<h2 className="flex justify-center text-sm sm:text-2xl">
// 								avanzado
// 							</h2>
// 						</div>
// 					</li>

// 					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex ">
// 						<div className="">
// 							{/* <SiAdobeindesign className="text-amber-400 text-3xl sm:text-8xl  " /> */}
// 							<Icon
// 								icon="file-icons:coreldraw-alt"
// 								className="text-amber-400 text-3xl sm:text-8xl"
// 							/>
// 						</div>
// 						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
// 							<div className="flex pl-3 sm:justify-center">
// 								<h2 className=" pb-1 text-xl text-white sm:text-4xl flex justify-center">
// 									Corel Draw
// 								</h2>
// 							</div>
// 							<div className="flex flex-row sm:pl-4">
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 								<RiStarSFill />
// 							</div>
// 							<h2 className="flex justify-center text-sm sm:text-2xl">
// 								avanzado
// 							</h2>
// 						</div>
// 					</li>
// 				</ul>
// 			</div>
// 			<div className="sm:pl-48 sm:pr-48 sm:pt-20 pt-8">
// 				<h1 className="text-2xl text-amber-400 pb-4 sm:pb-8 font-bold  sm:text-5xl flex px-4">
// 					Links
// 				</h1>
// 				<div>
// 					<Link to="/info" className="flex ml-4 sm:mb-4 hover:text-amber-400">
// 						<MdSubdirectoryArrowRight className="mr-2 text-2xl sm:mr-4 sm:text-4xl" />
// 						<h1 className="text-xl sm:text-2xl ">Informacion Personal</h1>
// 					</Link>
// 					<Link
// 						to="/educacion"
// 						className="flex ml-4 sm:mb-4 hover:text-amber-400"
// 					>
// 						<MdSubdirectoryArrowRight className="mr-2 text-2xl sm:mr-4 sm:text-4xl" />
// 						<h1 className="text-xl sm:text-2xl">Educación</h1>
// 					</Link>

// 					<Link
// 						to="/experiencia"
// 						className="flex ml-4 sm:mb-4 hover:text-amber-400"
// 					>
// 						<MdSubdirectoryArrowRight className="mr-2 text-2xl sm:mr-4 sm:text-4xl" />
// 						<h1 className="text-xl sm:text-2xl">Experiencia</h1>
// 					</Link>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
import React from 'react';
import foto from '../images/foto.png';
import { RiStarSFill } from 'react-icons/ri';
import { SiAdobeillustrator } from 'react-icons/si';
import { SiAdobeindesign } from 'react-icons/si';
import { RiStarSLine } from 'react-icons/ri';
import { SiFigma } from 'react-icons/si';
import { SiAdobeaftereffects } from 'react-icons/si';
import { SiAdobephotoshop } from 'react-icons/si';
import { SiAdobexd } from 'react-icons/si';
import { Icon } from '@iconify/react';
import NavBar from './NavBar';

export default function HomePage() {
	return (
		<div className="flex flex-col  ">
			<div className="flex sm:justify-center justify-start ">
				<NavBar />
			</div>
			<div className="flex justify-center pt-20 pl-8">
				<img src={foto} alt="" className="w-36 h-36  sm:w-64 sm:h-64 " />

				<div className="pl-6 sm:pl-20">
					<h1 className="text-2xl sm:text-7xl sm:font-bold pt-8 sm:pt-8 ">
						Bosco Camila
					</h1>
					<h2 className="sm:text-5xl text-amber-400 sm:text-bold sm:pt-4">
						Diseñadora gráfica
					</h2>
					<h2 className="sm:text-5xl text-amber-400 sm:text-bold sm:pt-4">
						Diseñadora UX/UI
					</h2>
				</div>
			</div>
			<div className="sm:pl-32 sm:pr-48 sm:pt-20 pt-8">
				<h1 className="text-2xl text-amber-400 pb-4 px-4 font-bold  sm:text-5xl sm:pb-8 ">
					Sobre mí
				</h1>
				<p className="px-4 ">
					Tengo 25 años, soy Diseñadora Gráfica Profesional recibida en la
					ciudad de Mar del Plata, Argentina. Soy una persona a la que no le
					gusta la monotonía, por eso busco con mis conocimientos, ingresar en
					un ambiente en el que pueda expresar mis ideas y explotar al máximo mi
					creatividad. Me gusta recibir nuevos desafíos y proyectos todos los
					días. Tengo facilidad para trabajar en equipo, soy responsable y
					activa, dispuesta a colaborar en un ambiente proactivo y siempre en
					pos de ayudar y llevar adelante los proyectos y dificultades de manera
					responsable.
				</p>
			</div>
			<div className="sm:pl-32 sm:pr-48 sm:pt-20 pt-8">
				<h1 className="text-2xl text-amber-400 pb-4 sm:pb-8 font-bold  sm:text-5xl flex px-4">
					Mis intereses
				</h1>
				<ul className="flex sm:flex-wrap flex-col sm:flex-row px-4 justify-center">
					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center ">
						desarrollo de identidad
					</li>
					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
						diseño de piezas graficas
					</li>
					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
						presentaciones
					</li>
					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
						trabajos editoriales
					</li>
					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
						prototipos funcionales
					</li>
					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
						UX
					</li>
					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
						UI
					</li>
					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
						catálogos
					</li>
					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
						redes sociales
					</li>
					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
						venta online
					</li>
					<li className="py-2 px-2 border-4 border-amber-400 sm:py-8 sm:px-8 sm:text-2xl mr-4 mb-4 rounded-2xl flex justify-center">
						e-commerce
					</li>
				</ul>
			</div>

			<div className="sm:pl-32 sm:pr-48 sm:pt-20 pt-8 max-w-screen">
				<h1 className="text-2xl text-amber-400 pb-4 sm:pb-8 font-bold  sm:text-5xl flex px-4">
					Skills
				</h1>
				<ul className="sm:grid sm:grid-rows-3  sm:grid-flow-col sm:gap-4 pl-2 sm:pl-0   ">
					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex ">
						<div>
							<SiAdobeillustrator className="text-amber-400 text-6xl sm:text-8xl  " />
						</div>
						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
							<div className="flex pl-3 justify-center">
								<h2 className=" pb-1 text-2xl text-white sm:text-4xl flex justify-center">
									Illustrator
								</h2>
							</div>
							<div className="flex flex-row sm:pl-4 pl-4 ">
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
							</div>
							<h2 className="flex justify-center text-sm   sm:text-2xl">
								avanzado
							</h2>
						</div>
					</li>
					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex ">
						<div className="">
							<SiAdobeindesign className="text-amber-400 text-6xl sm:text-8xl  " />
						</div>
						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
							<div className="flex pl-3 justify-center">
								<h2 className=" pb-1 text-2xl text-white sm:text-4xl flex justify-center">
									InDesign
								</h2>
							</div>
							<div className="flex flex-row sm:pl-4 pl-4">
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
							</div>
							<h2 className="flex justify-center text-sm   sm:text-2xl">
								avanzado
							</h2>
						</div>
					</li>
					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex ">
						<div className="">
							<SiFigma className="text-amber-400 text-6xl sm:text-8xl  " />
						</div>
						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
							<div className="flex pl-3 justify-center">
								<h2 className=" pb-1 text-xl text-white sm:text-4xl flex justify-center">
									Figma
								</h2>
							</div>
							<div className="flex flex-row pl-4 ">
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSLine />
							</div>
							<h2 className="flex justify-center text-sm  sm:text-2xl">
								avanzado
							</h2>
						</div>
					</li>
					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex ">
						<div className="">
							<SiAdobeaftereffects className="text-amber-400 text-6xl sm:text-8xl  " />
						</div>
						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
							<div className="flex pl-3 justify-center">
								<h2 className=" pb-1 text-xl text-white sm:text-4xl flex justify-center">
									After Effects
								</h2>
							</div>
							<div className="flex flex-row pl-4">
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSLine />
								<RiStarSLine />
							</div>
							<h2 className="flex justify-center text-sm sm:text-2xl">medio</h2>
						</div>
					</li>

					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex ">
						<div className="">
							<SiAdobephotoshop className="text-amber-400 text-6xl sm:text-8xl  " />
						</div>
						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
							<div className="flex pl-3 justify-center">
								<h2 className=" pb-1 text-xl text-white sm:text-4xl flex justify-center">
									Photoshop
								</h2>
							</div>
							<div className="flex flex-row pl-4">
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
							</div>
							<h2 className="flex justify-center text-sm sm:text-2xl">
								avanzado
							</h2>
						</div>
					</li>

					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex ">
						<div className="">
							<SiAdobexd className="text-amber-400 text-6xl sm:text-8xl  " />
						</div>
						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
							<div className="flex pl-3 justify-center">
								<h2 className=" pb-1 text-xl text-white sm:text-4xl flex justify-center">
									XD
								</h2>
							</div>
							<div className="flex flex-row pl-4">
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
							</div>
							<h2 className="flex justify-center text-sm sm:text-2xl">
								avanzado
							</h2>
						</div>
					</li>

					<li className="py-2 px-2 sm:pb-10 sm:pr-4 flex  sm:pl-0 ">
						<div className="">
							{/* <SiAdobeindesign className="text-amber-400 text-3xl sm:text-8xl  " /> */}
							<Icon
								icon="file-icons:coreldraw-alt"
								className="text-amber-400 text-6xl sm:text-8xl"
							/>
						</div>
						<div className="flex flex-col  text-2xl text-amber-400 sm:text-4xl">
							<div className="flex pl-8 sm:pl-3 justify-center">
								<h2 className=" pb-1 text-xl text-white sm:text-4xl flex justify-center">
									Corel Draw
								</h2>
							</div>
							<div className="flex flex-row pl-8 sm:pl-4">
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
								<RiStarSFill />
							</div>
							<h2 className="flex justify-center text-sm sm:text-2xl sm:pl-0 pl-6">
								avanzado
							</h2>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}
