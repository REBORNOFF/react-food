import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className='cyan darken-4'>
			<div className='container'>
				<div className='nav-wrapper'>
					<Link to='/' className='brand-logo'>
						React Shop
					</Link>
					<ul id='nav-mobile' className='right hide-on-med-and-down'>
						<li>
							<Link
								to='/about'>
								About
							</Link>
						</li>
						<li>
							<a
								href='https://github.com/REBORNOFF'
								target='_blank'
								rel='noreferrer'
							>
								GitHub
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;