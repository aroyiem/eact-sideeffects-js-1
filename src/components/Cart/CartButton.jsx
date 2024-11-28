import classes from './CartButton.module.css';
import {useDispatch, useSelector} from "react-redux";
import {uiActions} from "../../store/ui-slice.js";

export default function CartButton(props) {
    const dispatch = useDispatch();
    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    function handleToggle() {
        dispatch(uiActions.toggle());
    }

    return (
        <button className={classes.button} onClick={handleToggle}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalQuantity}</span>
        </button>
    );
}
