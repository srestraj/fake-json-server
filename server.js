const jsonServer = require('json-server');
const auth = require('json-server-auth');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;


// auth rules
const rules = auth.rewriter({
    users: 660,
})


// bind router db to the app
server.db = router.db

server.use(rules);
server.use(auth);
server.use(middlewares);
server.use(router);

server.listen(port);