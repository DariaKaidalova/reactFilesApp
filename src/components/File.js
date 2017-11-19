import React from "react";
import DeleteButton from "./DeleteButton";
import ErrorMessage from "./ErrorMessage";
import styles from "./File.scss";

export default function File({ name, id, parentId, deleteFile, error }) {
  return (<div>
            <div className={ styles.file }>{ name }</div> 
            <DeleteButton info={parentId} id={id} error={error} deleteAction={deleteFile}/>
          </div>
          );
}
