import React from "react";

import "../css/Modal.css";

const Modal = (props) => {

    //Cuando no viene la propiedad show o esta es falsa, ocultamos el modal
    if (!props.show){
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">{props.title}</h4>
                </div>
                <div className="modal-body">
                    {
                        props.items.map((item, i) =>
                            <div key={i} className="item-container">
                                <img className="item-avatar" src={'https://picsum.photos/200/200?random=' + Math.random()}/>
                                <div className="item-content">
                                    <div className="item-title">
                                        {item.name}
                                    </div>
                                    <div className="item-subtitle">
                                        {item.address.street + ' ' + item.address.suite + ', ' + item.address.city}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={props.onClose}>
                        {props.footer}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
