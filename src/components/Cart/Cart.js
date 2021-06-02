import classNames from './Cart.module.css'
import Modal from "./Modal";
import {useContext, useState} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = props => {

    const cartCtx = useContext(CartContext);

    const totalAmount = `€ ${cartCtx.totalAmount.toFixed(2)}`;

    const isNotEmpty = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id =>{
        cartCtx.removeItem(id);
    }
    const cartItemAddHandler = item => {
        cartCtx.addItem({...item,amount:1});
    }

    // item à afficher dans le modal récupérés du context
    const cartItems = <ul className={classNames['cart-items']}> {cartCtx.items.map(item => <CartItem key={item.id}
                                                                                                     name={item.name}
                                                                                                     amount={item.amount}
                                                                                                     price={item.price}
                                                                                                     onRemove={cartItemRemoveHandler.bind(null,item.id)}
                                                                                                     onAdd={cartItemAddHandler.bind(null, item)}
    />)}</ul>;

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