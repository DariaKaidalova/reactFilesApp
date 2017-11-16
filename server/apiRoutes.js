const fsHandlers = require('./fsHandlers')
const bodyParser = require('body-parser')

module.exports = {
    setUp(router) {
        router.get('/file/:id', fsHandlers.file)
        router.get('/folder/:id', fsHandlers.folder)
        router.get('/root', fsHandlers.root)
        router.get('/search', fsHandlers.search)

        router.use(['/folder/:id/*','/file/:id/*'], bodyParser.json({
            type: "*/*"
        }))
        router.post('/folder/:id/new', fsHandlers.createFolder)
        router.post(['/folder/:id/rename','/file/:id/rename'], fsHandlers.rename)

        router.delete(['/folder/:id','/file/:id'], fsHandlers.delete)
    }
}
