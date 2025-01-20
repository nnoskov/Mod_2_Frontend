import styles from './lesson.module.css';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const fieldsScheme = yup.object().shape({
	login: yup
		.string()
		.matches(/^[\w_]*$/, 'Incorrect characters is presence')
		.max(20, 'Only less than 20 characters')
		.min(3, 'Only more than 3 characters'),
});

export const Lesson_4 = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			login: '',
		},
		resolver: yupResolver(fieldsScheme),
	});

	const loginError = errors.login?.message;

	const onSubmit = (formData) => {
		console.log(formData);
	};

	return (
		<div className={styles.lesson}>
			<form onSubmit={handleSubmit(onSubmit)}>
				{loginError && <div className={styles.errorLabel}>{loginError}</div>}
				<input name="login" type="text" {...register('login')} />
				<button type="submit" disabled={!!loginError}>
					Send
				</button>
			</form>
		</div>
	);
};
