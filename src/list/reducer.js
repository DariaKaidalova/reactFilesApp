import { FOLDER_INFO_FETCHED, FOLDERS_DETAILS_FETCHED, FILES_DETAILS_FETCHED } from "./actions";

export default function reducer(state = { folders: [], files: [], info: {} }, { type, payload }) {
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
