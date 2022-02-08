import './Article.css';
import deleteIcon from '../icons/trash-alt-solid.svg';
import saveIcon from '../icons/save-solid.svg';

import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from './AppContext';

const Article = ({ text, isEdit, id }) => {
	const textareaRef = useRef();
	const [value, setValue] = useState(text);
	const { dispatch } = useContext(AppContext);

	useEffect(() => {
		if (isEdit) {
			textareaRef.current.style.height = `${
				10 + textareaRef.current.scrollHeight
			}px`;
			textareaRef.current.focus();
			textareaRef.current.select();
		}
	}, [isEdit]);

	const handleNavClick = (e) => {
		if (e.target.classList.contains('article-icon--active')) {
			dispatch({ type: 'UPDATE', id: e.target.dataset.id, text: value });
		} else {
			console.log('delete kurwa');

			dispatch({ type: 'DELETE', id: e.target.dataset.id });
		}
	};

	const handleDoubleClick = (e) => {
		dispatch({ type: 'EDIT', id: e.target.dataset.id });
	};

	const textToView = isEdit ? (
		<textarea
			ref={textareaRef}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			className='article-textarea'></textarea>
	) : (
		<p
			className='article-text'
			onDoubleClick={handleDoubleClick}
			onTouchEnd={handleDoubleClick}
			data-id={id}>
			{text}
		</p>
	);

	const iconToView = isEdit ? saveIcon : deleteIcon;
	const iconClass = isEdit ? 'article-icon--active' : '';

	return (
		<article className='article'>
			<section className='article-content'>
				{textToView}
				<p className='article-date'>22-02-2022, 16:32:21</p>
			</section>

			<img
				data-id={id}
				className={`article-icon ${iconClass}`}
				src={iconToView}
				onClick={handleNavClick}
				alt='icon'
			/>
		</article>
	);
};

export default Article;
