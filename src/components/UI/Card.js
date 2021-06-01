import classNames from './card.module.css'

const Card = props => {
    return(
        <div className={classNames.card}>{props.children}
        </div>
    )
};

export default Card;