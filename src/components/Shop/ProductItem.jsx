import classes from './ProductItem.module.css';
import Card from "../UI/Card.jsx";
import {useDispatch} from "react-redux";
import {cartActions} from "../../store/cart-slice.js";

export default function ProductItem({id, title, price, description}) {
    const dispatch = useDispatch();

    function handleAddToCart() {
        // and then send Http request
        // fetch('firebase-url', { method: 'POST', body: JSON.stringify(newCart) })
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price
        }));
    }

    return (
        <li className={classes.item}>
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
}
