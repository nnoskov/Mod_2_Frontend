import { Link } from 'react-router';
import './NavBar.css';

const base = import.meta.env.BASE_URL;

export const NavBar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to={`${base}task_1`}>Task #1</Link>
				</li>
				<li>
					<Link to={`${base}task_2`}>Task #2</Link>
				</li>
				<li>
					<Link to={`${base}task_3`}>Task #3</Link>
				</li>
			</ul>
		</nav>
	);
};
