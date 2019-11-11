var markers = [];
var map;
var add_on = false;

function initMap() {
  console.log('initmap');
  console.log(markers);

  //showList();
  // Map Options
  var options = {
    zoom: 18,
    center: { lat: 37.455751, lng: 127.059144 }
  };

  // New Map
  map = new google.maps.Map(document.getElementById('map'), options);

  // Listen for click on map
  google.maps.event.addListener(map, 'click', function(event) {
    if (add_on) {
      add_on = false;
      var coords = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      };
      // 모달 창 띄우고
      // When the user clicks the button, open the modal

      openModal();

      add_btn.onclick = function() {
        let title = document.getElementById('modal-content-title').value;
        let food = document.getElementById('modal-content-food').checked;
        let water = document.getElementById('modal-content-water').checked;
        let shelter = document.getElementById('modal-content-shelter').checked;
        let note = document.getElementById('modal-content-note').value;

        const newMarker = {
          coords: coords,
          title,
          food,
          water,
          shelter,
          special_note: note
        };

        axios
          .post('http://127.0.0.1:5500/cat/new', newMarker)
          .then(res => {
            console.log(res);
          })
          .catch(e => console.error(e));

        modal.style.display = 'none';
        addMarker(newMarker);

        title.value = '';
        food.checked = false;
        water.checked = false;
        shelter.checked = false;
        note.value = '';
      };
    } else {
      return;
    }
  });

  // 맵을 움직여서 센터의 좌표가 바뀔 때마다 northEast와 southWest를 서버에 전송
  // 전송 후 해당 맵에 대한 리스트를 다시 가져 옴.
  google.maps.event.addListener(map, 'dragend', function() {
    markers = [];
    var bounds = map.getBounds();
    var northEast = {
      lat: bounds.getNorthEast().lat(),
      lng: bounds.getNorthEast().lng()
    };
    var southWest = {
      lat: bounds.getSouthWest().lat(),
      lng: bounds.getSouthWest().lng()
    };

    console.log({ northEast, southWest });

    // Map Markers 업데이트
    axios
      .post('http://127.0.0.1:5500/cat/list/map/', {
        northEast,
        southWest
      })
      .then(res => {
        for (var i = 0; i < res.data.length; i++) {
          var item = {
            coords: {
              lat: res.data[i].lat,
              lng: res.data[i].lng
            },
            title: res.data[i].title,
            food: res.data[i].food,
            water: res.data[i].water,
            shelter: res.data[i].shelter,
            special_note: res.data[i].special_note,
            updated_at: res.data[i].updated_at
          };
          markers.push(item);
          addMarker(item);
        }
      })
      .catch(e => {
        console.error(e);
      });

    // List 업데이트
    axios
      .get('http://127.0.0.1:5500/cat/list/')
      .then(res => {
        console.log(res.status);
      })
      .catch(e => console.log(e));
  });

  /*
  // Loop through markers
  for (var i = 0; i < markers.length; i++) {
    addMarker(markers[i]);
  }
  */

  // Add Marker Function
  function addMarker(props) {
    var marker = new google.maps.Marker({
      position: props.coords,
      map: map,
      icon: '/images/icons8-cat-24.png'
    });

    // Check content
    if (props.title) {
      var infoWindow = new google.maps.InfoWindow({
        content: props.title
      });

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });
    }
  }

  // Create the DIV to hold the control and call the CenterControl()
  // constructor passing in this DIV.
  var addControlDiv = document.createElement('div');
  var addControl = new AddControl(addControlDiv, map);

  addControlDiv.index = 1;
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(addControlDiv);
}

/**
 * 새로운 고양이들의 위치를 추가하기 위한 컨트롤이다.
 */
function AddControl(controlDiv, map) {
  // Set CSS for the control border.
  var controlUI = document.createElement('div');
  controlUI.style.backgroundColor = '#fff';
  controlUI.style.border = '2px solid #fff';
  controlUI.style.borderRadius = '3px';
  controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
  controlUI.style.cursor = 'pointer';
  controlUI.style.marginBottom = '22px';
  controlUI.style.textAlign = 'center';
  controlUI.title = 'Click to add new cats location';
  controlDiv.appendChild(controlUI);

  // Set CSS for the control interior.
  var controlText = document.createElement('div');
  controlText.style.color = 'rgb(25,25,25)';
  controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
  controlText.style.fontSize = '16px';
  controlText.style.lineHeight = '38px';
  controlText.style.paddingLeft = '5px';
  controlText.style.paddingRight = '5px';
  controlText.innerHTML =
    '🐱새로운 고양이를 발견했으면 이 버튼을 누른 뒤 위치를 클릭해주세요';
  controlUI.appendChild(controlText);

  // Setup the click event listeners: simply set the map to Chicago.
  controlUI.addEventListener('click', function() {
    add_on = true;
  });
}

// 모달 ---------------------------------------------------------------------

// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var close_btn = document.getElementsByClassName('modal-close')[0];
// Get the <span> element that closes the modal
var add_btn = document.getElementsByClassName('modal-add')[0];

// When the user clicks on <span> (x), close the modal
close_btn.onclick = function() {
  modal.style.display = 'none';
};
add_btn.onclick = function() {
  modal.style.display = 'none';
};

const openModal = () => {
  modal.style.display = 'block';
};

// 업데이트 모달 ---------------------------------------------------------------
var updateModal = document.getElementById('updateModal');
var update_close_btn = document.getElementsByClassName('update-modal-close')[0];
var update_add_btn = document.getElementsByClassName('update-modal-add')[0];

update_close_btn.onclick = function() {
  updateModal.style.display = 'none';
};

const openUpdateModal = () => {
  updateModal.style.display = 'block';
};

// 개별 데이터 접근하기
function getDetail(id) {
  axios
    .get('http://127.0.0.1:5500/cat/detail/' + id)
    .then(res => console.log('fuck you'))
    .catch(e => console.log(typeof id));

  openUpdateModal();
}
