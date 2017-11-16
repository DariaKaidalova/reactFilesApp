import React from "react";

import styles from "./BackButton.scss";

export default function BackButton({ goBack, parentId }) {
    return parentId
        ? <div className={ styles.backButton } onClick={ () => goBack(parentId) }>&larr; Go back</div>
        : null
}
