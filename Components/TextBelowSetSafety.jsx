import React from 'react';

const TextBelowSetSafety = () => {
	const style = {
		textSectionLast: `mt-[6rem] mb-[4rem]`,
		pSet: `text-[1rem] mt-5`,
	};

	return (
		<div className={style.textSectionLast}>
			<p className={style.pSet}>
				*Masks may still be required by law in some areas. Please check your
				local requirements regarding COVID-19 safety protocols. Everyone using
				the Uber platform is required to comply with applicable laws and
				regulations while doing so.
			</p>
			<p className={style.pSet}>
				Screenshots may differ from your in-app experience. The material
				provided on this web page is intended for informational purposes only
				and may not be applicable in your country, region, or city. It is
				subject to change and may be updated without notice.
			</p>
		</div>
	);
};

export default TextBelowSetSafety;
