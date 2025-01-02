import { PLAYER, STATUS } from './constants';
import { GameLayout } from './game-layout';
import { useState } from 'react';
import { onCellClick, onRestart } from './handlers';
import { createEmptyField } from './utils';

export const Game = () => {
	const [status, setStatus] = useState(STATUS.TURN);
	const [currentPlayer, setCurrentPlayer] = useState(PLAYER.CROSS);
	const [field, setField] = useState(createEmptyField());

	const state = { status, field, currentPlayer, setField, setStatus, setCurrentPlayer };

	return (
		<GameLayout
			status={status}
			currentPlayer={currentPlayer}
			field={field}
			onCellClick={(cellIndex) => onCellClick(state, cellIndex)}
			onRestart={() => onRestart(state)}
		/>
	);
};
