import styles from './information.module.css';
import { PropTypes } from 'prop-types';
export const InformationLayout = ({ information }) => (
	<div className={styles.information}>{information}</div>
);

InformationLayout.propTypes = {
	information: PropTypes.string,
};
