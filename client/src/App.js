import './App.css';
import { useState, useEffect } from 'react';

function App() {
	const [fetchData, setFetchData] = useState(null);

	useEffect(() => {
		fetch('/api')
			.then((res) => res.json())
			.then((data) => setFetchData(data.message));
	}, []);

	return (
		<div className='App'>
			<p>
				Dane z backendu: <strong>{fetchData}</strong>{' '}
			</p>
		</div>
	);
}

export default App;
