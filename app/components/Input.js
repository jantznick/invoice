import React from 'react';
import {connect} from 'react-redux'

import {updateDocumentData} from '../actions/currentDocument';

class Input extends React.Component {

	loseFocus = event => {
		console.log(event.target.value);
		this.props.updateDocumentData(event.target.value);
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

const mapStateToProps = (state) => {
	return state;
};

const mapDispatchToProps = (dispatch) => {
	return updateDocumentData;
};

export default connect(mapStateToProps, mapDispatchToProps)(Input)