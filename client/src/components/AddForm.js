import './AddForm.css';
import { useContext, useRef, useState } from 'react';
import { AppContext } from './AppContext';
import getDate from './getDate';

const AddForm = () => {
	const { isAddActive, setIsAddActive, dispatch } = useContext(AppContext);
	const inputRef = useRef();
	const [addValue, setAddValue] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch({ type: 'CLOSEEDIT' });
		if (!isAddActive) {
			setTimeout(() => {
				inputRef.current.style.opacity = 1;
				inputRef.current.focus();
			}, 250);
		} else {
			if (addValue.length > 0) {
				const task = {
					text: addValue,
					date: getDate(),
					isEdit: false,
				};
				const options = {
					method: 'post',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(task),
				};
				fetch('/addtask', options)
					.then((res) => res.json())
					.then((data) =>
						dispatch({ type: 'ADD', newState: data.tasks.reverse() }),
					);
			}
			setAddValue('');
			inputRef.current.style.opacity = 0;
		}
		setIsAddActive(!isAddActive);
	};

	return (
		<form
			className={`add-form ${isAddActive ? 'add-form--active' : ''}`}
			onSubmit={(e) => {
				handleSubmit(e);
			}}>
			<input
				type='text'
				ref={inputRef}
				value={addValue}
				onChange={(e) => setAddValue(e.target.value)}
				className='add-input'
				placeholder='Write here...'
			/>
			<button className='add-button'>Add task</button>
		</form>
	);
};

export default AddForm;
