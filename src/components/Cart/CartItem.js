import classNames from './CartItem.module.css'

const CartItem = props => {
    const price = `€ ${props.price.toFixed(2)}`;

    return(
        <li className={classNames['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={classNames.summary}>
                    <span className={classNames.price}>{price}</span>
                    <span className={classNames.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classNames.actions}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </li>
    )
};

export default CartItem;