import React from 'react';
import GearLink from './GearLink';

export default function SideNav() {
	return (
		<div className="side-nav">
			<GearLink to="/about" text="About" />
			<GearLink to="/join" text="Join" reversed offset />
			<GearLink to="/learn" text="Learn" />
		</div>
	)
}
