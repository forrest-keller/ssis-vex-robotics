import React from 'react';
import useEntries from '../hooks/useEntries';
import { Typography } from 'antd';
import { documentToPageContent } from '../functions/documentToPageContent';
import Helmet from 'react-helmet';

const { Title } = Typography;

export default function Resources() {
	const pageFields = useEntries({
		content_type: "resourcesPage",
		limit: 1,
		include: 10
	})?.items?.[0]?.fields;

	return (
		<div>
			<Helmet>
				<title>Resources</title>
				<meta name="description" content="A collection of resources to help you out with VEX." />
			</Helmet>
			{pageFields?.headerPhoto ? <img className="header-photo" alt={pageFields?.pageName} src={pageFields?.headerPhoto?.fields?.file?.url + '?h=100'} /> : <Title level={1}>{pageFields?.pageName}</Title>}
			<div>{documentToPageContent(pageFields?.content)}</div>
		</div>
	)
}
