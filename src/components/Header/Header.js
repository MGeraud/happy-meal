import classNames from './Header.module.css'
import CartButton from "./CartButton";

import mealsImg from '../../assets/platter-2009590_1920.jpg'

const Header = (props) => {

    return (
        <>
            <header className={classNames.general}>
                <h1>Happy Meals</h1>
                <CartButton onClick={props.onShowCart}/>
            </header>
            <div className={classNames.mainImage}>
                <img src={mealsImg} alt="Table full of meals"/>
            </div>
        </>
    )
};

export default Header;