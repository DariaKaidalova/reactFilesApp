import React from "react";

import styles from "./DeleteButton.scss";

export default function DeleteButton({ info, id, deleteAction, error }) {
	return (<button className={ styles.deleteButton } onClick={ () => deleteAction(info, id, error) }>Delete</button>);
}
