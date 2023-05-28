import { useState } from 'react';

const Search = ({ cb }) => {
	const [value, setValue] = useState('');

	const handleKey = event => {
		if (event.key === 'Enter') {
			handleSubmit();
		}
	};

	const handleChange = event => {
		setValue(event.target.value);
	};

	const handleSubmit = () => {
		cb(value);
		setValue('');
	};

	return (
		<div className='row'>
			<div className='input-field col s12'>
				<input
					className='search'
					type='search'
					placeholder='Search'
					onChange={handleChange}
					onKeyDown={handleKey}
					value={value}
				/>
				<button className='btn search-btn' onClick={handleSubmit}>
					Search
				</button>
			</div>
		</div>
	);
};

export default Search;
