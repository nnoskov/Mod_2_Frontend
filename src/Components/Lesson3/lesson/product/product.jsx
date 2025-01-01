//import { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from './product.module.css';

const Product = ({ name, price, amount }) => {
	//const [amount, setAmount] = useState(amount);

	return (
		<>
			<div className={styles.Product}>
				{name} - {price} RUB
			</div>
			<div> Quantity: {amount}</div>
		</>
	);
};

export default Product;

Product.propTypes = {
	name: PropTypes.string,
	price: PropTypes.number,
	amount: PropTypes.number,
};
