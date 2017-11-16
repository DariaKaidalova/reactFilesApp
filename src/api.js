const API_PATH = "/api";

function createGet(fetch) {
    return (path) => (id) => fetch(preparePath(path, id)).then((response) => response.json());
}

function preparePath(path, id = "") {
    return `${ API_PATH }/${ path }/${ id }`;
}

export function createApi(fetch) {
    const get = createGet(fetch);

    return {
        folder: () => ({
            get: get("folder")
        }),
        file: () => ({
            get: get("file")
        }),
        root: () => ({
            get: get("root")
        })
    }
}
