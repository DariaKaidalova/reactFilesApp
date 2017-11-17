import React from "react";
import DeleteButton from "./DeleteButton";
import styles from "./Folder.scss";

export default function Folder({ folder, onClick, deleteFolder }) {
    return (<div><div className={ styles.folder } onClick={ onClick }>{ folder.name } </div><DeleteButton info={folder} deleteAction={deleteFolder}/></div>);
}
