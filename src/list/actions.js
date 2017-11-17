export const FOLDER_INFO_FETCHED = "folderInfoFetched";
export const FOLDERS_DETAILS_FETCHED = "foldersDetailsFetched";
export const FILES_DETAILS_FETCHED = "filesDetailsFetched";

export default function createActions(api) {
    return {
        loadFolderDetails: createLoadFolderDetails(api),
        fetchRootData: createFetchRootData(api),
        goBack: createGoBack(api),
        deleteFile: createDeleteFile(api),
        deleteFolder: createDeleteFolder(api),
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

export const createDeleteFile = (api) => (id) => (dispatch) => {
    api.file().delete(id).then((fileDeleteResponse) => {
        console.log(fileDeleteResponse);
        console.log('removed file id='+id);
    });
};

export const createDeleteFolder = (api) => (id) => (dispatch) => {
    api.folder().delete(id).then((folderDeleteResponse) => {
        console.log(folderDeleteResponse);
        console.log('removed folder id='+id);
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
