import React from "react";
import DeleteButton from "./DeleteButton";
import styles from "./File.scss";

export default function File({ name, id }) {
    return <div className={ styles.file }>{ name } <DeleteButton id={ id }/></div>;
}
