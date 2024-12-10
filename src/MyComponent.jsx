// import { Fragment } from 'react';
// const getValue = () => 123;
// export const MyComponent = () => {
// 	const className = 'divElement';
// 	const tagName = 'div';
// 	return (
// 		<Fragment>
// 			<label>Value:</label>
// 			<div className={tagName + className} style={{ width: '100px', marginTop: '20px' }}>
// 				{getValue()}
// 			</div>
// 		</Fragment>
// 	);
// };
import PropTypes from 'prop-types';
import { useState } from 'react';

// function getTimeFromDate(date) {
// 	return date.toISOString().substring(11, 19);
// }

export const MyComponent = (props) => {
	const [currentDate, setCurrenDate] = useState(Math.random());
	setTimeout(() => {
		setCurrenDate(Math.random());
	}, 1000);
	return (
		<>
			MyComponent value: {props.value} types: {props.type}
			<br />
			Current time: {currentDate}
			<br />
		</>
	);
};

MyComponent.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};
