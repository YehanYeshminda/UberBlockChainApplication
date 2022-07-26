import React from 'react';

const AboutusReimagineOurLifeComponent = () => {
	const style = {
		reimagineLifeSection: `text-start md:w-[1300px]`,
		headerInsideReimagineLife: `text-[35px] mb-[20px] leading-10`,
		paraInsideReimagineLife: `text-16px leading-6 w-[60%]`,
		insideBr: 'block mg-[10px]',
		contentWrapper: `m-auto w-[1200px]`,
	};

	return (
		<div className={style.contentWrapper}>
			<div className={style.reimagineLifeSection}>
				<h2 className={style.headerInsideReimagineLife}>
					We reimagine the way the world moves for{' '}
					<span className={style.insideBr}>the better</span>
				</h2>
				<p className={style.paraInsideReimagineLife}>
					Movement is what we power. It’s our lifeblood. It runs through our
					veins. It’s what gets us out of bed each morning. It pushes us to
					constantly reimagine how we can move better. For you. For all the
					places you want to go. For all the things you want to get. For all the
					ways you want to earn. Across the entire world. In real time. At the
					incredible speed of now.
				</p>
			</div>
		</div>
	);
};

export default AboutusReimagineOurLifeComponent;
