import React from "react";
import DeleteButton from "./DeleteButton";
import styles from "./File.scss";

export default function File({ name, id, parentId, deleteFile }) {
  return <div className={ styles.file }>{ name } <DeleteButton info={parentId} id={id} deleteAction={deleteFile}/></div>;
}
