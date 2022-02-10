const getDate = () => {
	const currentDate = new Date();
	const date = currentDate.toLocaleString();
	return date;
};

const reducer = (state, action) => {
	const { type, id, text, newState } = action;

	switch (type) {
		case 'ONLOAD': {
			return newState;
		}
		case 'ADD': {
			return newState;
		}
		case 'EDIT':
			return state.filter((article) => {
				if (Number(id) === article.id) {
					article.isEdit = true;
				} else {
					article.isEdit = false;
				}
				return article;
			});
		case 'UPDATE':
			return state.filter((article) => {
				if (Number(id) === article.id) {
					article.text = text;
					article.date = getDate();
				}
				article.isEdit = false;
				return article;
			});
		case 'CLOSEEDIT':
			return state.filter((article) => {
				article.isEdit = false;
				return article;
			});
		case 'DELETE':
			return state.filter((article) => article.id !== Number(id));
		default:
			return state;
	}
};

export default reducer;
