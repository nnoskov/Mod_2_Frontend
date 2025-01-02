import { STATUS, PLAYER } from '../constants';
import { isWinnerPresence, isEmptyCell } from '../utils';

export const onCellClick = (
	{ status, field, currentPlayer, setField, setStatus, setCurrentPlayer },
	cellIndex,
) => {
	if (
		status === STATUS.WIN ||
		status === STATUS.DRAW ||
		field[cellIndex] !== PLAYER.NOBODY
	)
		return;

	const newField = [...field];
	newField[cellIndex] = currentPlayer;
	setField(newField);

	if (isWinnerPresence(newField, currentPlayer)) {
		setStatus(STATUS.WIN);
	} else if (isEmptyCell(newField)) {
		setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.NOUGHT : PLAYER.CROSS);
	} else {
		setStatus(STATUS.DRAW);
	}
};
