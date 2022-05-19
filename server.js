const jsonServer = require('json-server');
const auth = require('json-server-auth');
const cors = require('cors');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

// bind router db to the app
server.db = router.db

server.use(auth);
server.use(middlewares);
server.use(router);
server.use(cors);

server.listen(port);