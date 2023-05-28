import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './layout/header/Header';
import Footer from './layout/footer/Footer';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Category from './pages/Category';
import Recipe from './pages/Recipe';

function App() {
	return (
		<>
			<Router basename='/react-food-practice'>
				<Header />
				<main className='container content'>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/category/:name' element={<Category />} />
						<Route path='/meal/:id' element={<Recipe />} />
						<Route path='*' element={<NotFound />} />
					</Routes>
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;
