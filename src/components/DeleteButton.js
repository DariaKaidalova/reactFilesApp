import React from "react";

import styles from "./DeleteButton.scss";

export default function DeleteButton({ id, deleteAction }) {
  return <button className={ styles.deleteButton } onClick={ () => deleteAction(id) }>Delete {id}</button>
}
