import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart"
import {useState} from "react";
import CartProvider from "./store/CartProvider";

function App() {
    //useState avec destructuration pour affichage ou non du panier
    const [cartIsShow,setCartIsShow] =useState(false);

    //fonction pour mise à jour l'affichage du panier
    const showCartHandler =() => {
        setCartIsShow(true);
    }
    const hideCartHandler =() => {
        setCartIsShow(false)
    }

    return (
        <CartProvider>
            {cartIsShow && <Cart onHideCart={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals/>
            </main>
        </CartProvider>
    );
}

export default App;
