import classNames from './MealItemForm.module.css'
import Input from "../UI/Input";

const MealItemForm = props => {

    //in put avec double {{}} car il faut créer un objet regroupant tous les attributs de la balise pour utilisation de {...props.input} dans le composant Input
    return (
        <form className={classNames.form}>
            <Input label="Amount" input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'}
            } />
            <button>Add</button>
        </form>
    )
};

export default MealItemForm;