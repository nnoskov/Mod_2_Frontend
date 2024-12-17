import { useState } from 'react';
import styles from './Task_3.module.css';

export const Task_3 = () => {
	const [input, setInput] = useState('');
	const [isResult, setIsResult] = useState(false);

	const buttons = [
		{ label: '1', value: '1' },
		{ label: '2', value: '2' },
		{ label: '3', value: '3' },
		{ label: '4', value: '4' },
		{ label: '5', value: '5' },
		{ label: '6', value: '6' },
		{ label: '7', value: '7' },
		{ label: '8', value: '8' },
		{ label: '9', value: '9' },
		{ label: '0', value: '0' },
		{ label: '+', value: '+' },
		{ label: '-', value: '-' },
		{ label: 'C', value: 'C' },
		{ label: '=', value: '=' },
	];

	const handleButtonClick = (value) => {
		if (value === '=') {
			handleCalculate();
		} else if (value === 'C') {
			handleClear();
		} else {
			setInput((prev) => prev + value);
			setIsResult(false);
		}
	};

	const handleClear = () => {
		setInput('');
	};

	const handleCalculate = () => {
		try {
			setInput(eval(input));
		} catch (error) {
			console.error(error);
			setInput('Error');
		} finally {
			setIsResult(true);
		}
	};

	return (
		<div className={styles.calculator}>
			<div className={styles.display}>
				<div className={isResult ? styles.result : styles.expression}>{input}</div>
			</div>
			<div className={styles.buttons}>
				{buttons.map(({ label, value }) => (
					<button
						key={value}
						className={styles.button}
						onClick={() => handleButtonClick(value)}
					>
						{label}
					</button>
				))}
			</div>
		</div>
	);
};
