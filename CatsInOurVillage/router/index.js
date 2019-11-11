var express = require('express');
var router = express.Router();
const app = express();
const cat = require('./cat/index');
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

app.use('/cat', cat);

module.exports = app;

/**
 * var express = require('express');
var router = express.Router();
ß
router.get('/', (req, res, next) => {
  res.render('index', {
    showList: true,
    list: [
      {
        id: 1,
        coords: {
          lat: 37.455751,
          lng: 127.059144
        },
        title: '치즈냥이 세 마리 살고 있어욤',
        food: true,
        water: true,
        shelter: true,
        last_update_time: '2019-10-25 15:34:22',
        special_note: '중성화는 아직 하지 않았네요'
      },
      {
        id: 2,
        coords: {
          lat: 37.45629607317853,
          lng: 127.06057093519598
        },
        title: '치즈냥이 세 마리',
        food: true,
        water: true,
        shelter: true,
        last_update_time: '2019-10-25 15:34:22',
        special_note: '중성화는 아직 하지 않았네요'
      },
      {
        id: 3,
        coords: {
          lat: 37.455751,
          lng: 127.059144
        },
        title: '치즈냥이 세 마리',
        food: true,
        water: true,
        shelter: true,
        last_update_time: '2019-10-25 15:34:22',
        special_note: '중성화는 아직 하지 않았네요'
      },
      {
        id: 4,
        coords: {
          lat: 37.45629607317853,
          lng: 127.06057093519598
        },
        title: '치즈냥이 세 마리',
        food: true,
        water: true,
        shelter: true,
        last_update_time: '2019-10-25 15:34:22',
        special_note: '중성화는 아직 하지 않았네요'
      },
      {
        id: 5,
        coords: {
          lat: 37.455751,
          lng: 127.059144
        },
        title: '치즈냥이 세 마리',
        food: true,
        water: true,
        shelter: true,
        last_update_time: '2019-10-25 15:34:22',
        special_note: '중성화는 아직 하지 않았네요'
      },
      {
        id: 6,
        coords: {
          lat: 37.45629607317853,
          lng: 127.06057093519598
        },
        title: '치즈냥이 세 마리',
        food: true,
        water: true,
        shelter: true,
        last_update_time: '2019-10-25 15:34:22',
        special_note: '중성화는 아직 하지 않았네요'
      },
      {
        id: 7,
        coords: {
          lat: 37.455751,
          lng: 127.059144
        },
        title: '치즈냥이 세 마리',
        food: true,
        water: true,
        shelter: true,
        last_update_time: '2019-10-25 15:34:22',
        special_note: '중성화는 아직 하지 않았네요'
      },
      {
        id: 8,
        coords: {
          lat: 37.45629607317853,
          lng: 127.06057093519598
        },
        title: '치즈냥이 세 마리dldldddldlldldldlldldlldl',
        food: true,
        water: true,
        shelter: true,
        last_update_time: '2019-10-25 15:34:22',
        special_note: '중성화는 아직 하지 않았네요'
      },
      {
        id: 9,
        coords: {
          lat: 37.455751,
          lng: 127.059144
        },
        title: '치즈냥이 세 마리',
        food: true,
        water: true,
        shelter: true,
        last_update_time: '2019-10-25 15:34:22',
        special_note: '중성화는 아직 하지 않았네요'
      },
      {
        id: 10,
        coords: {
          lat: 37.45629607317853,
          lng: 127.06057093519598
        },
        title: '치즈냥이 세 마리',
        food: true,
        water: true,
        shelter: true,
        last_update_time: '2019-10-25 15:34:22',
        special_note: '중성화는 아직 하지 않았네요'
      }
    ]
  });
});

router.get('/detail/:id', (req, res) => {
  res.render('index', {
    showList: false,
    data: {
      id: 1,
      coords: {
        lat: 37.455751,
        lng: 127.059144
      },
      title: '치즈냥이 세 마리 살고 있어욤',
      food: true,
      water: true,
      shelter: true,
      last_update_time: '2019-10-25 15:34:22',
      special_note: '중성화는 아직 하지 않았네요'
    }
  });
});

module.exports = router;

 */
