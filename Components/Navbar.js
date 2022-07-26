import Image from 'next/image';
import avatar from '../temp/avatar.jpg';
import { BsPerson } from 'react-icons/bs';
import Link from 'next/link';

const style = {
	wrapper: `h-20 w-full bg-black text-white flex md:justify-evenly lg:justify-evenly items-center px-60 fixed z-20`,
	leftMenu: `flex gap-3 mr-12`,
	logo: `text-3xl text-white flex cursor-pointer mr-16`,
	menuItem: `text-lg text-white font-medium flex items-center mx-4 cursor-pointer md:mr-10`,
	rightMenu: `flex gap-3 items-center lg:ml-0`,
	userImageContainer: `mr-2`,
	userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
	loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
	loginText: `ml-2`,
};

const currentAccount = '0xa5a5a53eEb97a26A1Ef08CCc68739ad65A0fa86c';

const Navbar = () => {
	return (
		<div className={style.wrapper}>
			<div className={style.leftMenu}>
				<div className={style.logo}>Uber</div>
				<div className={style.menuItem}>
					<button>
						<Link href="/">Home</Link>
					</button>
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
			</div>
			<div className={style.rightMenu}>
				<div className={style.menuItem}>
					<button>
						<Link href="/Aboutus">About us</Link>
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
						width={40}
						height={40}
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
