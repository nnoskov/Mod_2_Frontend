import styles from './lesson.module.css';
import { useState } from 'react';
import Select from 'react-select';

// const initialState = {
// 	email3: '',
// 	login3: '',
// 	password3: '',
// };

// const useStore = () => {
// 	const [state, setState] = useState(initialState);
// 	return {
// 		getState: () => state,
// 		updateState: (fieldName, newValue) => {
// 			setState({ ...state, [fieldName]: newValue });
// 		},
// 		resetState: () => setState(initialState),
// 	};
// };

// const sendData = (formatData) => {
// 	console.log(formatData);
// };
// export const Lesson_4 = () => {
// 	// 3 example
// 	const { getState, updateState, resetState } = useStore();
// 	// 2 example
// 	const [formData, setFormData] = useState({ email: '', login: '', password: '' });
// 	// 1 example
// 	const [value, setValue] = useState('');
// 	const [email, setEmail] = useState('');
// 	const [login, setLogin] = useState('');
// 	const [password, setPassword] = useState('');

// 	const { email3, login3, password3 } = getState();

// 	const onChange = ({ target }) => {
// 		updateState(target.name, target.value);
// 	};

// 	const onSubmit = (event) => {
// 		event.preventDefault();
// 		sendData({ email, login, password });
// 	};

// 	const onSubmitForm = (event) => {
// 		event.preventDefault();
// 		sendData(formData);
// 	};

// 	const onSubmitForm3 = (event) => {
// 		event.preventDefault();
// 		sendData(getState());
// 	};

// 	return (
// 		<div className={styles.lesson}>
// 			<input
// 				type="text"
// 				className={styles.input}
// 				value={value}
// 				onChange={({ target }) => setValue(target.value)}
// 			/>
// 			<input type="checkbox" className={styles.input} />
// 			<div className={styles.content}>Some content witch opened by using css</div>
// 			<div className={styles.formContainer}>
// 				<span className={styles.formLabel}>First Example</span>
// 				<form className={styles.form} onSubmit={onSubmit}>
// 					<input
// 						type="email"
// 						name="email"
// 						value={email}
// 						placeholder="mail@example.com"
// 						onChange={({ target }) => setEmail(target.value)}
// 					></input>
// 					<input
// 						type="text"
// 						name="login"
// 						value={login}
// 						placeholder="login"
// 						onChange={({ target }) => setLogin(target.value)}
// 					></input>
// 					<input
// 						type="password"
// 						name="password"
// 						value={password}
// 						placeholder="password"
// 						onChange={({ target }) => setPassword(target.value)}
// 					></input>
// 					<button type="submit">Send</button>
// 				</form>
// 			</div>
// 			<div className={styles.formContainer}>
// 				<span className={styles.formLabel}>Second example</span>
// 				<form className={styles.form} onSubmit={onSubmitForm}>
// 					<input
// 						type="email"
// 						name="email"
// 						value={formData.email}
// 						placeholder="mail@example.com"
// 						onChange={({ target }) => setFormData({ ...formData, email: target.value })}
// 					></input>
// 					<input
// 						type="text"
// 						name="login"
// 						value={formData.login}
// 						placeholder="login"
// 						onChange={({ target }) => setFormData({ ...formData, login: target.value })}
// 					></input>
// 					<input
// 						type="password"
// 						name="password"
// 						value={formData.password}
// 						placeholder="password"
// 						onChange={({ target }) =>
// 							setFormData({ ...formData, password: target.value })
// 						}
// 					></input>
// 					<button type="submit">Send</button>
// 				</form>
// 			</div>
// 			<div className={styles.formContainer}>
// 				<span className={styles.formLabel}>Third example</span>
// 				<form className={styles.form} onSubmit={onSubmitForm3}>
// 					<input
// 						type="email"
// 						name="email3"
// 						value={email3}
// 						placeholder="mail@example.com"
// 						onChange={onChange}
// 					></input>
// 					<input
// 						type="text"
// 						name="login3"
// 						value={login3}
// 						placeholder="login"
// 						onChange={onChange}
// 					></input>
// 					<input
// 						type="password"
// 						name="password3"
// 						value={password3}
// 						placeholder="password"
// 						onChange={onChange}
// 					></input>
// 					<button type="submit">Send</button>
// 					<button type="button" onClick={resetState}>
// 						Reset
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };
const productOptions = [
	{ value: 'tv', label: 'Televisor' },
	{ value: 'smartPhone', label: 'Phone' },
	{ value: 'laptop', label: 'Laptop' },
];

const colorOptions = [
	{ value: 'black', label: 'Black' },
	{ value: 'silver', label: 'Silver' },
	{ value: 'white', label: 'White' },
];
export const Lesson_4 = () => {
	// const [selectedProducts, setSelectedProduct] = useState('TV');
	// const [selectedColors, setSelectedColors] = useState(['black', 'silver']);

	// function onSelectedProductChange({ target }) {
	// 	setSelectedProduct(target.value);
	// }

	// function onSelectedColorsChange({ target }) {
	// 	const newSelectedColors = [...target.selectedOptions].map(
	// 		(selectedTarget) => selectedTarget.value,
	// 	);
	// 	setSelectedColors(newSelectedColors);
	// }

	return (
		<div className={styles.lesson}>
			<Select options={productOptions} defaultValue={productOptions[0]}></Select>
			<Select
				isMulti
				options={colorOptions}
				defaultValue={[colorOptions[0], colorOptions[1]]}
			></Select>
			{/* <select value={selectedProducts} onChange={onSelectedProductChange}>
				<option value="tv">Televisor </option>
				<option value="smartPhone">Phone</option>
				<option value="laptop">Laptop</option>
			</select>
			<select multiple={true} value={selectedColors} onChange={onSelectedColorsChange}>
				<option value="black">Black</option>
				<option value="silver">Silver</option>
				<option value="white">White</option>
			</select> */}
		</div>
	);
};
