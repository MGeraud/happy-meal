import MealItemForm from "./MealItemForm";
import classNames from './MealItem.module.css'
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const MealItem = props => {
    const price = `$${props.price.toFixed(2)}` ;

    const cartCtx = useContext(CartContext)

    const addToCartHandler = amount => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classNames.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classNames.description}>{props.description}</div>
                <div className={classNames.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>

        </li>
    )
};

export default MealItem;