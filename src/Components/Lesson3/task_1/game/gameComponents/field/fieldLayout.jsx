import styles from './fieldLayout.module.css';
import { PropTypes } from 'prop-types';

const FieldLayout = ({ cells, onCellClick }) => {
	return (
		<div className={styles.cellFields}>
			{cells.map((cell, index) => (
				<button className={styles.button} key={index} onClick={() => onCellClick(index)}>
					{cell}
				</button>
			))}
		</div>
	);
};

export default FieldLayout;

FieldLayout.propTypes = {
	cells: PropTypes.array.isRequired,
	onCellClick: PropTypes.func.isRequired,
};
