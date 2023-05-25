const Footer = () => {
	return (
		<footer className='page-footer cyan darken-4'>
			<div className='footer-copyright'>
				<div className='container'>
					© {new Date().getUTCFullYear()} Copyright Text
					<a
						className='grey-text text-lighten-4 right'
						href='https://github.com/REBORNOFF/react-food-practice'
						target='_blank'
						rel='noreferrer'
					>
						Repository
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;