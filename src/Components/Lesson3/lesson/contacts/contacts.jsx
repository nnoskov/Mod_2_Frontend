import PropTypes from 'prop-types';
// import styles from './contacts.module.css';
import { Label } from '../label/label';

export function Contacts({ email, phone }) {
	return (
		<div>
			<Label color="orange">Contacts</Label>
			{/* <Label title="Contacts" color="orange" /> */}
			{/* <label className={styles.contactsLabel}>Contacts:</label> */}
			<div>E-mail: {email}</div>
			<div>Phone: {phone}</div>
		</div>
	);
}

Contacts.propTypes = {
	email: PropTypes.string,
	phone: PropTypes.string,
};
