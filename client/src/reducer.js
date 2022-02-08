const reducer = (state, action) => {
	const { type, id, text } = action;

	switch (type) {
		case 'ADD':
			return state;
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
