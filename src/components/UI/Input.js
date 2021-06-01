import classNames from './Input.module.css'

const Input = props => {
    return(
        <div className={classNames.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input  {...props.input} />
        </div>
    )
}

export default Input;