import styles from './l3_app.module.css';
import { useState } from 'react';
import { PropTypes } from 'prop-types';

const Counter = ({ value, setValue }) => {
	// NG Потому что источник истины должен быть
	// единственным. Если у нас в родтиельском используется
	// Value то это значение и должно быть в дочернем элементе

	// const [currentValue, setCurrentValue] = useState(value);
	return (
		<>
			<div>{value}</div>
			<button
				onClick={() => {
					setValue(value + 1);
				}}
			>
				{value} +1
			</button>
		</>
	);
};

const L3_App = () => {
	const [value, setValue] = useState(0);
	return (
		<div className={styles.app}>
			<label>Counter:{value}</label>
			<Counter value={value} setValue={setValue} />
		</div>
	);
};

export default L3_App;

Counter.propTypes = {
	value: PropTypes.number.isRequired,
	setValue: PropTypes.func,
};
