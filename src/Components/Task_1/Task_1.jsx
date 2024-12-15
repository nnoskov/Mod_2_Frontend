import { useState } from 'react';
import style from './Task_1.module.css';

export const Task_1 = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [isValueValid, setIsValueValid] = useState(false);

	const {
		app,
		pageHeading,
		noMarginText,
		currentValue,
		buttonContainer,
		button,
		listContainer,
		listHeading,
		listItem,
	} = style;

	const onInputButtonClick = () => {
		const promtValue = prompt('Введите значение');
		const invalidValue = promtValue?.length < 3;

		if (invalidValue) setError('Введенное значение должно содержать минимум 3 символа');
		else {
			setError('');
			setValue(promtValue);
		}
		setIsValueValid(!invalidValue);
	};

	const onAddButtonClick = (value) => {
		const id = Date.now();
		if (value !== '') {
			setList((list) => [...list, { id, value }]);
		}
		setError('');
		setValue('');
		setIsValueValid(false);
	};

	return (
		<div className={app}>
			<h1 className={pageHeading}>Ввод значения</h1>
			<p className={noMarginText}>
				Текущее значение:
				<output className={currentValue}>&nbsp;&quot;{value}&quot;</output>
			</p>
			{error !== '' ? <div className={style.error}>{error}</div> : ''}
			<div className={buttonContainer}>
				<button className={button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={button}
					disabled={!isValueValid}
					onClick={() => onAddButtonClick(value)}
				>
					Добавить в список
				</button>
			</div>
			<div className={listContainer}>
				<h2 className={listHeading}>Список:</h2>
				{!list.length ? (
					<p className={noMarginText}>Нет добавленных элементов</p>
				) : (
					<ul className={style.list}>
						{list.map((item) => (
							<li className={listItem} key={item.id}>
								{item.value}
							</li>
						))}
					</ul>
				)}
			</div>
		</div>
	);
};
