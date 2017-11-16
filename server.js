const express = require('express');
const apiRoutes = require('./server/apiRoutes.js');
const app = express();

const apiRouter = express.Router();

apiRoutes.setUp(apiRouter);
app.use('/api', apiRouter);

app.get('/', (req, res) => res.redirect('/app'));
app.use('/app', express.static('./dist'));

app.listen(8080, ()=>{
    console.log("Open http://localhost:8080/")
});
