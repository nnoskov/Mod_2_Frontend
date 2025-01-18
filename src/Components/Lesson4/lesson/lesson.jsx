import styles from './lesson.module.css';
import { useState, useRef } from 'react';
import * as yup from 'yup';

const sendFormData = (formData) => {
	console.log(formData);
};

const loginChangeScheme = yup
	.string()
	.matches(
		/^[\w_]*$/,
		'Incorrect login. Accessible symbols is numbers, letters and underscore. ',
	)
	.max(20, '20 symbols only');

const loginBlurScheme = yup.string().min(3, 'More then 3 symbols');

const validateAndGetErrorMessage = (scheme, value) => {
	let errorMessage = null;
	try {
		scheme.validateSync(value, { abortEarly: false });
	} catch ({ errors }) {
		console.log(errors);
		errorMessage = errors.join(`\n`);
	}
	console.log(errorMessage);
	return errorMessage;
};
export const Lesson_4 = () => {
	const [login, setLogin] = useState('');
	const [loginError, setLoginError] = useState(null);

	const submitButtonRef = useRef(null);

	const onLoginChange = ({ target }) => {
		setLogin(target.value);

		const newError = validateAndGetErrorMessage(loginChangeScheme, target.value);
		console.log(newError);
		setLoginError(newError);

		if (target.value.length === 20) {
			console.log(submitButtonRef);
			submitButtonRef.current.focus();
		}
	};

	const onLoginBlur = ({ target }) => {
		const newError = validateAndGetErrorMessage(loginBlurScheme, target.value);
		setLoginError(newError);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		sendFormData({ login });
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
					// onBlur={onLoginBlur}
				/>
				<button ref={submitButtonRef} type="submit" disabled={!!loginError}>
					Send
				</button>
			</form>
		</div>
	);
};
