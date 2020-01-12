import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Pages
import About from './pages/About';
import Join from './pages/Join';
import Learn from './pages/Learn';
import Resources from './pages/Resources';
import Layout from './components/Layout';
import LearnContent from './pages/LearnContent';

ReactDOM.render(
	<Router>
		<Switch>
			<Layout>
				<Route exact path="/">
					<Redirect to="/about" />
				</Route>
				<Route path="/about" component={About} />
				<Route path="/join" component={Join} />
				<Route exact path="/learn" component={Learn} />
				<Route path="/learn/:tab" component={LearnContent} />
				<Route path="/resources" component={Resources} />
			</Layout>
		</Switch>
	</Router>,
	document.getElementById('root')
);