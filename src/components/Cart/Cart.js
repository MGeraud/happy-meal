import classNames from './Cart.module.css'
import Modal from "./Modal";
import {useContext, useState} from "react";
import CartContext from "../../store/cart-context";

const Cart = props => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

    const isNotEmpty = cartCtx.items.length > 0;

    //fake item à afficher dans le modal
    const cartItems = <ul className={classNames['cart-items']}> {cartCtx.items.map(item => <li>{item.name}</li>)}</ul>;

    return(
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classNames.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
            </div>
            <div className={classNames.actions}>
                <button className={classNames['button--alt']} onClick={props.onHideCart}>Close</button>
                {isNotEmpty && <button className={classNames.button}>Order</button>}
            </div>
        </Modal>

    )
};

export default Cart;