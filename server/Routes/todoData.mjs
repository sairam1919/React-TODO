import express from 'express'
import { generateResponse } from '../Utils/commonUtils.mjs';

const todoDataRouter = express.Router();

let todoList = [{ name: "Todo1", description: "SampleTodo", createdBy: "Sairam", completed: false }, { name: "Todo2", description: "BasicTodo", createdBy: "Sairam", completed: true }]

todoDataRouter.get('/getTodoList', (req, res) => {
    res.send(generateResponse(todoList, 200, "Data Retrived Successfully"));
});

todoDataRouter.post('/addTodo', (req, res) => {
    todoList = [...todoList, req.body];
    res.send(generateResponse(todoList, 200, "Data Added Successfully"));
});

todoDataRouter.put('/updateTodo', (req, res) => {
    let reqObj = req.body?.todo;
    todoList.map((todo) => {
        if (reqObj.name === todo.name) {
            todo.description = reqObj.description;
            todo.completed = reqObj.completed;
        }
    })
    res.send(generateResponse(todoList, 200, "Data Update Successfully"))
});

todoDataRouter.delete('/deleteTodo', (req, res) => {
    todoList = todoList.filter((data) => data.name !== req.body.name);
    res.send(generateResponse(todoList, 200, "Data Removed Successfully"));
});

export default todoDataRouter;