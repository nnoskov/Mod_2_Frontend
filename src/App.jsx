import styles from './App.module.css';
import { MyComponent } from './MyComponent';

export const App = () => {
	return (
		<div className={styles.app}>
			<header className={styles.header}>
				Some text
				<MyComponent />
			</header>
		</div>
	);
};
