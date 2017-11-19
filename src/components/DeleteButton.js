import React from "react";
import PropTypes from 'prop-types'
import styles from "./DeleteButton.scss";

export default function DeleteButton({ info, id, deleteAction, error, visibility }) {
	return (<button className={ styles.deleteButton } onClick={ () => deleteAction(info, id, error) }>Delete</button>);
}

DeleteButton.propTypes = {
  visibility: PropTypes.bool.isRequired
}
