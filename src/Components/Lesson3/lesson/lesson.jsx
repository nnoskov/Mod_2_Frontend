import { User } from './user/user';
import styles from './lesson.module.css';
import { Label } from './label/label';
import Product from './product/product';
import L3_App from './l3_app/l3_app';

const getUserFromServer = () => ({
	name: 'Nikolay',
	age: 35,
	email: 'nikolay@hhhh.ru',
	phone: '+7999000999',
});
export const Lesson = () => {
	const user = getUserFromServer();
	return (
		<>
			<div className={styles.app}>
				<Label color="purple">Application</Label>
				{/* <label className={styles.appLabel}>Application:</label> */}
				<div>Some information regarding application</div>
				<User {...user} />
				{/* <User name={user.name} age={user.age} email={user.email} phone={user.phone} /> */}
				<br />
				<Product name="Mega Product" price={100} amount={42} />
				<br />
				<L3_App />
			</div>
		</>
	);
};
