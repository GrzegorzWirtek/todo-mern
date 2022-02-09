import './App.css';

import { AppContext } from './AppContext';
import AddForm from './AddForm';
import Articles from './Articles';
import DeleteDialouge from './DeleteDialouge';
import reducer from '../reducer';

import { useState, useReducer } from 'react';

function App() {
	const [isAddActive, setIsAddActive] = useState(false);
	const [isDeleteDialougeActive, setIsDeleteDialougeActive] = useState(false);
	const [idToDelete, setIdToDelete] = useState(null);
	const [state, dispatch] = useReducer(reducer, []);

	return (
		<AppContext.Provider
			value={{
				isAddActive,
				setIsAddActive,
				state,
				dispatch,
				isDeleteDialougeActive,
				setIsDeleteDialougeActive,
				idToDelete,
				setIdToDelete,
			}}>
			<div className='App'>
				{isDeleteDialougeActive && <DeleteDialouge />}
				<AddForm />
				<Articles />
			</div>
		</AppContext.Provider>
	);
}

export default App;
