import React from 'react';
import {connect} from 'react-redux'

import Header from './Header';

class PageWrapper extends React.Component {

	render() {

		const {
			children
		} = this.props;

		return (
			<React.Fragment>
				<Header/>

				<div id="PageWrapper">

					{children &&
						children
					}
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(PageWrapper)