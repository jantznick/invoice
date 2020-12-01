import React from 'react';

import PageWrapper from './PageWrapper';
import Invoice from './Invoice';

class App extends React.Component {

	render() {

		return (
			<PageWrapper>
				<div id="InvoicePage">
					<Invoice></Invoice>
				</div>
			</PageWrapper>
		)
	}
}

export default App