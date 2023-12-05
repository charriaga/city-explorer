/* eslint-disable react/prop-types */
import React from "react";
import  Modal from "bootstrap/Modal";

function ErrorModal (props) {
    function hide() {
        const show = false;
        return show;
    }

return (
    <Modal show={props.show}>
        <button onClick={hide}>x</button>
        <header>ERROR</header>
        <body>
            <p>{props.message}</p>
        </body>
    </Modal>
)
}

export default ErrorModal;