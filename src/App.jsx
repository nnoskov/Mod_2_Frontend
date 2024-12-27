import { Task_1 as Task_1_lesson_2 } from './Components/Lesson2/Task_1/Task_1';
import { Task_2 as Task_2_lesson_2 } from './Components/Lesson2/Task_2/Task_2';
import { Task_3 as Task_3_lesson_2 } from './Components/Lesson2/Task_3/Task_3';
import { NavBar } from './Components/navBar/navBar';
import { EmptyTask } from './Components/EmptyTask/EmptyTask';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import { Task_1 as Task_1_lesson_3 } from './Components/Lesson3/task_1/task_1';

const base = import.meta.env.BASE_URL;

export const App = () => {
	return (
		<>
			<Router>
				<div>
					<NavBar />
					<Routes>
						<Route path={`${base}lesson2/task_1`} element={<Task_1_lesson_2 />} />
						<Route path={`${base}lesson2/task_2`} element={<Task_2_lesson_2 />} />
						<Route path={`${base}lesson2/task_3`} element={<Task_3_lesson_2 />} />
						<Route path={`${base}lesson3/task_1`} element={<Task_1_lesson_3 />} />
						<Route path="*" element={<EmptyTask />} />
					</Routes>
				</div>
			</Router>
		</>
	);
};
