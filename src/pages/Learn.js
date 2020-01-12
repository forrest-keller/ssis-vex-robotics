import React from 'react';
import useEntries from '../hooks/useEntries';
import { Typography, Card, Row, Col } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

const { Title } = Typography;

export default function Learn() {
	const pageFields = useEntries({
		content_type: "learnPage",
		limit: 1,
		include: 10
	})?.items?.[0]?.fields;

	return (
		<div>
			<Helmet>
				<title>Learn</title>
				<meta name="description" content="Learn more about how VEX Robotics works. Instructional guides written by 76209 SSIS VEX Robotics." />
			</Helmet>
			<Row>
				<Col>
					{
						pageFields?.headerPhoto ?
							<img className="header-photo" alt={pageFields?.pageName} src={pageFields?.headerPhoto?.fields?.file?.url + '?h=100'} />
							: <Title level={1}>{pageFields?.pageName}</Title>
					}
				</Col>
			</Row>
			{
				pageFields?.learnTabs?.map(tab => (
					<Link key={tab?.sys?.id} to={`/learn/${tab?.fields?.url}`}>
						<Card
							className="learn-card"
							cover={<img className="learn-card-photo" alt={tab?.fields?.previewPhoto?.fields?.description} src={`${tab?.fields?.previewPhoto?.fields?.file?.url}?w=200`} />}
						>
							<Meta title={tab?.fields?.name} />
						</Card>
					</Link>
				))
			}
		</div>
	)
}
