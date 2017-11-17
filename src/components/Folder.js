import React from "react";
import DeleteButton from "./DeleteButton";
import ErrorMessage from "./ErrorMessage";
import styles from "./Folder.scss";

export default function Folder({ folder, onClick, deleteFolder }) {
  return (<div>
            <div className={ styles.folder } onClick={ onClick }>{ folder.name }</div>
            <DeleteButton info={folder} id={folder.id} deleteAction={deleteFolder}/>
            <ErrorMessage message={`Folder ${folder.name} cannot be removed!`}/>
          </div>
        );
}

