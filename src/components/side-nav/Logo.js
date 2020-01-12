import React, { useState, useEffect } from 'react';
import client from '../../services/contentful';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import licensePlate from '../../assets/license-plate.svg';
const { Title } = Typography;

export default function Logo() {
	const [teams, setTeams] = useState([]);
	const [index, setIndex] = useState(0);

	// For a given time interval, cycle through the list of teams.
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prevIndex => prevIndex + 1);
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	// Get all teams on component load
	useEffect(() => {
		client.getEntries({
			content_type: "team"
		}).then(res => setTeams(res.items))
	}, []);

	return (
		<Link to="/">
			<div className="centered-text-container">
				<img alt="" src={licensePlate} draggable="false" />
				<Title level={1} className="centered-text">{teams?.[index % teams.length]?.fields?.teamNumber}</Title>
			</div>
		</Link>
	)
}
