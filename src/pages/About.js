import React from 'react';
import useEntries from '../hooks/useEntries';
import { Typography } from 'antd';
import { documentToPageContent } from '../functions/documentToPageContent';
import Members from '../components/members/Members';
import Helmet from 'react-helmet';

const { Title } = Typography;

export default function About() {
	const pageFields = useEntries({
		content_type: "aboutPage",
		limit: 1,
		include: 10
	})?.items?.[0]?.fields;

	return (
		<div>
			<Helmet>
				<title>About</title>
				<meta name="description" content="Learn more about the SSIS VEX Robotics team!" />
			</Helmet>

			{pageFields?.headerPhoto ? <img className="header-photo" alt={pageFields?.pageName} src={pageFields?.headerPhoto?.fields?.file?.url + '?h=200'} /> : <Title level={1}>{pageFields?.pageName}</Title>}
			<img className="hero-photo" alt={pageFields?.heroPhoto?.fields?.file?.description} src={pageFields?.heroPhoto?.fields?.file?.url + '?w=800'} />
			<div>{documentToPageContent(pageFields?.content)}</div>
			<h1>Members</h1>
			<Members members={pageFields?.members} />
		</div>
	)
}
