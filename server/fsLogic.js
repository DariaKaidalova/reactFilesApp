var data = require('./data/mockfs')
const levenshtein = require('levenshtein')

var newIdsCounter = 0;
//It's a mock, it doesn't have to be optimal!
module.exports = {
    get(id) {
        return data
            .filter(item => (item.id === id))[0]
    },
    getFile(id) {
        return data
            .filter(item => (item.id === id && item.type === 'file'))[0]
    },
    rename(id, to) {
        return data
            .filter(item => (item.id === id))
            .map(item => {
                item.name = to
                return item
            })[0]
    },
    getFolder(id) {
        const folder = data
            .filter(item => (item.id === id && item.type === 'folder'))[0]
        console.log(folder)
        if (folder) {
            folder.folders = data
                .filter(item => (item.parentId === id && item.type === 'folder'))
                .map(item => item.id)
            folder.files = data
                .filter(item => (item.parentId === id && item.type === 'file'))
                .map(item => item.id)
        }
        return folder
    },
    remove(id) {
        data = data
        .filter(item => (item.id !== id))
    },
    createFolder(options) {
        data.push({
            name: options.name,
            parentId: options.parentId,
            id: 'n' + newIdsCounter++,
            type: 'folder'
        })
    },
    search(query) {
        return data
            .filter(item => (similar(item.name, query)))
    }
}


function similar(a, b) {
    return (new levenshtein(a, b)).distance < 5
}
