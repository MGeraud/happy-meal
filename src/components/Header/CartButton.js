import classNames from './CartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import {useContext} from "react";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
    //récupération du context panier via useContext
    const itemCtx = useContext(CartContext);

    //utilisation de la fonction reduce, prend le chiffre qui es en 2eme para : ici 0 comme 1er argument nommé currentNumber ici
    const numberOfCartItems= itemCtx.items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)

    return(
    <button className={classNames.button} onClick={props.onClick}>
        <span className={classNames.icon}>
            <CartIcon />
        </span>
        <span>your Cart</span>
        <span className={classNames.badge}>{numberOfCartItems}</span>
    </button>
    )
};

export default CartButton;