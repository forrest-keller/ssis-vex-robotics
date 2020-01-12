import React from 'react';
import '../../styles/gear-link.css';
import { Link } from 'react-router-dom';
import { Typography } from 'antd';
import Gear from '../../assets/gear.png';

const { Title } = Typography;

export default function GearLink({ to, text, reversed, offset }) {
	return (
		<Link tabIndex="-1" to={to}>
			<div className={"gear-link-container " + (offset ? "offset" : "")}>
				<img alt="Gear Icon" src={Gear} draggable="false" className={"gear-link-icon " + (reversed ? "rotate-reversed" : "rotate-forward")} />
				<Title level={4} className="gear-link-text" tabIndex="0">{text}</Title>
			</div>
		</Link >
	)
}
