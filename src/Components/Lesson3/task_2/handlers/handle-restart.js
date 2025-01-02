import { PLAYER, STATUS } from '../constants';
import { createEmptyField } from '../utils';
export const onRestart = ({ setField, setStatus, setCurrentPlayer }) => {
	setField(createEmptyField());
	setStatus(STATUS.TURN);
	setCurrentPlayer(PLAYER.CROSS);
};
