const express = require('express');
const usercontroller = require('../controller/usercontroller');
const schedular_controller = require('../controller/schedular_controller');
const router = express.Router();

router.post('/api/registration',usercontroller.registration)
router.post('/api/login',usercontroller.login)

router.post('/api/schedule_interview',schedular_controller.addSlots)
router.get('/api/schedule_interview',schedular_controller.get_slots)

module.exports=router