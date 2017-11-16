import React from "react";

import styles from "./File.scss";

export default function File({ name }) {
    return <div className={ styles.file }>{ name }</div>;
}
