import React from "react";

import styles from "./Folder.scss";

export default function Folder({ name, onClick }) {
    return <div className={ styles.folder } onClick={ onClick }>{ name }/</div>;
}
