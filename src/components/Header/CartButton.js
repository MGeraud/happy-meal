import classNames from './CartButton.module.css'
import CartIcon from "../Cart/CartIcon";

const CartButton = () => {
    return(
    <button className={classNames.button} type="submit">
        <span className={classNames.icon}>
            <CartIcon />
        </span>
        <span>your Cart</span>
        <span className={classNames.badge}>3</span>
    </button>
    )
};

export default CartButton;