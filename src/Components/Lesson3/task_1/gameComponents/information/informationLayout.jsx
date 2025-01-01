import { PropTypes } from 'prop-types';

const InformationLayout = ({ status }) => {
	return <div>{status}</div>;
};

export default InformationLayout;

InformationLayout.propTypes = {
	status: PropTypes.string.isRequired,
};
