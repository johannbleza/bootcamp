const express = require("express");
const router = express.Router();

const taskControllers = require("./../controllers/taskControllers")

router.post("/", (req, res) => {
    taskControllers.createTask(req.body).then(result => res.send(result))
})

//61978d7d525cced92df49f2f
router.get("/:id", (req, res) => {
    taskControllers.getById(req.params.id).then( result => res.send(result))

})

router.put("/update-task", (req, res) => {
    taskControllers.updateTask(req.body.name).then(result => res.send(result))
})

router.get("/", (req, res) => {
    taskControllers.getAllTasks().then( result => res.send(result))
})

module.exports = router;