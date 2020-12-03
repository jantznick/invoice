import React from 'react';
import {connect} from 'react-redux'

import {updateDocumentData} from '../actions/currentDocument';

class Input extends React.Component {

	loseFocus = event => {
		this.props.updateDocumentData({
			name: event.target.name,
			value: event.target.value
		});
	};

	render() {

		const {
			input,
			icon,
			name,
			placeholder
		} = this.props;

		return (
			<div className='input'>
				<input
					type={input}
					name={name}
					defaultValue={placeholder}
					onBlur={this.loseFocus}
				/>
				{icon &&
					<span className="material-icons">
					{icon}
					</span>
				}
			</div>
		)
	}
}

// const mapStateToProps = (state) => {
// 	return state;
// };

const mapDispatchToProps = {
	updateDocumentData
};

export default connect(null, mapDispatchToProps)(Input)