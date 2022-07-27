import React from 'react';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';
import Link from 'next/link';
import { motion, useScroll, useSpring } from 'framer-motion';

const BlogDetails = ({ blogs }) => {
	const styles = {
		titleWrapper: `pt-[150px] ml-[220px] mr-[320px] mb-[50px]`,
		titleContainer: `text-[2.6rem] font-bold ml-[80px]`,
		titlePostedOn: `ml-[80px] mt-[20px]`,
		imageContainer: `ml-[280px]`,
		paraSetUnder: `pt-[50px] ml-[220px] ml-[280px] mb-[10px] mr-[300px]`,
		paraSetUnderAuthor: `pt-[10px] ml-[280px] mr-[320px] mb-[40px]`,
		setSpanAuthor: 'font-bold',
		LinkSet: `ml-[280px] mr-[320px] mb-[100px]`,
		setSpanButton:
			'font-bold over:bg-blue-400 text-white font-bold rounded hover:animate-pulse hover:text-black',
		imageStylesSet: `transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 w-[1000px]`,
		progressBar: `fixed left-0 right-0 h-2 bg-black origin-[0%] z-50 top-[80px]`,
	};

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
							<div className={styles.titleWrapper}>
								<motion.div className={styles.progressBar} style={{ scaleX }} />
								<div className={styles.titleContainer}>{blogs.title}</div>
								<div className={styles.titlePostedOn}>
									Posted On : {blogs.postedTime}
								</div>
							</div>
							<div className={styles.imageContainer}>
								<img
									src={blogs.url}
									className={styles.imageStylesSet}
									alt="image"
								/>
							</div>
							<div className={styles.paraSetUnder}>{blogs.body}</div>
							<div className={styles.paraSetUnderAuthor}>
								Wrote By :{' '}
								<span className={styles.setSpanAuthor}>{blogs.author}</span>
							</div>
							<div className={styles.LinkSet}>
								<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
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
