import MealItemForm from "./MealItemForm";
import classNames from './MealItem.module.css'

const MealItem = props => {
    return (
        <li className={classNames.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classNames.description}>{props.description}</div>
                <div className={classNames.price}>{props.price}</div>
            </div>
            <div>
                <MealItemForm/>
            </div>

        </li>
    )
};

export default MealItem;