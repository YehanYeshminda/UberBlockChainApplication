import React from 'react';
import Phone from '../../temp/Phone.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const BlogCards = ({ blogs }) => {
	const styles = {
		gridSection: `grid grid-cols-3 gap-[50px] mt-[100px] ml-[100px] mr-[100px] mb-[100px]`,
	};

	return (
		<div className={styles.gridSection}>
			{blogs.map((ele) => (
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					transition={{ duration: 0.2 }}
					variants={{
						visible: { opacity: 1, scale: 1 },
						hidden: { opacity: 0, scale: 0 },
					}}
					className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl ease-in-out duration-500"
					key={ele.id}
				>
					<img className="w-full" src={ele.url} alt="Sunset in the mountains" />
					<div className="px-6 py-4">
						<div className="font-bold text-xl mb-2 text-center">
							{ele.title}
						</div>
					</div>
					<button className="bg-blue-500 hover:bg-blue-400 text-white font-bold ml-[50px] py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded w-[300px] hover:animate-pulse">
						<Link href={`/Blogs/${ele.id}`}>
							<p>Read more...</p>
						</Link>
					</button>

					<div className="px-6 pt-4 pb-2 text-center">
						Posted On : &nbsp;
						<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
							{ele.postedTime}
						</span>
					</div>
				</motion.div>
			))}
		</div>
	);
};

export default BlogCards;
