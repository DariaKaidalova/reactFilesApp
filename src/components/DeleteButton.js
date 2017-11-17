import React from "react";

import styles from "./DeleteButton.scss";

export default function DeleteButton({ info, deleteAction }) {
	return (<button className={ styles.deleteButton } onClick={ () => deleteAction(info, info.id) }>Delete</button>);
}
