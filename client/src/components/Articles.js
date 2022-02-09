import './Articles.css';

import { useContext } from 'react';
import { AppContext } from './AppContext';

import Article from './Article';

const Articles = () => {
	const { isAddActive, state } = useContext(AppContext);
	const articles = state.map((article) => (
		<Article
			key={article.id}
			text={article.text}
			date={article.date}
			isEdit={article.isEdit}
			id={article.id}
		/>
	));

	return (
		<section className={`articles ${isAddActive ? 'articles--active' : ''}`}>
			{articles}
		</section>
	);
};

export default Articles;
