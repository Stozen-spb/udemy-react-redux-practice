import { useSelector, useDispatch } from 'react-redux';
import { mainActions } from '../../store/index';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
    const dispatch = useDispatch();
    const text = useSelector((state) => state.main.some);
    const addLetter = (e) => {
        const payload = { value: '???' };
        dispatch(mainActions.addLetter(payload));
    };
    const increase = (id) => {
        dispatch(mainActions.increase(id));
    };
    const decrease = (id) => {
        dispatch(mainActions.decrease(id));
    };
    const cartProducts = useSelector((state) => state.main.cartItems);
    const totalAmount = cartProducts.reduce((sum, current) => {
        return (sum += current.amount * current.price);
    }, 0);
    return (
        <Card className={classes.cart}>
            <h2>
                Your Shopping Cart {cartProducts.length == 0 ? 'is empty' : ''}
            </h2>
            {/* <h2 onClick={addLetter}>{text}</h2> */}
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            <ul>
                {cartProducts.map((item) => {
                    return (
                        <CartItem
                            key={item.id}
                            item={{
                                title: item.title,
                                quantity: item.amount,
                                total: item.amount * item.price,
                                price: item.price,
                                increase: increase.bind(null, item.id),
                                decrease: decrease.bind(null, item.id),
                            }}
                        />
                    );
                })}
            </ul>
        </Card>
    );
};

export default Cart;
