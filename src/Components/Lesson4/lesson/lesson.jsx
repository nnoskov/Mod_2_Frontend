import styles from './lesson.module.css';
import { useState } from 'react';

export const Lesson_4 = () => {
	const [login, setLogin] = useState('');
	const [loginError, setLoginError] = useState(null);

	const onLoginChange = ({ target }) => {
		setLogin(target.value);

		let error = null;

		if (!/^[\w_]*$/.test(target.value)) {
			error = 'Incorrect login. Accessible symbols is numbers, letters and underscore. ';
		} else if (target.value.length > 20) {
			error = '20 symbols only';
		}
		setLoginError(error);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(login);
	};

	const onBlur = () => {
		if (login.length < 3) {
			setLoginError('More then 3 symbols');
		}
	};

	return (
		<div className={styles.lesson}>
			<form onSubmit={onSubmit}>
				{loginError && <div className={styles.errorLabel}>{loginError}</div>}
				<input
					name="login"
					type="text"
					value={login}
					placeholder="Login"
					onChange={onLoginChange}
					onBlur={onBlur}
				></input>
				<button type="submit" disabled={loginError !== null}>
					Send
				</button>
			</form>
		</div>
	);
};
