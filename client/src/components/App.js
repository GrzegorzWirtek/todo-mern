import './App.css';

import { AppContext } from './AppContext';
import AddForm from './AddForm';
import Articles from './Articles';
import DeleteDialouge from './DeleteDialouge';
import reducer from '../reducer';

import { useState, useReducer, useEffect } from 'react';

function App() {
	const [isAddActive, setIsAddActive] = useState(false);
	const [isDeleteDialougeActive, setIsDeleteDialougeActive] = useState(false);
	const [idToDelete, setIdToDelete] = useState(null);
	const [state, dispatch] = useReducer(reducer, []);

	useEffect(() => {
		fetch('/api')
			.then((res) => res.json())
			.then((data) =>
				dispatch({ type: 'ONLOAD', newState: data.tasks.reverse() }),
			);
	}, []);

	const valueProvider = {
		isAddActive,
		setIsAddActive,
		state,
		dispatch,
		isDeleteDialougeActive,
		setIsDeleteDialougeActive,
		idToDelete,
		setIdToDelete,
	};

	return (
		<AppContext.Provider value={valueProvider}>
			<div className='App'>
				<header className='header'>
					<h1 className='header-text'>Things to do</h1>
				</header>
				<main className='main-wrapper'>
					{isDeleteDialougeActive && <DeleteDialouge />}
					<AddForm />
					<Articles />
				</main>
			</div>
		</AppContext.Provider>
	);
}

export default App;
