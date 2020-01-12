import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import useEntries from '../hooks/useEntries';
import { documentToPageContent } from '../functions/documentToPageContent';
import Helmet from 'react-helmet';

export default function LearnContent() {
	const { params } = useRouteMatch();
	const pageFields = useEntries({
		content_type: "learnTab",
		limit: 1,
		include: 10,
		'fields.url': params?.tab
	})?.items?.[0]?.fields;

	console.log(pageFields)

	return (
		<div>
			<Helmet>
				<title>{`${pageFields?.name}`}</title>
				<meta name="description" content="Learn more about how VEX Robotics works. Instructional guides written by 76209 SSIS VEX Robotics." />
			</Helmet>
			{documentToPageContent(pageFields?.content)}
		</div>
	)
}
