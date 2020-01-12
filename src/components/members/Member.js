import React from 'react';
import { Card, Tag } from 'antd';

export default function Member({ fields }) {
	const image = fields?.photo?.fields?.file?.url + '?w=200';
	const alt = fields?.photo?.fields?.title;
	const tag = fields?.team?.fields?.teamNumber;
	const role = fields?.role?.fields?.singular;
	return (
		<Card className="member-card" cover={<img alt={alt} src={image} />}>
			<h2>{fields?.name + ' '}</h2>
			<h3>{role} {tag ? <Tag>{tag}</Tag> : ""}</h3>
		</Card>
	)
}
