import { expect } from "chai";
import thunk from "redux-thunk";
import reduxPromise from "redux-promise";
import configureStore from "redux-mock-store";

import createActions, {
    FOLDER_INFO_FETCHED,
    FOLDERS_DETAILS_FETCHED,
    FILES_DETAILS_FETCHED
} from "../../src/list/actions";

const folder = {
    folders: [],
    files: []
};

const rootFolder = {
    folders: [],
    files: [],
    parentId: null
};

describe("actions", () => {
    const api = createApi();
    let store;

    beforeEach(() => {
        store = makeStore();
    });

    describe("fetchRootData", () => {
        const fetchRootData = createActions(api).fetchRootData;

        it("dispatches FOLDER_INFO_FETCHED with value returned by api", () => {
            return store.dispatch(fetchRootData()).then(() => {
                expect(store.getActions()).to.contain(
                    { type: FOLDER_INFO_FETCHED, payload: rootFolder }
                );
            });
        });
    });

    describe("loadFolderDetails", () => {
        const loadFolderDetails = createActions(api).loadFolderDetails;

        it("passes requested folder to info", () => {
            return store.dispatch(loadFolderDetails(folder)).then(() => {
                expect(store.getActions()).to.contain(
                    { type: FOLDER_INFO_FETCHED, payload: folder }
                );
            });
        });

        it("dispatches FOLDERS_DETAILS_FETCHED", () => {
            return store.dispatch(loadFolderDetails(folder)).then(() => {
                expect(store.getActions()).to.contain(
                    { type: FOLDERS_DETAILS_FETCHED, payload: [] }
                );
            });
        });
        it("dispatches FILES_DETAILS_FETCHED", () => {
            return store.dispatch(loadFolderDetails(folder)).then(() => {
                expect(store.getActions()).to.contain(
                    { type: FILES_DETAILS_FETCHED, payload: [] }
                );
            });
        });

        it("dispatches FOLDERS_DETAILS_FETCHED with data from api for each folder", () => {
            const folderWithSubfolders = {
                ...folder,
                folders: [1, 2, 3]
            };
            return store.dispatch(loadFolderDetails(folderWithSubfolders)).then(() => {
                console.log(store.getActions());
                expect(store.getActions()).to.contain(
                    { type: FOLDERS_DETAILS_FETCHED, payload: Array(3).fill("folder data") }
                );
            });
        });

        it("dispatches FILES_DETAILS_FETCHED with data from api for each file", () => {
            const folderWithSubfolders = {
                ...folder,
                files: [1, 2, 3, 4]
            };
            return store.dispatch(loadFolderDetails(folderWithSubfolders)).then(() => {
                console.log(store.getActions());
                expect(store.getActions()).to.contain(
                    { type: FILES_DETAILS_FETCHED, payload: Array(4).fill("file data") }
                );
            });
        });
    });
});


const makeStore = configureStore([thunk, reduxPromise]);

function createApi() {
    return {
        root: () => ({
            get: () => Promise.resolve(rootFolder)
        }),
        folder: () => ({
            get: (id) => Promise.resolve("folder data")
        }),
        file: () => ({
            get: (id) => Promise.resolve("file data")
        })
    }
};
