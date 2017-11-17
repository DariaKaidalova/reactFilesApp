import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import cls from "classnames";

import BackButton from "../components/BackButton";
import File from "../components/File";
import Folder from "../components/Folder";
import Title from "../components/Title";

import grid from "getbase/src/scss/styles.scss";
import listStyles from "./List.scss";

export class List extends React.Component {

    componentWillMount() {
        this.props.fetchRootData();
    }

    render() {
        const { loadFolderDetails, goBack, info, folders, files, deleteFile, deleteFolder } = this.props;
        return (
            <div className={ cls(grid["container-m"], listStyles.folderDetails) }>
                <nav className={ listStyles.folderNavigation }>
                    <BackButton goBack={ goBack } parentId={ info.parentId } />
                </nav>
                <Title { ...info } />
                {
                    folders.map((folder) => (
                        <Folder
                            key={ folder.id }
                            folder={folder}
                            // id={ folder.id }
                            // name={ folder.name }
                            onClick={ () => loadFolderDetails(folder) }
                            deleteFolder={ deleteFolder }
                        />
                    ))
                }
                {
                    files.map(({ name, id }) => (
                        <File 
                            key={ id } 
                            name={name} 
                            id={id} 
                            deleteFile={ deleteFile }/>
                    ))
                }
            </div>
        );
    }
}

export default function connectList(actions) {
    return connect(
        ({ list }) => list,
        (dispatch) => bindActionCreators(actions, dispatch)
    )(List);
}
