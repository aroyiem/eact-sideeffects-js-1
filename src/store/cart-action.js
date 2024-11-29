import {uiActions} from "./ui-slice.js";
import {cartActions} from "./cart-slice.js";

// custom action creator
export const sendCartData = (cartData) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending', title: 'Sending...', message: 'Sending cart data!'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://react-shopping-cart-28e55-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT', body: JSON.stringify({
                    items: cartData.items,
                    totalQuantity: cartData.totalQuantity
                })
            });
            if (!response.ok) {
                throw new Error("Failed to send cart data.");
            }
        };

        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success', title: 'Success!', message: 'Sent cart data successfully!'
            }));
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error', title: 'Error!', message: 'Sending cart data failed!'
            }));
        }
    };
};

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-shopping-cart-28e55-default-rtdb.firebaseio.com/cart.json');
            if (!response.ok) {
                throw new Error("Could not fetch cart data.");
            }
            const data = await response.json();
            return data;
        };
        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart({
                items: cartData.items || [],
                totalQuantity: cartData.totalQuantity
            }));
        } catch(error) {
            dispatch(uiActions.showNotification({
                status: 'error', title: 'Error!', message: 'Fetching cart data failed!'
            }));
        }
    };
};
