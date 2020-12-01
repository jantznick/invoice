import React from 'react';

import Input from './Input';

const Header = props => (
	<div id='header'>
		<div className='split'>
			<div className='left'>
				<h1 className='bold'>Invoice Generator</h1>
			</div>

			<div className='right'>
				<Input
					input='text'
					name='search'
					icon='search'
					placeholder='Invoice #'
				/>
			</div>
		</div>
	</div>
)

export default Header