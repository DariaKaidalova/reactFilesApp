import React from "react";

import styles from "./errorMessage.scss";

export default function ErrorMessage({message, error}) {
    if (!error) {
      return null;
    }
    return (
        <div className={ styles.error }>{ message }</div>
    );
};

