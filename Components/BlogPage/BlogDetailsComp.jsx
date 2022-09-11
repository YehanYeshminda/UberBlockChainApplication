import React from 'react';
import Navbar from '../../Components/Nav';
import Footer from '../../Components/Footer';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';
import Image from 'next/image';

const BlogDetails = ({ blogs }) => {
	const content = {
		animate: {
			transition: { staggerChildren: 0.1 },
		},
	};

	const title = {
		initial: { y: -20, opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.7,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	const inputs = {
		initial: { y: -20, opacity: 0 },
		animate: {
			y: 0,
			opacity: 1,
			transition: {
				duration: 0.7,
				ease: [0.6, -0.05, 0.01, 0.99],
			},
		},
	};

	return (
		<div>
			<Navbar />
			<motion.section
				exit={{ opacity: 0 }}
				class="text-gray-700 body-font relative"
			>
				<motion.div variants={content} animate="animate" initial="initial">
					<motion.div variants={title}>
						<motion.div variants={inputs}>
							<div className="flex flex-col justify-center items-start mt-28 md:mt-40 max-w-4xl md:mx-auto gap-y-2 mb-6 mx-7">
								<div className="text-2xl md:text-4xl font-bold">
									{blogs.title}
								</div>
								<div className="">Posted On : {blogs.postedTime}</div>
							</div>
							<div className="flex justify-center items-center max-w-4xl md:mx-auto mx-8 ">
								<img
									src={blogs.url}
									className="transition ease-in-out w-full delay-150 hover:-translate-y-1 hover:scale-105 duration-300"
									alt="image"
								/>
							</div>
							<div className="flex justify-center items-center max-w-4xl md:mx-auto md:mt-6 mt-4 text-left mx-10 md:text-base text-sm">
								{blogs.body}
							</div>
							<div className="flex justify-start items-start md:text-base text-sm  max-w-4xl md:mx-auto mt-5 mx-10">
								Wrote By :
								<span className="font-bold">&nbsp;&nbsp;{blogs.author}</span>
							</div>
							<div className="flex justify-start items-start max-w-4xl md:mx-auto mt-5 mx-10">
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded transition-all duration-500 ease-out mb-9">
									<Link href="/Blogs">
										<span> Read More Blogs...</span>
									</Link>
								</button>
							</div>
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.section>
			<Footer />
		</div>
	);
};

export default BlogDetails;
