import CartContext from "./cart-context";
import {useReducer} from "react";

const defaultCartState ={
    items:[],
    totalAmount: 0
}

//creation du reducer en dehors du component car n'a pas besoin d'ête recréé à chaque fois que le composant est créé
const cartReducer = (state,action) => {

    if (action.type === 'ADD_ITEM'){
        const updatedTotalItemsAmount = state.totalAmount + action.item.price * action.item.amount;

        //verif si item ajouté existe déjà
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        //en fonction de si il existe déjà un item de ce type alors ajout au nombre dans la liste, sinon ajout du nouvel item à la liste
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalItemsAmount
        };
    }
    if (action.type === 'REMOVE_ITEM'){

        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if (existingCartItem.amount === 1 ) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount - 1
            };
            updatedItems=[...state.items]
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }


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