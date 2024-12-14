import { useState } from 'react';
import style from './MyComponent.module.css';
export const MyComponent = () => {
	const [showText, setShowText] = useState(false);
	const [showRedText, setShowRedText] = useState(false);

	const onToggleText = () => {
		setShowText(!showText);
	};

	const onColorChange = () => {
		setShowRedText(!showRedText);
	};
	const text = (
		<div className={showRedText ? style.red : style.white}>Text for showing</div>
	);
	return (
		<>
			{showText && text}
			<button onClick={onToggleText}>Show text</button>
			<br />
			<button onClick={onColorChange}>Change color</button>
		</>
	);
};
