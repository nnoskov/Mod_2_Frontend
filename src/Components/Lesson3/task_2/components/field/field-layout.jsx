import styles from './field.module.css';
import { PLAYER_SIGN, PLAYER } from '../../constants/';
import { PropTypes } from 'prop-types';

export const FieldLayout = ({ field, onCellClick }) => (
	<div className={styles.field}>
		{field.map((cellPlayer, index) => (
			<button key={index} className={styles.cell} onClick={() => onCellClick(index)}>
				{PLAYER_SIGN[cellPlayer]}
			</button>
		))}
	</div>
);

FieldLayout.propTypes = {
	field: PropTypes.arrayOf(PropTypes.oneOf([PLAYER.CROSS, PLAYER.NOUGHT, PLAYER.NOBODY])),
	onCellClick: PropTypes.func,
};
