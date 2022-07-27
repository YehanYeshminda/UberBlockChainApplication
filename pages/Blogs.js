import React from 'react';
import Navbar from '../Components/Navbar';
import BlogsTopText from '../Components/BlogPage/BlogsTopText';
import PersonRidingCarSection from '../Components/BlogPage/PersonRidingCarSection';
import BlogCards from '../Components/BlogPage/BlogCards';
import Footer from '../Components/Footer';
import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Blogs = () => {
	// getting the blogs from the json server
	const [blogs, setBlogs] = useState(null);
	const [pendingRequest, setPendingRequest] = useState(true);

	useEffect(() => {
		fetch('http://localhost:8000/blogs')
			.then((result) => result.json())
			.then((data) => {
				setBlogs(data);
				setPendingRequest(false);
			})
			.catch((err) => console.log(err));
	}, []);

	const { scrollYProgress } = useScroll();

	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

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

	const style = {
		progressBar: `fixed left-0 right-0 h-2 bg-black origin-[0%] z-50 mt-[80px]`,
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
							<motion.div className={style.progressBar} style={{ scaleX }} />
							<BlogsTopText />
							<PersonRidingCarSection />
							{pendingRequest && <div>Loading Data....</div>}
							{/* if blogs are available only then output else wait */}
							{blogs && <BlogCards blogs={blogs} />}
							<Footer />
						</motion.div>
					</motion.div>
				</motion.div>
			</motion.section>
		</div>
	);
};

export default Blogs;
