import './App.css';

import { AppContext } from './AppContext';
import AddForm from './AddForm';
import Articles from './Articles';
import reducer from '../reducer';

import { useState, useReducer } from 'react';

function App() {
	const [isAddActive, setIsAddActive] = useState(false);
	const [state, dispatch] = useReducer(reducer, [
		{
			id: 1,
			text: 'Pierwszy artykuł jest dość długi i zobaczymy na ile wystarczy ale zobaczmy ile będfzie to trwało i tak dalej ale zaraz',
			isEdit: true,
		},
		{ id: 2, text: 'Drugi artykuł', isEdit: false },
		{ id: 3, text: 'Trzeci artykuł', isEdit: false },
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
