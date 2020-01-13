import React from 'react';
import useEntries from '../hooks/useEntries';
import { Typography, Row, Col } from 'antd';
import { documentToPageContent } from '../functions/documentToPageContent';
import Helmet from 'react-helmet';

const { Title } = Typography;

export default function Join() {
	const pageFields = useEntries({
		content_type: "joinPage",
		limit: 1,
		include: 10
	})?.items?.[0]?.fields;

	return (
		<div>
			<Helmet>
				<title>Join</title>
				<meta name="description" content="Information about joining the SSIS VEX Robotics team." />
			</Helmet>
			{pageFields?.headerPhoto ? <img className="header-photo" alt={pageFields?.pageName} src={pageFields?.headerPhoto?.fields?.file?.url + '?h=100'} /> : <Title level={1}>{pageFields?.pageName}</Title>}
			<Row>
				{
					pageFields?.topCards?.map(topCard => (
						<Col span={8} key={topCard?.sys?.id} className="join-top-card">
							<img className="join-top-card-image" src={`${topCard?.fields?.file?.url}?w=300`} alt={topCard?.fields?.description} />
							<h2>{topCard?.fields?.title}</h2>
						</Col>
					))
				}
			</Row>
			<div>{documentToPageContent(pageFields?.content)}</div>
		</div>
	)
}
