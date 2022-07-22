import React from 'react';
import { useState } from 'react';

const TabbedComponent = () => {
	const style = {
		container: `flex flex-col relative w-[1200px] max-h-[400px] break-all mt-[1rem] mb-[3rem]`,
		blockTabs: `flex`,
		tabs: `p-4 text-center w-6/12 cursor-pointer box-content relative bg-red`,
		innerGridSet: `grid grid-cols-3`,
		colInnerSet: `hover:bg-slate-100 hover:transition hover:duration-500 hover:ease-in-out`,
		innerHeaderStyles: `ml-[2rem]`,
		pTagReset: `h-[10px]`,
	};

	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<div className={style.container}>
			<div className={style.blockTabs}>
				<button
					className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
					onClick={() => toggleTab(1)}
				>
					Popular
				</button>
				<button
					className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
					onClick={() => toggleTab(2)}
				>
					Economy
				</button>
			</div>

			<div className="content-tabs">
				<div
					className={toggleState === 1 ? 'content active-content' : 'content'}
				>
					<div className={style.innerGridSet}>
						<div className={style.colInnerSet}>
							<div>
								<img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_437,h_246/f_auto,q_auto/products/carousel/UberX.png" />
							</div>
							<div className={style.innerHeaderStyles}>Zip</div>
							<p className={style.pTagReset}>Affordable, compact rides</p>
						</div>
						<div className={style.colInnerSet}>
							<div>
								<img
									src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_429,h_241/f_auto,q_auto/products/carousel/Moto.png"
									alt=""
								/>
							</div>
							<div className={style.innerHeaderStyles}>Moto</div>
							<p>Affordable motorcycle rides</p>
						</div>
						<div className={style.colInnerSet}>
							<div>
								<img
									src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_437,h_246/f_auto,q_auto/products/carousel/UberX.png"
									alt=""
								/>
							</div>
							<div className={style.innerHeaderStyles}>Premier</div>
							<p>Select sedans, top-rated drivers</p>
						</div>
					</div>
				</div>

				<div
					className={toggleState === 2 ? 'content active-content' : 'content'}
				>
					<div className={style.innerGridSet}>
						<div className={style.colInnerSet}>
							<div>
								<img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_429,h_241/f_auto,q_auto/products/carousel/Moto.png" />
							</div>
							<div className={style.innerHeaderStyles}>XL Intercity</div>
							<p>Outstation rides in spacious SUVs</p>
						</div>
						<div className={style.colInnerSet}>
							<div>
								<img
									src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_437,h_246/f_auto,q_auto/products/carousel/UberX.png"
									alt=""
								/>
							</div>
							<div className={style.innerHeaderStyles}>ZIP Intercity</div>
							<p>Affordable outstation rides in compact cars</p>
						</div>
						<div className={style.colInnerSet}>
							<div>
								<img
									src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_437,h_246/f_auto,q_auto/products/carousel/UberX.png"
									alt=""
								/>
							</div>
							<div className={style.innerHeaderStyles}>Sedan Intercity</div>
							<p>Outstation rides in comfortable sedans</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TabbedComponent;
