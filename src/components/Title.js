import React from "react";

import styles from "./Title.scss";

export default function Title(props) {
    const name = prepareName(props);

    return (
        name && <h2 className={ styles.title }>{ name }</h2>
    );
};

const prepareName = ({ name, parentId }) => {
    if (!name && !parentId) {
        return "Egnyte"
    }
    return name;
};
