const API_PATH = "/api";

function createGet(fetch) {
    return (path) => (id) => fetch(preparePath(path, id)).then((response) => response.json());//.catch( error => console.error(error));
}

function createDelete(fetch) {
    return (path) => (id) => fetch(preparePath(path, id), { method: 'delete' });//.then((response) => response.json()).catch( error => console.error(error));
}

function preparePath(path, id = "") {
    return `${ API_PATH }/${ path }/${ id }`;
}

export function createApi(fetch) {
    const get = createGet(fetch);
    const del = createDelete(fetch);

    return {
        folder: () => ({
            get: get("folder"),
            delete: del("folder")
        }),
        file: () => ({
            get: get("file"),
            delete: del("file")
        }),
        root: () => ({
            get: get("root")
        })
    }
}
