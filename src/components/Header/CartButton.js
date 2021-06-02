import classNames from './CartButton.module.css'
import CartIcon from "../Cart/CartIcon";
import {useContext, useEffect, useState} from "react";
import CartContext from "../../store/cart-context";

const CartButton = (props) => {
    const [btnIsHighLighted, setBtnIsHighLighted]= useState(false)
    //récupération du context panier via useContext
    const itemCtx = useContext(CartContext);

    const {items} = itemCtx;

    //utilisation de la fonction reduce, prend le chiffre qui es en 2eme para : ici 0 comme 1er argument nommé currentNumber ici
    const numberOfCartItems= items.reduce((currentNumber, item) => {
        return currentNumber + item.amount;
    }, 0)

    const buttonClasses= `${classNames.button} ${btnIsHighLighted ?  classNames.bump : ''}`

    useEffect(() => {
        if (itemCtx.items.length === 0){
            return;
        }
        setBtnIsHighLighted(true);

        const timer = setTimeout(()=>{
            setBtnIsHighLighted(false);
        }, 300);

        return() => {
            clearTimeout(timer);
        };

    },[items])

    return(
    <button className={buttonClasses} onClick={props.onClick}>
        <span className={classNames.icon}>
            <CartIcon />
        </span>
        <span>your Cart</span>
        <span className={classNames.badge}>{numberOfCartItems}</span>
    </button>
    )
};

export default CartButton;

