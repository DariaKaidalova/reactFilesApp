import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import DeleteButton from "./DeleteButton";
import ErrorMessage from "./ErrorMessage";
import styles from "./Folder.scss";

export default function Folder({ folder, onClick, deleteFolder, error }) {
   console.log('error='+error);
  return (<div>
            <div className={ styles.folder } onClick={ onClick }>{ folder.name }</div>
            <DeleteButton info={folder} id={folder.id} error={error} deleteAction={deleteFolder}/>
            if(error) {
              <ErrorMessage message={`Folder ${folder.name} cannot be removed!`}/>
            }
          </div>
        );
}

