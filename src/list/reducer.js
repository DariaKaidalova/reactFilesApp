import { 
    FOLDER_INFO_FETCHED, 
    FOLDERS_DETAILS_FETCHED, 
    FILES_DETAILS_FETCHED,

    FOLDER_IS_DELETED, 
    FOLDER_IS_NOT_DELETED, 

    FILE_IS_DELETED, 
    FILE_IS_NOT_DELETED } from "./actions";

export default function reducer(state = { folders: [], files: [], info: {}, errorInfo: {isFolderError: false, isFileError: false, name: ''} }, { type, payload }) {
    
    switch (type) {
        case FOLDER_INFO_FETCHED:
            return { ...state, info: payload };
        case FOLDERS_DETAILS_FETCHED:
            return { ...state, folders: payload };
        case FILES_DETAILS_FETCHED:
            return { ...state, files: payload };

        case FOLDER_IS_DELETED:
            state.errorInfo.isFolderError = false;
            return { ...state, isFolderError: payload };
        case FOLDER_IS_NOT_DELETED:
            state.errorInfo.isFileError = false;
            state.errorInfo.isFolderError = true;
            return { ...state, isFolderError: payload };

        case FILE_IS_DELETED:
            state.errorInfo.isFileError = false;
            return { ...state, isFolderError: payload };
        case FILE_IS_NOT_DELETED:
            state.errorInfo.isFolderError = false;
            state.errorInfo.isFileError = true;
            return { ...state, isFolderError: payload };

        default:
            return state;
    }
}



