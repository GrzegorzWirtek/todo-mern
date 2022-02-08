import './App.css';

import { AppContext } from './AppContext';
import AddForm from './AddForm';
import Articles from './Articles';
import reducer from '../reducer';

import { useState, useReducer } from 'react';

function App() {
	const [isAddActive, setIsAddActive] = useState(false);
	const [state, dispatch] = useReducer(reducer, [
		{ id: 1, text: 'Pierwszy artykuł' },
		{ id: 2, text: 'Drugi artykuł' },
		{ id: 3, text: 'Trzeci artykuł' },
	]);

	return (
		<AppContext.Provider value={{ isAddActive, setIsAddActive, state }}>
			<div className='App'>
				<AddForm />
				<Articles />
			</div>
		</AppContext.Provider>
	);
}

export default App;
