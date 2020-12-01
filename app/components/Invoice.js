import React from 'react';
import {connect} from 'react-redux'

import Input from './Input';

class Invoice extends React.Component {

	render() {

		const {
			currentDocument: {
				type,
				data: {
					subtotal,
					total,
					balance,
					notes,
					title,
					date,
					number,
					terms,
					image,
					items,
					billTo,
					sentFrom
				},
				settings: {
					logo,
					itemGrid,
					bottomAddress
				}
			}
		} = this.props;

		return (
			<React.Fragment>
				<h1>Invoice - #{number}</h1>
				<div id="actualInvoice">
					<div className="invoiceHeader split">
						<div className="split left">
							<div className="left">
								<img src={`images/${image}`} />
							</div>
							<div className="right">
								<Input
									input='text'
									name='sentFromName'
									placeholder={sentFrom.name}
								/>
								<Input
									input='text'
									name='sentFromStreet'
									placeholder={sentFrom.address.street}
								/>
								<Input
									input='text'
									name='sentFromCity'
									placeholder={sentFrom.address.city}
								/>
								<Input
									input='text'
									name='sentFromState'
									placeholder={sentFrom.address.state}
								/>
								<Input
									input='text'
									name='sentFromPostalCode'
									placeholder={sentFrom.address.postalCode}
								/>
								<Input
									input='text'
									name='sentFromPhone'
									placeholder={sentFrom.phone}
								/>
								<Input
									input='text'
									name='sentFromEmail'
									placeholder={sentFrom.email}
								/>
							</div>
						</div>
						<div className="right">
							Invoice:
							<Input
								input='text'
								name='invoiceNumber'
								placeholder={number}
							/>
							Date:
							<Input
								input='text'
								name='invoiceDate'
								placeholder={date}
							/>
							Due:
							<Input
								input='text'
								name='invoiceTerms'
								placeholder={terms}
							/>
							Balance Due:
							{balance}
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return state;
};

export default connect(mapStateToProps)(Invoice)