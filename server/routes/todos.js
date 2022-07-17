var express = require('express');
var funcs =  require('../connections/todoconnections');

var router = express.Router();

router.get('/',funcs.getTodo);
router.post('/create-todo',funcs.createTodo);
router.post('/update-todo',funcs.updateTodo);
router.post('/delete-todo',funcs.deleteTodo);

module.exports = router;