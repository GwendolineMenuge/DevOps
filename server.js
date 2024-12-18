const express = require('express')

const app = express();
let task = []
app.get('/', (req, res) => {
    res.send({tasks});
})

app.post('/add-task', (req, res)=>{
    const newTask = req.body.task;
    if (task){
        task.push(task);
    }
})

const PORT = 3000
app.listen(PORT, () => {
    console.log('Serveur lancé');
})