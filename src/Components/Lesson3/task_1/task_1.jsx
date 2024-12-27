import { User } from './user/user';
import styles from './task_1.module.css';
import { Label } from './label/label';

const getUserFromServer = () => ({
	name: 'Nikolay',
	age: 35,
	email: 'nikolay@hhhh.ru',
	phone: '+7999000999',
});
export const Task_1 = () => {
	const user = getUserFromServer();
	return (
		<>
			<div className={styles.app}>
				<Label title="" color="purple">
					Application
				</Label>
				{/* <label className={styles.appLabel}>Application:</label> */}
				<div>Some information regarding application</div>
				<User {...user} />
				{/* <User name={user.name} age={user.age} email={user.email} phone={user.phone} /> */}
			</div>
		</>
	);
};
