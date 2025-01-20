import styles from './lesson.module.css';
import { useForm } from 'react-hook-form';

export const Lesson_4 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
		},
	});

	const loginProps = {
		minLength: { value: 3, message: 'Only more than 3 characters' },
		maxLength: { value: 20, message: 'Only less than 20 characters' },
		pattern: { value: /^[\w_]*$/, message: 'Incorrect characters is presence' },
	};

	const loginError = errors.login?.message;

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<div className={styles.lesson}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{loginError && <div className={styles.errorLabel}>{loginError}</div>}
				<input name="login" type="text" {...register('login', loginProps)} />
				<button type="submit" disabled={!!loginError}>
					Send
				</button>
			</form>
		</div>
	);
};
