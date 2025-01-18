import styles from './lesson.module.css';
import { useState, useRef } from 'react';

export const Lesson_4 = () => {
	const [stateCounter, setStateCounter] = useState(0);
	const refCounter = useRef(0);

	function incrementRefCounter() {
		refCounter.current += 1;
		console.log('refCounter', refCounter.current);
	}

	function incrementStateCounter() {
		setStateCounter(stateCounter + 1);
		console.log('stateCounter', stateCounter + 1);
	}

	return (
		<div className={styles.lesson}>
			<p>refCounter: {refCounter.current}</p>
			<button onClick={incrementRefCounter}>Add refCounter</button>
			<p>stateCounter: {stateCounter}</p>
			<button onClick={incrementStateCounter}>Add stateCounter</button>
		</div>
	);
};
