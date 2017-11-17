import React from "react";
import DeleteButton from "./DeleteButton";
import styles from "./Folder.scss";

export default function Folder({ name, onClick, id, deleteFolder }) {
    return <div><div className={ styles.folder } onClick={ onClick }>{ name } </div><DeleteButton id={id} deleteAction={deleteFolder}/></div>;
}
