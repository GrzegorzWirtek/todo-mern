import './AddForm.css';
import { useContext, useRef, useState } from 'react';
import { AppContext } from './AppContext';

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
			setAddValue('');
			console.log('value: ', addValue);
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
