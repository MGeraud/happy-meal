import classNames from './Cart.module.css'
import Modal from "./Modal";

const Cart = props => {
    //fake item à afficher dans le modal
    const cartItems = <ul className={classNames['cart-items']}> {[{id:'c1', name:'Sushi', amount: 12.99}].map(item => <li>{item.name}</li>)}</ul>;

    return(
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classNames.total}>
            <span>Total Amount</span>
            <span>35.62</span>
            </div>
            <div className={classNames.actions}>
                <button className={classNames['button--alt']} onClick={props.onHideCart}>Close</button>
                <button className={classNames.button}>Order</button>
            </div>
        </Modal>

    )
};

export default Cart;