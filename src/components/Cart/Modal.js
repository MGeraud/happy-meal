import classNames from './Modal.module.css'
import {createPortal} from "react-dom";

// cŕeation des osus composants nécessaires au modal : Backdrop et Overlay
const Backdrop = props => {
    return <div className={classNames.backdrop} onClick={props.onHideCart} />
};
const Overlay = (props) => {
    return(
        <div className={classNames.modal}>
            <div >{props.children}</div>
        </div>
    )
};

//création d'une constante pour le lien Portal avec html
const portalId = document.getElementById('overlays');

const Modal = props => {

    //utilisation de portal (index html mis à jour avec id:'ovelays' )
    return(
        <>
            {createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalId)}
            {createPortal(<Overlay>{props.children}</Overlay>, portalId)}
        </>

    )
};

export default Modal;