import { Contacts } from '../contacts/contacts';
import styles from './user.module.css';
import PropTypes from 'prop-types';
import { Label } from '../label/label';

export const User = ({ name, age, ...contacts }) => {
	return (
		<div className={styles.user}>
			<Label color="green">User</Label>
			{/* <Label title="User" color="green" /> */}
			{/* <label className={styles.userLabel}>User</label> */}
			<div>Name: {name}</div>
			<div>Age: {age}</div>
			<Contacts {...contacts} />
		</div>
	);
};

User.propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
	email: PropTypes.string.isRequired,
	phone: PropTypes.string.isRequired,
};
