import { Task_1 } from './Components/Task_1/Task_1';
import { Task_3 } from './Components/Task_3/Task_3';
import { NavBar } from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router';

export const App = () => {
	return (
		<>
			<Router>
				<div>
					<NavBar />
					<Routes>
						<Route path="task_1" element={<Task_1 />} />
						<Route path="task_2" element={<></>} />
						<Route path="task_3" element={<Task_3 />} />
						<Route path="*" element={<p>Path not resolved</p>} />
					</Routes>
				</div>
			</Router>
		</>
	);
};
