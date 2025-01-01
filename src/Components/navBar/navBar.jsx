import { NavLink, useNavigate } from 'react-router';
import { useState } from 'react';
import './navBar.css';

const base = import.meta.env.BASE_URL;

export const NavBar = () => {
	const [selectedLesson, setSelectedLesson] = useState('lesson1');
	const navigate = useNavigate();

	const handleChange = (event) => {
		setSelectedLesson(event.target.value);
		navigate(`${base}`);
	};

	return (
		<nav>
			<select id="dropdown" value={selectedLesson} onChange={handleChange}>
				<option value="lesson1">Lesson 1</option>
				<option value="lesson2">Lesson 2</option>
				<option value="lesson3">Lesson 3</option>
			</select>
			<ul>
				<li>
					<NavLink to={{ pathname: `${base}${selectedLesson}/task_1` }}>Task #1</NavLink>
				</li>
				<li>
					<NavLink to={{ pathname: `${base}${selectedLesson}/task_2` }}>Task #2</NavLink>
				</li>
				<li>
					<NavLink to={{ pathname: `${base}${selectedLesson}/task_3` }}>Task #3</NavLink>
				</li>
				<li>
					<NavLink to={{ pathname: `${base}${selectedLesson}/lesson` }}>
						Data of Lesson
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};
