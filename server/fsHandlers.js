const fsLogic = require('./fsLogic')

module.exports = {
    root(req, res) {
        const folder = fsLogic.getFolder('i0')
        if (folder) {
            res.json(folder)
        } else {
            res.status(404).end()
        }
    },
    folder(req, res) {
        const folder = fsLogic.getFolder(req.params.id)
        if (folder) {
            res.json(folder)
        } else {
            res.status(404).end()
        }
    },
    createFolder(req, res) {
        const name = req.body.name
        if (name.indexOf('.') > 0) {
            return res.status(409).end('Incorrect name')
        }
        const parent = fsLogic.getFolder(req.params.id)
        if (parent) {
            const folder = fsLogic.createFolder({
                parentId: parent.id,
                name: name
            })
            res.json(folder)
        } else {
            res.status(404).end()
        }
    },
    file(req, res) {
        const file = fsLogic.getFile(req.params.id)
        if (file) {
            res.json(file)
        } else {
            res.status(404).end()
        }
    },
    delete(req, res) {
        fsLogic.remove(req.params.id)
        res.status(204).end()
    },
    rename(req, res) {
        const to = req.body.name
        const item = fsLogic.rename(req.params.id, to)
        if (item) {
            res.json(item)
        } else {
            res.status(404).end()
        }
    },
    search(req, res) {
        const file = fsLogic.search(req.query.q)
        if (file) {
            res.json(file)
        } else {
            res.status(404).end()
        }
    }
}
