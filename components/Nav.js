import Link from 'next/link';
const Nav = () => {
	return (
		<nav className="nav  d-flex justify-content-between" style={{ backgroundColor: '#7fffd4' }}>
			<Link href="/">
				<a className="nav-link text-light">Home</a>
			</Link>

			<Link href="/login">
				<a className="nav-link text-light">Login</a>
			</Link>

			<Link href="/register">
				<a className="nav-link text-light">register</a>
			</Link>
		</nav>
	);
};

export default Nav;
