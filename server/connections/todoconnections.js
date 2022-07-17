var Todo = require('../models/todo');

exports.getTodo =  async function (req, res){
    const todo_lists = await Todo.find();
    res.send(todo_lists);
}

exports.createTodo =  async function (req, res){
    const {data} = req.body;
    Todo.create({data})
    .then(()=>res.set(201).send('Created Successfully'))
    .catch((err)=>console.log(err))
}

exports.updateTodo =  async function(req,res){
    const {_id, data} = req.body;
    Todo.findByIdAndUpdate(_id,{data})
    .then(()=>res.set(201).send('Created Successfully'))
    .catch((err)=>console.log(err))
}

exports.deleteTodo = async function(req, res){
    const {_id} = req.body;
    Todo.findByIdAndDelete(_id)
    .then(()=>res.set(201).send('Deleted Successfully'))
    .catch((err)=>console.log(err))
}