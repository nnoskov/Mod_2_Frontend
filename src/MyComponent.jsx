import { useState } from 'react';

export const MyComponent = () => {
	const products = [
		{ id: 'asdf', name: 'Penal' },
		{ id: 'ddss', name: 'Iron' },
	];

	const [name, setName] = useState(null);
	const [keyPressed, setKeyPressed] = useState(null); // Для хранения уникального ключа
	const [value, setValue] = useState(0);
	const [showText, setShowText] = useState(false);

	const onClicker = (id, name) => {
		setName(name);
		setKeyPressed(id); // Устанавливаем уникальный ключ
	};

	const increment = () => {
		setValue((updatedValue) => updatedValue + 1);
		setValue((updatedValue) => updatedValue + 1);
		setValue((updatedValue) => updatedValue + 1);
		if (value > 15) setShowText(true);
	};

	const span = (
		<div>
			<span>Selected Product: {name}</span>
		</div>
	);
	return (
		<>
			{showText && span}
			<div>
				<span>Key Pressed: {keyPressed}</span>
			</div>
			{products.map(({ id, name }) => (
				<button key={id} onClick={() => onClicker(id, name)} style={{ margin: '5px' }}>
					{name}
				</button>
			))}
			<br />
			<span>{value}</span>
			<br />
			<button onClick={increment}>{showText ? '+1' : '+6'}</button>
		</>
	);
};
