import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState ={
    items:[],
    totalAmount: 0
}

//creation du reducer en dehors du component car n'a pas besoin d'ête recréé à chaque fois que le composant est créé
const cartReducer = (state,action) => {
    if (action.type === 'ADD_ITEM'){
        const updatedItems = state.items.concat(action.item);
        const updatedTotalItemsAmount = state.totalAmount + action.item.price * action.item.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalItemsAmount
        };
    }
    if (action.type === 'REMOVE_ITEM'){

    }

    return defaultCartState;
}


const CartProvider = props => {

    const [cartState , dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    //fonctions pour ajouter ou reduire nombre item en utilisant le reducer
    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD_ITEM', item: item});
    };
    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE_ITEM' , id: id})
    };

    const cartContext ={
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler ,
        removeItem:removeItemFromCartHandler
    }

    return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
};

export default CartProvider;