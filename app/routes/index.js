import React from 'react';
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom';

import App from '../components/App.js';
import NotFound from '../components/NotFound';

import store from '../reducers';

const Routes = () => {
	return (
		<Provider store={store}>
			<Switch>
				<Route exact path="/" component={App} />
				<Route path="/*" component={NotFound} />
			</Switch>
		</Provider>
	);
}

export default Routes;