
// カード要素をすべて取得します
const cards = document.querySelectorAll(".card");

// 各カードにクリックイベントリスナーを追加します
cards.forEach(card => {
  card.addEventListener("click", () => {
    const placeName = card.getAttribute("data-name");
    const mapUrl = `file:///C:/Users/y1810/OneDrive/%E3%83%87%E3%82%B9%E3%82%AF%E3%83%88%E3%83%83%E3%83%97/%E6%83%85%E5%A0%B1%E5%9F%BA%E7%A4%8E%E5%AE%9F%E7%BF%92/HTML_%E8%AA%B2%E9%A1%8C/%E8%A6%B3%E5%85%89%E5%9C%B0%E3%83%9E%E3%83%83%E3%83%97.HTML??search=${encodeURIComponent(placeName)}`;
    
    // map.HTMLを開く
    var mapWindow = window.open(mapUrl, "_blank");

    // 一定時間待機してから名前を自動入力
    setTimeout(() => {
      mapWindow.document.getElementById("search-input").value = placeName;
    }, 3000); // 1000ミリ秒（1秒）待機してから名前を入力
  });
});


// Function to toggle the popup for the selected place
function togglePlace(placeName) {
  // Find the place in the 'places' array based on the name
  const place = places.find(place => place.name === placeName);

  // Create the HTML content for the popup
  const popupContent = `
    <h3>${place.name}</h3>
    <img src="${place.photo}" alt="${place.name}" width="200">
    <p>${place.description}</p>
  `;

  // Create a new marker with the given place data
  const markerOptions = {
    icon: place.type === 'attraction' ? attractionIcon : restaurantIcon,
  };
  const marker = L.marker([place.lat, place.lng], markerOptions).addTo(map);
  marker.bindPopup(popupContent);

  // Open the popup immediately after creating the marker
  marker.openPopup();

  // Add the new marker to the markers array
  markers.push(marker);
}




