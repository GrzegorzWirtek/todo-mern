import './DeleteDialouge.css';
import { useContext } from 'react';
import { AppContext } from './AppContext';

const DeleteDialouge = () => {
	const { setIsDeleteDialougeActive, dispatch, idToDelete, setIdToDelete } =
		useContext(AppContext);

	const handleDeleteButton = () => {
		setIsDeleteDialougeActive(false);
		dispatch({ type: 'DELETE', id: idToDelete });
		setIdToDelete(null);
	};

	const handleCancelButton = () => {
		setIsDeleteDialougeActive(false);
		setIdToDelete(null);
	};

	return (
		<section className='delete-dialouge'>
			<div className='delete-dialouge-window'>
				<p className='delete-dialouge-text'>
					Are you sure you want to delete this task?
				</p>
				<button
					onClick={handleDeleteButton}
					className='delete-dialouge-button delete-dialouge-button--delete'>
					Delete
				</button>
				<button
					onClick={handleCancelButton}
					className='delete-dialouge-button delete-dialouge-button--cancel'>
					Cancel
				</button>
			</div>
		</section>
	);
};

export default DeleteDialouge;