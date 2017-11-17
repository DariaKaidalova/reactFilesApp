import React from "react";

import styles from "./errorMessage.scss";

export default function ErrorMessage({message}) {
    return (
        <div className={ styles.error }>{ message }</div>
    );
};

