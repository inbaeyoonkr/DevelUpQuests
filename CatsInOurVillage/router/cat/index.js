const express = require('express');
var router = express.Router();
const catCtrl = require('./index.ctrl');

router.get('/list', catCtrl.list);
router.post('/list/map', catCtrl.listMap);
router.get('/detail/:id', catCtrl.detail);
router.post('/new', catCtrl.write);
router.patch('/update/:id', catCtrl.update);

module.exports = router;
