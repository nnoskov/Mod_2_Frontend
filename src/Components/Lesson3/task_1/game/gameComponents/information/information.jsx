import InformationLayout from './informationLayout';
import { PropTypes } from 'prop-types';

const Information = ({ status }) => {
	return (
		<>
			<InformationLayout status={status} />
		</>
	);
};

export default Information;

Information.propTypes = {
	status: PropTypes.string.isRequired,
};
