import classNames from './Input.module.css'

const Input = props => {
    // utilisation de {...props.input} pour créer un objet qui récupèrera tous les attribut de la balise
    return(
        <div className={classNames.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input  {...props.input} />
        </div>
    )
};

export default Input;