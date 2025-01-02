import { PLAYER } from '../constants';
export const isEmptyCell = (field) =>
	field.some((cellPlayer) => cellPlayer === PLAYER.NOBODY);
