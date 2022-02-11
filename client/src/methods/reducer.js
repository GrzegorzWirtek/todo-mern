const reducer = (state, action) => {
	const { type, id, newState } = action;

	switch (type) {
		case 'ONLOAD': {
			return newState;
		}
		case 'ADD': {
			return newState;
		}
		case 'EDIT':
			return state.filter((article) => {
				if (id === article._id) {
					article.isEdit = true;
				} else {
					article.isEdit = false;
				}
				return article;
			});
		case 'UPDATE': {
			return newState;
		}
		case 'CLOSEEDIT':
			return state.filter((article) => {
				article.isEdit = false;
				return article;
			});
		case 'DELETE':
			return newState;
		default:
			return state;
	}
};

export default reducer;
