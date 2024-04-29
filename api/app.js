const express = require("express");
const app = express();

const { mongoose } = require('./db/mongoose')
const bodyParser = require('body-parser')

const { List, Task } = require('./db/models')

//load middleware
app.use(bodyParser.json());

app.get('/lists', (req, res) => {
    //return array of all lists in the db
    List.find({}).then((lists) => {
        res.send(lists);
    })
});

app.post('/lists', (req, res) => {
    //create a new list and return list document back to user
    //list info passed in via JSON request body
    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        //full list doc is returned
        res.send(listDoc);
    })
});

app.patch('/lists/:id', (req, res) => {
    //want to update the specific list with new values specified in JSON body
    List.findOneAndUpdate({ _id: req.params.id}, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    })
});

app.delete('/lists/:id', (req, res) => {
    //want to delete specified list 
    List.findOneAndDelete({
        _id: req.params.id
    }).then((removedListDoc) => {
        res.send(removedListDoc);
    })
})

app.get('/lists/:listId/tasks', (req, res) => {
    //we want to return tasks that belong to a specific list
    Task.find({
        _listId: req.params.listId
    }).then((tasks) => {
        res.send(tasks);
    })
})

app.post('/lists/:listId/tasks', (req, res) => {
    //create a new task in a list specified by ListId
    let newTask = new Task({
        title: req.body.title,
        _listId: req.params.listId
    });
    newTask.save().then((newTaskDoc) => {
        res.send(newTaskDoc);
    })
})

app.patch('/lists/:listId/tasks/:taskId', (req, res) => {
    //update existing task specified by task id
    Task.findOneAndUpdate({
        _id: req.params.taskId,
        _listId: req.params.listId
    }, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    })
})

app.delete('/lists/:listId/tasks/:taskId', (req, res) =>{
    Task.findOneAndDelete({
        _id: req.params.taskId,
        _listId: req.params.listId
    }).then((removedTaskDoc) => {
        res.send(removedTaskDoc);
    })
});

app.get('/lists/:listId/tasks/:taskId', (req, res) => {
    //come back to this!
    Task.findOne({
        _id: req.params.taskId, 
        _listId: req.params.listId
    }).then((task) => {
        res.send(task);
    })
})

app.listen(3000, () =>
console.log("Server is listening on port 3000"
));