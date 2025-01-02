import styles from './game.module.css';
import { Field, Information } from './components';
import { PropTypes } from 'prop-types';
import { PLAYER, STATUS } from './constants';
export const GameLayout = ({ status, currentPlayer, field, onCellClick, onRestart }) => (
	<div className={styles.game}>
		<Information status={status} currentPlayer={currentPlayer} />
		<Field field={field} onCellClick={onCellClick} />
		<button className={styles.restartButton} onClick={onRestart}>
			New Game
		</button>
	</div>
);

GameLayout.propTypes = {
	status: PropTypes.oneOf([STATUS.DRAW, STATUS.TURN, STATUS.WIN]),
	currentPlayer: PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY]),
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY])),
	onCellClick: PropTypes.func,
	onRestart: PropTypes.func,
};
