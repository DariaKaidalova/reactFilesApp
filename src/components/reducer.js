import { FOLDER_IS_DELETED, FOLDER_IS_NOT_DELETED, FILES_IS_DELETED, FILES_IS_NOT_DELETED } from "./actions";

export default function reducer(state = { folders: [], files: [], info: {} }, { type, payload }) {
    console.log(type);
    switch (type) {
        case FOLDER_INFO_FETCHED:
            return { ...state, info: payload };
        case FOLDERS_DETAILS_FETCHED:
            return { ...state, folders: payload };
        case FILES_DETAILS_FETCHED:
            return { ...state, files: payload };
        default:
            return state;
    }
}
