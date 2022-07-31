import Image from 'next/image';
import avatar from '../temp/avatar.jpg';
import { BsPerson } from 'react-icons/bs';
import Link from 'next/link';

const style = {
	wrapper: `h-20 w-full bg-black text-white flex md:justify-evenly lg:justify-evenly items-center px-60 fixed z-20`,
	leftMenu: `flex gap-3 mr-12`,
	logo: `text-3xl text-white flex cursor-pointer mr-16`,
	menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer md:mr-10 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-black-500 duration-300 hover:underline hover:underline-offset-4`,
	rightMenu: `flex gap-3 items-center lg:ml-0`,
	userImageContainer: `mr-2`,
	userImage: `h-20 w-20 rounded-full p-px object-cover cursor-pointer`,
	loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
	loginText: `ml-2`,
};

const currentAccount = '0xa5a5a53eEb97a26A1Ef08CCc68739ad65A0fa86c';

const Navbar = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.leftMenu}>
				<div className={style.logo}>
					<Link href="/">Uber</Link>
				</div>
				<div className={style.menuItem}>
					<button>
						<Link href="/Safety">Safety</Link>
					</button>
				</div>
				<div className={style.menuItem}>
					<button>
						<Link href="/MapPage">Map</Link>
					</button>
				</div>
				<div className={style.menuItem}>
					<button>
						<Link href="/Offerings">Offerings</Link>
					</button>
				</div>
			</div>
			<div className={style.rightMenu}>
				<div className={style.menuItem}>
					<button>
						<Link href="/Aboutus">Aboutus</Link>
					</button>
				</div>
				<div className={style.menuItem}>
					<button>
						<Link href="/Blogs">Blogs</Link>
					</button>
				</div>

				<div className={style.menuItem}>{'Yehan Yeshminda'.split(' ')[0]}</div>
				<div className={style.userImageContainer}>
					<Image
						className={style.userImage}
						src={avatar}
						width={70}
						height={70}
						alt="none"
					/>
				</div>
				{currentAccount ? (
					<div>
						{currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
					</div>
				) : (
					<div className={style.loginButton}>
						<BsPerson />
						<span className={style.loginText}>Log in</span>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
