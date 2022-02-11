const getDate = () => {
	const currentDate = new Date();
	const date = currentDate.toLocaleString();
	return date;
};

export default getDate;
