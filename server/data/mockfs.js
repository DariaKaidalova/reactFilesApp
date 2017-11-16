function randomFiles(num, parent) {
    return Array(1 + randomUnder(num)).fill('')
        .map(getRandomFileName)
        .map(name => ({
            parentId: parent,
            name: name,
            id: uniqueId(),
            type: 'file'
        }))

}

function randomTree(maxDepth, num, parent) {
    if (maxDepth <= 0) {
        return randomFiles(num, parent)
    }
    const currentLevel = Array(num).fill('')
        .map(getRandomFolderName)
        .map(name => ({
            parentId: parent,
            name: name,
            id: uniqueId(),
            type: 'folder'
        }))
    const children = currentLevel.reduce((mem, item) => mem.concat(randomTree(maxDepth - 1 - randomUnder(2), num, item.id)), [])
    return [].concat(currentLevel, children)
}

function randomUnder(num) {
    return ~~(Math.random() * num)
}

var idCounter = 10;

function uniqueId() {
    return 'i' + (idCounter++);
}

const nameThemes = 'document,invoice,job,salary,presentation,projectPresto,payroll,operations,marketing'.split(',')
const extensions = 'png,jpg,pdf,docx,xlsx,ai'.split(',')

function getRandomOf(arr) {
    return arr[randomUnder(arr.length)]
}

function randomString(num) {
    return Math.random().toString(32).substr(3, num)
}

function getRandomFileName() {
    return getRandomOf(nameThemes) + '-' + randomString(3) + '.' + getRandomOf(extensions)
}

function getRandomFolderName() {
    return getRandomOf(nameThemes) + randomString(3)
}


module.exports = [{
    name: '', //root folder
    id: 'i0',
    parentId: null,
    type: 'folder'
}, {
    name: 'Private',
    parentId: 'i0',
    id: 'i1',
    type: 'folder'
}, {
    name: 'Shared',
    parentId: 'i0',
    id: 'i2',
    type: 'folder'
}].concat(randomFiles(12, 'i1'), randomTree(5, 5, 'i2'))
