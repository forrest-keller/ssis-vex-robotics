import { useState, useEffect } from 'react';
import client from '../services/contentful';

export default function useEntries(query) {
	const [response, setResponse] = useState({});

	useEffect(() => {
		client.getEntries(query).then(res => setResponse(res));
	}, []);

	return response
};