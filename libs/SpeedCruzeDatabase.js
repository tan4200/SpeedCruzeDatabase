const libPrefix = "SpeedCruzeDatabase_";

function saveData(name, value) {
  HTTP.get({
    url: "https://heterotrophic-water.000webhostapp.com/save_sc.php?user_tg_id=" + name + "&value=" + value
  });
}

function getData(name) {
  HTTP.get({
    url: "https://heterotrophic-water.000webhostapp.com/get_sc.php?user_tg_id=" + name,
    success: libPrefix + 'onDataReceived'
  });
}

function onDataReceived() {
  var data = JSON.parse(content);
  return data.value;
}

publish({
  saveData: saveData,
  getData: getData
});

on(libPrefix + 'onDataReceived', onDataReceived);
