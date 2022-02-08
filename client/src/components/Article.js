import './Article.css';
import deleteIcon from '../icons/trash-alt-solid.svg';
import saveIcon from '../icons/save-solid.svg';

import { useEffect, useRef, useState } from 'react';

const Article = ({ text, isEdit, id }) => {
	const textareaRef = useRef();
	const [value, setValue] = useState(text);

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
		console.log(e.target.dataset.id);
		console.log('wpisana wartość: ', value);
	};

	const textToView = isEdit ? (
		<textarea
			ref={textareaRef}
			value={value}
			onChange={(e) => setValue(e.target.value)}
			className='article-textarea'></textarea>
	) : (
		<p className='article-text'>{text}</p>
	);

	const iconToView = isEdit ? saveIcon : deleteIcon;

	return (
		<article className='article'>
			<section className='article-content'>
				{textToView}
				<p className='article-date'>22-02-2022, 16:32:21</p>
			</section>

			<img
				data-id={id}
				className='article-icon'
				src={iconToView}
				onClick={handleNavClick}
				alt='icon'
			/>
		</article>
	);
};

export default Article;
