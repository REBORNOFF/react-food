import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getAllCategories } from '../api';
import { Loader } from '../components/loader/Loader';
import CategoryList from '../components/CategoryList/CategoryList';
import Search from '../components/Search/Search';

const Home = () => {
	const [catalog, setCatalog] = useState([]);
	const [filteredCatalog, setFilteredCatalog] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const [loading, setLoading] = useState(true);

	const handleSearch = str => {
		setFilteredCatalog(
			catalog.filter(item =>
				item.strCategory.toLowerCase().includes(str.toLowerCase())
			)
		);

		setSearchParams(str ? { search: str } : '');
	};

	useEffect(() => {
		getAllCategories().then(data => {
			setCatalog(data.categories);
			setFilteredCatalog(
				searchParams.get('search')
					? data.categories.filter(item =>
							item.strCategory
								.toLowerCase()
								.includes(
									searchParams.get('search').toLowerCase()
								)
					  )
					: data.categories
			);
		});
		setLoading(false);
	}, [searchParams]);

	return (
		<>
			<Search cb={handleSearch} />
			{loading ? <Loader /> : <CategoryList catalog={filteredCatalog} />}
		</>
	);
};

export default Home;
