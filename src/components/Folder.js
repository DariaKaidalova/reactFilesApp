import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DeleteButton from "./DeleteButton";
import ErrorMessage from "./ErrorMessage";
import styles from "./Folder.scss";

export default function Folder({ folder, onClick, deleteFolder, error }) {
  return (<div>
            <div className={ styles.folder } onClick={ onClick }>{ folder.name }</div>
            <DeleteButton visibility={true} info={folder} id={folder.id} error={error} deleteAction={deleteFolder}/>
          </div>
        );
}

