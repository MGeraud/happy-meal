import classNames from './MealItemForm.module.css'
import Input from "../UI/Input";
import {useRef, useState} from "react";

const MealItemForm = props => {

    //utilisation d'un state pour le nombre d'item valide ou non
    const [amountIsValid , setAmountIsValid] = useState(true);

    const amountInputREf = useRef();

    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputREf.current.value;
        const enteredAmountNumber = + enteredAmount;

        //vérif si nombre item est bien dans les valeurs demandées
        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNumber);
    };


    //in put avec double {{}} car il faut créer un objet regroupant tous les attributs de la balise pour utilisation de {...props.input} dans le composant Input
    return (
        <form className={classNames.form} onSubmit={submitHandler}>
            <Input ref={amountInputREf} label="Amount" input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'}
            } />
            <button>Add</button>
            {!amountIsValid && <p>Please enter anamount between 1 and 5</p>}
        </form>
    )
};

export default MealItemForm;