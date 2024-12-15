import { Link } from 'react-router';
import './NavBar.module.css';

export const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="task_1">Task #1</Link>
				</li>
				<li>
					<Link to="task_2">Task #2</Link>
				</li>
				<li>
					<Link to="task_3">Task #3</Link>
				</li>
			</ul>
		</nav>
	);
};