// 観光地のデータ（緯度、経度、名前、説明、写真URL）
var places = [
  {
    lat: 35.0394,
    lng: 135.7291,
    name: '金閣寺',
    description: '金閣寺は、室町時代に建てられた禅宗の寺院です。',
    photo: 'https://example.com/kinkakuji.jpg',
    type: 'attraction'
  },
  {
    lat: 35.0135,
    lng: 135.7856,
    name: '高台寺',
    description: '高台寺は、平安時代に建てられた仏教寺院で、庭園で有名です。',
    photo: 'https://example.com/kodaiji.jpg',
    type: 'attraction'
  },
  {
    lat: 34.9945,
    lng: 135.7850,
    name: '清水寺',
    description: '清水寺は、京都を代表する仏教寺院で、清水の舞台で有名です。',
    photo: 'https://example.com/kiyomizudera.jpg',
    type: 'attraction'
  },
  {
    lat: 34.9884,
    lng: 135.7524,
    name: '西本願寺',
    description: '西本願寺は、浄土宗の総本山であり、京都を代表する寺院です。',
    photo: 'https://example.com/nishihonganji.jpg',
    type: 'attraction'
  },
  {
    lat: 34.9871,
    lng: 135.7522,
    name: '東本願寺',
    description: '東本願寺は、浄土宗の寺院で、西本願寺の東側に位置しています。',
    photo: 'https://example.com/higashihonganji.jpg',
    type: 'attraction'
  },
  {
    lat: 35.0011,
    lng: 135.7106,
    name: '仁和寺',
    description: '仁和寺は、平安時代に建てられた仏教寺院で、美しい庭園が魅力です。',
    photo: 'https://example.com/ninnaji.jpg',
    type: 'attraction'
  },
  {
    lat: 35.0393,
    lng: 135.7290,
    name: '龍安寺',
    description: '龍安寺は、室町時代に建てられた禅宗の寺院で、石庭で有名です。',
    photo: 'https://example.com/ryuanji.jpg',
    type: 'attraction'
  },
  {
    lat: 34.97990669873796, 
    lng: 135.7477589138567,
    name: '東寺',
    description: '東寺は、奈良時代に建てられた仏教寺院で、五重塔が特徴です。',
    photo: 'https://example.com/toji.jpg',
    type: 'attraction'
  },
  {
    lat: 35.0005,
    lng: 135.7819,
    name: '知恩院',
    description: '知恩院は、室町時代に建てられた仏教寺院で、枯山水庭園が美しいです。',
    photo: 'https://example.com/chionin.jpg',
    type: 'attraction'
  },
  {
    lat: 35.00185234390349,
    lng: 135.7594173865084,
    name: '西陣織美術館',
    description: 'すごくきれい。ひまわりの帯とか素晴らしい',
    photo: 'https://example.com/chionin.jpg',
    type: 'attraction'
  },
  {
    lat: 35.0095,
    lng: 135.6706,
    name: '渡月橋',
    description: '嵐山の中心と言っても良いのでは。周辺を歩いてみるだけで半日はつぶれる。ただし人は多い.朝おススメ',
    photo: 'https://example.com/togetsukyo.jpg',
    type: 'attraction'
  },
  {
    lat: 34.986042381255054,
    lng:  135.75877206426065,
    name: '京都駅',
    description: '食べ物とかも美味しいよ。お土産もあるし帰りにはここでショッピングも良いよ',
    photo: 'https://example.com/kyoto_station.jpg',
    type: 'attraction'
  },
  {
    lat: 34.992238,
    lng: 135.751289,
    name: '魚と和の隠れ家 神兵衛',
    description: 'シラス丼が美味しかった',
    photo: 'https://example.com/chionin.jpg',
    type: 'restaurant'
  },
  {
    lat: 35.00429319471009,
    lng: 135.77473946897558,
    name: '鍵善良房',
    description: '和菓子美味しい',
    photo: 'https://example.com/chionin.jpg',
    type: 'restaurant'
  },
  {
    lat: 35.00331130556746,
    lng: 135.77354899999997,
    name: 'ZENCAFE',
    description: '和菓子美味しい。くずもち食べられるお店なんて割と少なくない。なんとなく雰囲気も良さげ',
    photo: 'https://example.com/chionin.jpg',
    type: 'restaurant'
  },
  {
    lat: 35.00421521455343,
    lng: 135.77713188650844,
    name: '祇園いづ重',
    description: 'ボリューム凄い、そして上手い。だがしかし割とする。何かの記念にどうぞ',
    photo: 'https://example.com/chionin.jpg',
    type: 'restaurant'
  },
  {
    lat: 34.98954547366087,
    lng: 135.74142569614168,
    name: '魚問屋ととや',
    description: '上手い、こういう雰囲気の店も好き',
    photo: 'https://example.com/chionin.jpg',
    type: 'restaurant'
  },
];


var map = L.map('map').setView([35.0116, 135.7681], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18,
}).addTo(map);

var attractionIcon = L.icon({
  iconUrl: 'attraction-icon.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

var restaurantIcon = L.icon({
  iconUrl: 'restaurant-icon.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

var markers = [];

places.forEach(function(place) {
  var markerOptions = {
    icon: place.type === 'attraction' ? attractionIcon : restaurantIcon,
  };
  var marker = L.marker([place.lat, place.lng], markerOptions).addTo(map);
  var popupContent = `
    <h3>${place.name}</h3>
    <img src="${place.photo}" alt="${place.name}" width="200">
    <p>${place.description}</p>
  `;
  marker.bindPopup(popupContent);
  marker.type = place.type;
  markers.push(marker);
});

function filterMarkers(type) {
  markers.forEach(function(marker) {
    if (type === 'all' || marker.type === type) {
      marker.addTo(map);
    } else {
      marker.removeFrom(map);
    }
  });
}

function resetMarkers() {
  markers.forEach(function(marker) {
    marker.addTo(map);
  });
}

function showAttractions() {
  filterMarkers('attraction');
}

function showRestaurants() {
  filterMarkers('restaurant');
}

function showAll() {
  resetMarkers();
}

function searchPlaces(query) {
  var filteredMarkers = markers.filter(function(marker) {
    var placeName = marker.getPopup().getContent().match(/<h3>(.*?)<\/h3>/)[1];
    return placeName.toLowerCase().includes(query.toLowerCase());
  });

  markers.forEach(function(marker) {
    if (filteredMarkers.includes(marker)) {
      marker.addTo(map);
    } else {
      marker.removeFrom(map);
    }
  });
}

var searchInput = document.getElementById('search-input');

searchInput.addEventListener('input', function() {
  var query = searchInput.value;
  searchPlaces(query);
});
































