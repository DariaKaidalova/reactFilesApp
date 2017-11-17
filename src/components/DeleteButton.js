import React from "react";

import styles from "./DeleteButton.scss";

export default function DeleteButton({ info, id, deleteAction }) {
	return (<button className={ styles.deleteButton } onClick={ () => deleteAction(info, id) }>Delete</button>);
}
