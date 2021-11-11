import React, { useEffect } from 'react';

import classes from './CartButton.module.css';
import { mainActions } from '../../store';
import { useDispatch, useSelector } from 'react-redux';

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.main.cartItems);

    const qnt =
        cartItems.reduce((sum, current) => {
            return (sum += current.amount);
        }, 0) || 0;
    const btnClasses =
        classes.button + ' animated faster ' + `${qnt > 0 ? 'pulse' : ''}`;
    const cartBtnHandler = () => {
        dispatch(mainActions.showCartHandler());
    };
    return (
        <button key={qnt} className={btnClasses} onClick={cartBtnHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{qnt}</span>
        </button>
    );
};

export default CartButton;
