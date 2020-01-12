import React from 'react';
import Logo from './side-nav/Logo';
import { Layout as AntdLayout } from 'antd';
import SideNav from './side-nav/SideNav';
import Footer from './side-nav/Footer';
import Helmet from 'react-helmet';

const { Sider, Content } = AntdLayout;

export default function Layout({ children }) {
	return (
		<AntdLayout>
			<Helmet titleTemplate="%s - SSIS Robotics" defaultTitle="SSIS Robotics">
				<meta name="description" content="The official website for the 76209 SSIS VEX Robotics team." />
			</Helmet>
			<Sider className="sider">
				<Logo />
				<SideNav />
				<Footer />
			</Sider>
			<Content className="content">
				{children}
			</Content>
		</AntdLayout>
	)
}
