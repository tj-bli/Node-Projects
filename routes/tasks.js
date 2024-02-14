const express = require('express')
const asyncWrapper = require('../middleware/async')
const router = express.Router();
const { getAlltasks,
        getTask, 
       createTask, 
       deleteTask, 
       updateTask} = require('../controller/tasks')

router.route('/').get(getAlltasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router