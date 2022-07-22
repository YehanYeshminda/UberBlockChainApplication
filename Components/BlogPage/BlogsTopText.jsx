import React from 'react';

const BlogsTopText = () => {
	const styles = {
		headerTop: `mt-10 text-5xl ml-[100px]`,
		insideBr: 'block mg-[10px]',
	};

	return (
		<div>
			<div className="pt-[150px]">
				<p className={styles.headerTop}>
					On the move in Sri Lanka
					<span className={styles.insideBr}>
						{' '}
						Things to do and ways to get there
					</span>
				</p>
			</div>
		</div>
	);
};

export default BlogsTopText;
