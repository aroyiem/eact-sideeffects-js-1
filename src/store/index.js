import {configureStore} from "@reduxjs/toolkit";
import uiReducers from "./ui-slice.js";
import cartReducers from "./cart-slice.js";

const store = configureStore({
    reducer: {
        ui: uiReducers,
        cart: cartReducers
    }
});

export default store;
