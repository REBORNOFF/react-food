import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

function App() {
	return (
		<>
			<Router>
				<Header />
				<main className='container content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/about' element={<About />} />
						<Route path='/Contact' element={<Contact />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;
