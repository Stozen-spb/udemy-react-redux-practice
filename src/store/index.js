import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialMainState = {
    products: [
        { id: 22, title: 'Sushi', price: 9.99, description: 'delicious sushi' },
        { id: 45, title: 'Pizza', price: 8.99, description: 'delicious pizza' },
        { id: 12, title: 'Coca-Cola', price: 2, description: '0.6 liter' },
    ],
    cartItems: [],
    some: 'hello there general Kenoby',
    showCart: false,
};
const mainState = createSlice({
    name: 'main',
    initialState: initialMainState,
    reducers: {
        addLetter(state, action) {
            state.some += action.payload.value;
        },
        addProductToCart(state, action) {
            const cartItemIndex = state.cartItems.findIndex(
                (item) => item.id == action.payload.id
            );
            const item = state.products.find(
                (item) => item.id == action.payload.id
            );
            if (cartItemIndex >= 0) {
                state.cartItems[cartItemIndex].amount++;
                return;
            }
            state.cartItems.push({
                ...item,
                amount: 1,
            });
        },
        increase(state, action) {
            const item = state.cartItems.find(
                (item) => item.id == action.payload
            );
            item.amount++;
        },
        decrease(state, action) {
            const item = state.cartItems.find(
                (item) => item.id == action.payload
            );
            if (item.amount > 1) {
                item.amount--;
                return;
            }
            state.cartItems = state.cartItems.filter(
                (item) => item.id != action.payload
            );
        },
        showCartHandler(state) {
            state.showCart = !state.showCart;
        },
    },
});

const store = configureStore({
    reducer: { main: mainState.reducer },
});

export const mainActions = mainState.actions;
export default store;
