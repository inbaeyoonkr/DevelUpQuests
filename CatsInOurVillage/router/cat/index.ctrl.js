var models = require('../../models');
var Sequelize = require('sequelize');
const { or, and, gt, lt } = Sequelize.Op;

var markers = [];

/*coords:{
    northEast:, //상단
    southWest: //하단
}
*/
exports.listMap = (req, res) => {
  var obj = JSON.parse(JSON.stringify(req.body));

  var northEast_lat = parseFloat(obj.northEast.lat);
  var northEast_lng = parseFloat(obj.northEast.lng);
  var southWest_lat = parseFloat(obj.southWest.lat);
  var southWest_lng = parseFloat(obj.southWest.lng);

  models.Cat.findAll({
    where: {
      [and]: [
        { lng: { [lt]: northEast_lng } },
        { lng: { [gt]: southWest_lng } },
        { lat: { [lt]: northEast_lat } },
        { lat: { [gt]: southWest_lat } }
      ]
    }
  })
    .then(result => {
      markers = [];
      for (let i = 0; i < result.length; i++) {
        markers.push(JSON.parse(JSON.stringify(result[i])));
        markers[i].updated_at = getLocalDate(markers[i].updated_at);
      }
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.list = (req, res) => {
  console.log('Hello', markers);

  res.render('index', {
    list: markers
  });
};

exports.detail = (req, res) => {
  console.log('detail', req.params.id);
  const { id } = req.params.id;
  models.Cat.findOne({
    where: {
      id: id
    }
  })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.log(err);
    });
};

exports.write = (req, res) => {
  console.log(JSON.stringify(req.body));
  var obj = JSON.parse(JSON.stringify(req.body));
  console.log(typeof obj.title);
  models.Cat.create({
    lat: obj.coords.lat,
    lng: obj.coords.lng,
    title: obj.title,
    food: obj.food,
    water: obj.water,
    shelter: obj.shelter,
    special_note: obj.special_note
  })
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
};
exports.update = (req, res) => {
  var obj = JSON.parse(JSON.stringify(req.body));

  models.Cat.update(
    {
      lat: obj.coords.lat,
      lng: obj.coords.lng,
      title: obj.title,
      food: obj.food,
      water: obj.water,
      shelter: obj.shelter,
      special_note: obj.special_note
    },
    { where: { id: req.params.id } }
  )
    .then(result => {
      if (result[0] === 0) {
        //201 return
        res.json(result + 'nodata');
      } else {
        res.json(result + 'update OK');
      }
    })
    .catch(error => {
      console.log(error);
    });
};

function getLocalDate(time) {
  var jsDate = new Date(Date.parse(time));
  return jsDate.toLocaleDateString() + ' ' + jsDate.toLocaleTimeString();
}
