import './Article.css';
import deleteIcon from '../icons/trash-alt-solid.svg';
import saveIcon from '../icons/save-solid.svg';

import { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from './AppContext';

const Article = ({ text, date, isEdit, id }) => {
	const textareaRef = useRef();
	const [value, setValue] = useState(text);
	const { dispatch, setIsDeleteDialougeActive, setIdToDelete } =
		useContext(AppContext);

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
			setIdToDelete(e.target.dataset.id);
			setIsDeleteDialougeActive(true);
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
	const articleClass = isEdit ? 'article--active' : '';

	return (
		<article className={`article ${articleClass}`}>
			<section className='article-content'>
				{textToView}
				<p className='article-date'>{date}</p>
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
