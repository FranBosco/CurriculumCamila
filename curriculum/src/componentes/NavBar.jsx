import { useState, useEffect } from 'react';
import {
	Navbar,
	MobileNav,
	Typography,
	Button,
	IconButton
} from '@material-tailwind/react';

export default function Example() {
	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener(
			'resize',
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<a href="http://localhost:3000/info" className="flex items-center">
					Información personal
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<a href="http://localhost:3000/educacion" className="flex items-center">
					Educación
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<a
					href="http://localhost:3000/experiencia"
					className="flex items-center"
				>
					Experiencia
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<a
					target="_blank"
					href="https://linkedin.com/in/camila-bosco"
					className="p-1 font-normal"
				>
					LinkedIn
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="p-1 font-normal"
			>
				<a
					target="_blank"
					href="https://behance.net/camilabosco2"
					className="p-1 font-normal"
				>
					Behance
				</a>
			</Typography>
		</ul>
	);

	return (
		<Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
			<div className="container mx-auto flex  sm:items-center justify-between text-blue-gray-900 pr-80 sm:pr-0 pt-8 sm:pt-0 	">
				<Typography
					as="a"
					href="#"
					variant="small"
					className="mr-4 cursor-pointer py-1.5 font-normal"
				></Typography>
				<div className="hidden lg:block">{navList}</div>

				<IconButton
					variant="text"
					className="sm:ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							className="h-6 w-6"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					)}
				</IconButton>
			</div>
			<MobileNav open={openNav}>{navList}</MobileNav>
		</Navbar>
	);
}
