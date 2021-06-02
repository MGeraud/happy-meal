import classNames from './Input.module.css'
import {forwardRef} from "react";

const Input = forwardRef((props, ref) => {
    // utilisation de {...props.input} pour créer un objet qui récupèrera tous les attribut de la balise
    return(
        <div className={classNames.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref={ref} {...props.input} />
        </div>
    )
});

export default Input;