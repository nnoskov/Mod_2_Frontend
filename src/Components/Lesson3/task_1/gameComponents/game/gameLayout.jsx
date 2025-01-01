import styles from './gameLayout.module.css';
import Information from '../information/information';
import FieldContainer from '../field/fieldContainer';
import { PropTypes } from 'prop-types';

const GameLayout = ({ nameOfGame, cells, status, onCellClick, onNewGameClick }) => {
	return (
		<div className={styles.game}>
			<h2 className={styles.h2}>{nameOfGame}</h2>
			<Information status={status} />
			<FieldContainer cells={cells} onCellClick={onCellClick} />
			<button className={styles.button} onClick={onNewGameClick}>
				New Game
			</button>
		</div>
	);
};

export default GameLayout;

GameLayout.propTypes = {
	nameOfGame: PropTypes.string.isRequired,
	cells: PropTypes.array.isRequired,
	status: PropTypes.string.isRequired,
	onCellClick: PropTypes.func.isRequired,
	onNewGameClick: PropTypes.func.isRequired,
};
