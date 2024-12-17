import { Task_1 } from './Components/Task_1/Task_1';
import { Task_2 } from './Components/Task_2/Task_2';
import { Task_3 } from './Components/Task_3/Task_3';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

const base = import.meta.env.BASE_URL;

export const App = () => {
	return (
		<>
			<Router>
				<div>
					<NavBar />
					<Routes>
						<Route path={`${base}task_1`} element={<Task_1 />} />
						<Route path={`${base}task_2`} element={<Task_2 />} />
						<Route path={`${base}task_3`} element={<Task_3 />} />
						<Route path="*" element={<p>Select the task</p>} />
					</Routes>
				</div>
			</Router>
		</>
	);
};
