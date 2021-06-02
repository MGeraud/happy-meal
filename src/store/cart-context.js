import React from "react";

//création du context pour le panier
const CartContext = React.createContext({
    items:[],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (item) => {}
});

export default CartContext;