import FieldLayout from './fieldLayout';
import { PropTypes } from 'prop-types';

const FieldContainer = ({ cells, onCellClick }) => {
	return (
		<>
			<FieldLayout cells={cells} onCellClick={onCellClick} />
		</>
	);
};

export default FieldContainer;

FieldContainer.propTypes = {
	cells: PropTypes.array.isRequired,
	onCellClick: PropTypes.func.isRequired,
};
