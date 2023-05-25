import { useEffect, useState } from 'react';
import { getAllCategories } from '../api';
import { Loader } from '../components/loader/Loader';
import CategoryList from '../components/CategoryList/CategoryList';


const Home = () => {
	const [catalog, setCatalog] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getAllCategories().then(data => setCatalog(data.categories));
		setLoading(false);
	}, []);

	return (
		<>
			{
				loading ? <Loader /> : <CategoryList catalog={catalog} />
			}
		</>
	);
};

export default Home;