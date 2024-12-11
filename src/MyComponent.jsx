import { useState } from 'react';

export const MyComponent = () => {
	const [obj, setObj] = useState({ a: 10, b: 30, c: 50 });

	//obj.a = 23; is not possible in react!!

	return (
		<>
			<button
				onClick={(e) => {
					setObj({ ...obj, a: e.clientX });
				}}
			>
				Set Value
			</button>
			<br />
			Obj: {JSON.stringify(obj)}
			<br />
		</>
	);
};
