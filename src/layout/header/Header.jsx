import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className='cyan darken-4'>
			<div className='container'>
				<div className='nav-wrapper'>
					<Link to='/' className='brand-logo'>
						React Food
					</Link>
					<ul id='nav-mobile' className='right hide-on-med-and-down'>
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
