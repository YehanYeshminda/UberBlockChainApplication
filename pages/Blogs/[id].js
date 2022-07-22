import BlogDetails from '../../Components/BlogPage/BlogDetailsComp';

export const getStaticPaths = async () => {
	const res = await fetch('http://localhost:8000/blogs');
	const data = await res.json();

	const paths = data.map((blogs) => {
		return {
			params: {
				id: blogs.id.toString(),
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(`http://localhost:8000/blogs/${id}`);
	const data = await res.json();

	return {
		props: { blog: data },
	};
};

const Details = ({ blog }) => {
	const blogInfo = {
		id: blog.id,
		title: blog.title,
		body: blog.body,
		author: blog.author,
		url: blog.url,
		catergory: blog.catergory,
		postedTime: blog.postedTime,
	};

	return (
		<div>
			<BlogDetails blogs={blogInfo} />
		</div>
	);
};

export default Details;
