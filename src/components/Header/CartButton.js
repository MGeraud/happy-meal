import classNames from './CartButton.module.css'
import CartIcon from "../Cart/CartIcon";

const CartButton = (props) => {
    return(
    <button className={classNames.button} onClick={props.onClick}>
        <span className={classNames.icon}>
            <CartIcon />
        </span>
        <span>your Cart</span>
        <span className={classNames.badge}>3</span>
    </button>
    )
};

export default CartButton;