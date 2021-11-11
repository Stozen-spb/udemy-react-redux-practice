import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { mainActions } from '../../store/index';

const CartItem = (props) => {
    const { title, quantity, total, price, id, increase, decrease } =
        props.item;
    const dispatch = useDispatch();
    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)}{' '}
                    <span className={classes.itemprice}>
                        (${price.toFixed(2)}/item)
                    </span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={decrease}>-</button>
                    <button onClick={increase}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
