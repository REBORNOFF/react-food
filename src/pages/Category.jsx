import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { Loader } from '../components/loader/Loader';
import MealList from '../components/MealList/MealList';

const Category = () => {
	const { name } = useParams();
	const [meals, setMeals] = useState([]);
	const navigate = useNavigate();
	const goBack = () => navigate(-1);


	useEffect(() => {
		getFilteredCategory(name).then(data => setMeals(data.meals));
	}, [name]);

	return (
		<>
			<button className='btn' onClick={goBack}>Go Back</button>
			{!meals.length ? <Loader /> : <MealList meals={meals} />}
		</>
	);
};

export default Category;