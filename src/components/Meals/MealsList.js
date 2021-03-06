import classNames from './MealsList.module.css'
import Card from "../UI/Card";
import MealItem from "./MealItem";

// Pour le moment création d'une fake list de menus
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];

const MealsList = () => {
    // helper pour mettre dans une variable l'affichage de la liste de menus
    const mealList = DUMMY_MEALS.map(meal => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price}/>);

    return (
        <section className={classNames.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>
    )
};

export default MealsList;