export const FOLDER_INFO_FETCHED = "folderInfoFetched";
export const FOLDERS_DETAILS_FETCHED = "foldersDetailsFetched";
export const FILES_DETAILS_FETCHED = "filesDetailsFetched";

export const FOLDER_IS_DELETED = "folderIsDeleted";
export const FOLDER_IS_NOT_DELETED = "folderIsNotDeleted";

export const FILE_IS_DELETED = "fileIsDeleted";
export const FILE_IS_NOT_DELETED = "fileIsNotDeleted";

export default function createActions(api) {
    return {
        loadFolderDetails: createLoadFolderDetails(api),
        fetchRootData: createFetchRootData(api),
        goBack: createGoBack(api),
        deleteFile: createDeleteFile(api),
        deleteFolder: createDeleteFolder(api)
    }
};

export const createFetchRootData = (api) => () => (dispatch) =>
    api.root().get().then((folder) =>
        dispatch(createLoadFolderDetails(api)(folder))
    );

export const createGoBack = (api) => (parentId) => (dispatch) => {
    api.folder().get(parentId).then((folder) => {
        dispatch(createLoadFolderDetails(api)(folder));
    });
};

export const createDeleteFile = (api) => (parentId, id, error) => (dispatch) => {
    api.file().delete(id).then((fileDeleteResponse) => {
        dispatch(createGoBack(api)(parentId));
    }).catch(error => console.error(error));
};

export const createDeleteFolder = (api) => (info, id, error) => (dispatch) => {
    api.folder().delete(id).then((folder) => {
        dispatch(createGoBack(api)(info.parentId));
        dispatch({ type: FOLDER_IS_DELETED, payload: error });
    }).catch((error) => {
        console.error(error);
        dispatch({ type: FILE_IS_NOT_DELETED, payload: error })
    });
};

const createLoadFolderDetails = (api) => (folder) => (dispatch) => {
    return Promise.all([
        dispatch({ type: FOLDER_INFO_FETCHED, payload: folder }),
        dispatch(createFetchFoldersList(api)(folder.folders)),
        dispatch(createFetchFilesDetails(api)(folder.files))
    ]);
};

const createFetchFoldersList = (api) => (ids) => {
    const all = Promise.all(ids.map((id) => api.folder().get(id)));

    return ({ type: FOLDERS_DETAILS_FETCHED, payload: all });
};

const createFetchFilesDetails = (api) => (ids) => {
    const all = Promise.all(ids.map((id) => api.file().get(id)));

    return ({ type: FILES_DETAILS_FETCHED, payload: all });
};
