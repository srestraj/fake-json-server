const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({ noCors: true });
const port = process.env.PORT || 3000;

// bind router db to the app
server.db = router.db

server.use(auth);
server.use(middlewares);
server.use(router);
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

server.listen(port);