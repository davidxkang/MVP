const router = require('express').Router();
const controller = require('../controller/controller');

router.get('/scheduleitems', controller.getSchedule);
router.post('/scheduleitems', controller.createScheduleItem);

module.exports = router;