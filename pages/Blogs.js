import React from 'react';
import Navbar from '../Components/Navbar';
import BlogsTopText from '../Components/BlogPage/BlogsTopText';
import PersonRidingCarSection from '../Components/BlogPage/PersonRidingCarSection';
import BlogCards from '../Components/BlogPage/BlogCards';
import Footer from '../Components/Footer';
import { useState, useEffect } from 'react';

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

	return (
		<div>
			<Navbar />
			<BlogsTopText />
			<PersonRidingCarSection />
			{pendingRequest && <div>Loading Data....</div>}
			{/* if blogs are available only then output else wait */}
			{blogs && <BlogCards blogs={blogs} />}
			<Footer />
		</div>
	);
};

export default Blogs;
