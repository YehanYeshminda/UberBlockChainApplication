import Image from 'next/image';
import Link from 'next/link';
import avatar from '../temp/avatar.jpg';
import { BsPerson } from 'react-icons/bs';
import { MdMenu, MdOutlineClose, MdDirectionsCar } from 'react-icons/md';
import { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const currentAccount = '';

const Nav = () => {
	const [open, setOpen] = useState(false);

	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	return (
		<div className="shadow-md w-full fixed top-0 left-0 z-50">
			<div className="md:flex bg-black py-4 md:px-10 px-7 items-center justify-between">
				<div className="text-white flex items-center font-bold sm:text-xl md:text-3xl cursor-pointer">
					<span className="md:mr-1 sm:mr-1 sm:text-xl md:text-3xl">
						<MdDirectionsCar />
					</span>
					<Link href="/">Uber</Link>
				</div>

				<div
					onClick={() => setOpen(!open)}
					className="text-3xl absolute right-8 top-4 cursor-pointer text-white md:hidden"
				>
					{open ? <MdOutlineClose /> : <MdMenu />}
				</div>

				<ul
					className={`text-white md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-black md:z-auto z-50 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in max-h-screen ${
						open
							? 'top-12 opacity-100'
							: 'top-[-700px] md:opacity-100 opacity-0'
					}`}
				>
					<li className="md:ml-8 md:text-xl sm:text-xs  hover:text-gray-500 duration-500 md:my-0 my-7">
						<Link className="text-white " href="/Safety">
							Safety
						</Link>
					</li>
					<li className="sm:text-xs md:ml-8 md:text-xl hover:text-gray-500 duration-500 md:my-0 my-7">
						<Link className="text-white " href="/MapPage">
							Map
						</Link>
					</li>
					<li className="sm:text-xs md:ml-8 md:text-xl hover:text-gray-500 duration-500 md:my-0 my-7">
						<Link className="text-white " href="/Offerings">
							Offerings
						</Link>
					</li>
					<li className="sm:text-xs md:ml-8 md:text-xl hover:text-gray-500 duration-500 md:my-0 my-7">
						<Link className="text-white " href="/Aboutus">
							Aboutus
						</Link>
					</li>
					<li className="sm:text-xs md:ml-8 md:text-xl hover:text-gray-500 duration-500 md:my-0 my-7">
						<Link className="text-white " href="/Blogs">
							Blogs
						</Link>
					</li>
					<li className="sm:text-xs md:flex md:ml-8 md:text-xl md:my-0 my-7">
						{'Yehan Yeshminda'.split(' ')[0]}
					</li>
					<li className="sm:text-xs md:flex md:ml-8 md:text-xl md:my-0 my-7">
						<Image
							src={avatar}
							width={70}
							height={70}
							alt="none"
							className="rounded-full"
						/>
					</li>

					{currentAccount ? (
						<li className="text-3xl md:ml-8 md:text-xl  md:my-0 my-7">
							{currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
						</li>
					) : (
						<li className="flex sm:text-xs md:text-xl items-center my-7 md:my-0">
							<button className="bg-white text-black py-2 px-6 rounded md:ml-8  hover:bg-gray-500 hover:text-white duration-500">
								Log in
							</button>
						</li>
					)}
				</ul>
			</div>
			<div className="">
				<motion.div
					className="fixed left-0 right-0 h-2 bg-black origin-[0%] z-50"
					style={{ scaleX }}
				/>
			</div>
		</div>
	);
};

export default Nav;
