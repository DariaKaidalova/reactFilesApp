import React from "react";

import styles from "./DeleteButton.scss";

export default function DeleteButton({ id }) {
  return <button className={ styles.deleteButton }>Delete {id}</button>
}
