import {combineReducers} from 'redux';

const initialState = {
	type: 'invoice',
	data: {
		subtotal: 280,
		total: 280,
		balance: 280,
		date: '11/30/2020',
		notes: 'Notes about the inventory, up to x characters long',
		title: 'Sample Invoice',
		number: '0001',
		terms: 'On Receipt',
		image: 'nick-jantz-coding.png',
		billTo: {
			company: 'Google',
			employeeName: 'Sundar Pichai',
			email: 'spichai@google.com',
			address: {
				street: '1600 Amphitheatre Parkway',
				city: 'Mountain View',
				state: 'CA',
				postalCode: 94043
			},
			phone: '123-456-7890'
		},
		sentFrom: {
			name: 'Nick Jantz',
			email: 'thenickjantz@gmail.com',
			phone: '269-369-0340',
			address: {
				street: '113 N Fairview Ave',
				city: 'Mt Prospect',
				state: 'IL',
				postalCode: '60056'
			}
		},
		items: [
			{
				name: 'Itemized Item',
				description: 'A sample item description up to x characters long',
				rate: 140,
				quantity: 2
			}
		]
	},
	settings: {
		logo: true,
		itemGrid: true,
		bottomAddress: true
	}
};

const type = (state = initialState.type, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

const data = (state = initialState.data, action) => {
	switch (action.type) {
		case 'UPDATE_DOCUMENT_DATA':
			return {
				...state,
				sentFrom: {
					...state.sentFrom,
					name: action.payload.value
				}
			};
		default:
			return state;
	}
}

const settings = (state = initialState.settings, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

const currentDocument = combineReducers({
	type,
	data,
	settings
})

export default currentDocument