import { createElement, useState } from 'react';
import './App.css';

const baseUrl = import.meta.env.BASE_URL;
export const App = () => {
	const year = new Date().getFullYear();
	let [count] = useState(0);

	const button = createElement('button', { onClick: setCount }, `count is ${count}`);
	function setCount(event) {
		event.target.innerText = `count is ${++count}`;
	}

	return createElement(
		'div',
		null,
		createElement(
			'div',
			null,
			createElement(
				'a',
				{ href: 'https://vite.dev', target: '_blank' },
				createElement('img', {
					src: `${baseUrl}/vite.svg`,
					className: 'logo',
					alt: 'Vite logo',
				}),
			),
			createElement(
				'a',
				{ href: 'https://react.dev', target: '_blank' },
				createElement('img', {
					src: `${baseUrl}/react.svg`,
					className: 'logo react',
					alt: 'Logo react',
				}),
			),
		),
		createElement('h1', null, 'Vite + React'),
		createElement(
			'div',
			{ className: 'card' },
			button,
			createElement('p', null, `Edit src/App.jsx and save to test HMR`),
		),
		createElement(
			'p',
			{ className: 'read-the-docs' },
			`Click on the Vite and React logos to learn more in ${year}`,
		),
	);
};
