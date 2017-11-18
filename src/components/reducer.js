import { FOLDER_IS_DELETED, FOLDER_IS_NOT_DELETED, FILE_IS_DELETED, FILE_IS_NOT_DELETED } from "./actions";

export default function reducer(state = { isVisibleError: false }, { type }) {
    console.log(type);
    switch (type) {
        case FOLDER_IS_DELETED:
            return true;
        case FOLDER_IS_NOT_DELETED:
            return false;
        case FILE_IS_DELETED:
            return true;
        case FILE_IS_NOT_DELETED:
            return false;
        default:
            return state;
    }
}
