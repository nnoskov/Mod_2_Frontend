import { useState, useEffect } from 'react';
import GameLayout from './gameLayout';

const GameContainer = () => {
	const emptyFields = Array(9).fill('');
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameWinner, setIsGameWinner] = useState(null);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(emptyFields);
	const [status, setStatus] = useState('');

	useEffect(() => {
		let sStatus = `Turn: ${currentPlayer}`;
		if (isGameWinner && !isDraw) sStatus = `Play result: winner is "${isGameWinner}"`;
		else if (isDraw) sStatus = 'Play result: Draw';
		setStatus(sStatus);
	}, [currentPlayer, isGameWinner, isDraw]);

	function togglePlayer(currentPlayer) {
		const changedPlayer = currentPlayer === 'X' ? 'O' : 'X';
		setCurrentPlayer(changedPlayer);
	}

	function checkWinner(field) {
		const WIN_PATTERNS = [
			[0, 1, 2], // Горизонтальные
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6], // Вертикальные
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8], // Диагонали
			[2, 4, 6],
		];

		for (const combination of WIN_PATTERNS) {
			const [a, b, c] = combination;
			if (field[a] && field[a] === field[b] && field[a] === field[c]) {
				return field[a];
			}
		}
		return null;
	}

	const handleClick = (index) => {
		const newCells = field.slice();
		if (!isGameWinner && field[index] === '') {
			newCells[index] = currentPlayer;
			setField(newCells);
			togglePlayer(currentPlayer);
			setIsGameWinner(checkWinner(newCells));
		}

		if (!newCells.includes('')) {
			setIsDraw(true);
		}
	};

	const handleNewGame = () => {
		setField(emptyFields);
		setIsDraw(false);
		setCurrentPlayer('X');
		setIsGameWinner(null);
	};

	return (
		<>
			<GameLayout
				nameOfGame={'Game of "Tic Tac Toe"'}
				cells={field}
				currentPlayer={currentPlayer}
				status={status}
				onCellClick={handleClick}
				onNewGameClick={handleNewGame}
			/>
		</>
	);
};

export default GameContainer;
