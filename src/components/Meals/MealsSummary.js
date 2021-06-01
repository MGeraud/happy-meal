
import classeNames from './MealsSummary.module.css'

const MealsSummary = () => {
    return (
        <section className={classeNames.summary}>
            <h2>All this delicious meals just for You</h2>
            <p>
                Pick-up your favorite meal from our broad selection of available meals and enjoy a delicious lunch at home.
            </p>
            <p>
                All our meals are cooked with high-quality fresh ingredients, just-in-time by our experienced chefs!
            </p>
        </section>
    )
};

export default MealsSummary;