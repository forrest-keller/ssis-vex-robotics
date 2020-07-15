import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

export default function Footer() {
	return (
		<div className="footer">
			<Button icon="instagram" href="https://www.instagram.com/ssisrobotics_vex/" target="_blank" />
			<Button icon="mail" href="mailto:vexrobotics@ssis.edu.vn" />
			<Button type="secondary"><Link to="/resources">Resources</Link></Button>
			<br />
			<p className="footer-text">©2020 SSIS Robotics</p>
		</div>
	)
}
