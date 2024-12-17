import styles from './Task_2.module.css';
import { useState } from 'react';
import data from './data.json';

export const Task_2 = () => {
	const [steps, setSteps] = useState(data);
	const [activeIndex, setActiveIndex] = useState(0);
	// Можно задать 2 состояния — steps и activeIndex
	const onClickReturn = () => {
		setActiveIndex(activeIndex - 1);
	};

	const onClickForward = () => {
		setActiveIndex(activeIndex + 1);
	};

	const onClickRestart = () => {
		setActiveIndex(0);
	};

	const isFirstStep = activeIndex === 0;
	const isLastStep = activeIndex === steps.length - 1;

	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>{steps[activeIndex].content}</div>
					<ul className={styles['steps-list']}>
						{steps.map(({ id, title }) => (
							<li
								key={id}
								className={
									styles['steps-item'] +
									' ' +
									(parseInt(id - 1) < activeIndex ? styles.done + ' ' : ' ') +
									(parseInt(id - 1) === activeIndex ? styles.active : ' ')
								}
							>
								<button
									className={styles['steps-item-button']}
									onClick={() => setActiveIndex(parseInt(id) - 1)}
								>
									{parseInt(id)}
								</button>
								{title}
							</li>
						))}
					</ul>
					<div className={styles['buttons-container']}>
						<button
							className={styles.button}
							onClick={() => onClickReturn()}
							disabled={isFirstStep}
						>
							Назад
						</button>
						<button
							className={styles.button}
							onClick={isLastStep ? onClickRestart : onClickForward}
						>
							{isLastStep ? 'Начать сначала' : 'Далее'}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
