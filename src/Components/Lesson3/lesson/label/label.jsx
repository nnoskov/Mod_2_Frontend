import styles from './label.module.css';
import PropTypes from 'prop-types';

export function Label({ color, children }) {
	return <label className={`${styles.label} ${styles[color]}`}>{children}</label>;
}

Label.propTypes = {
	children: PropTypes.node,
	color: PropTypes.string,
};
