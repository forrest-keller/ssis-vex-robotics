import React from 'react';
import Member from './Member';

export default function Members({ members }) {
	return (
		<div>
			{
				members?.map(member => <Member key={member?.sys?.id} fields={member?.fields} />)
			}
		</div>
	)
}
