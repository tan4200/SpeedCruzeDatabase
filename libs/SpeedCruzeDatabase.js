const libPrefix = "SpeedCruzeDatabase_";

function saveData(name, value) {
  HTTP.get({
    url: "https://heterotrophic-water.000webhostapp.com/save_sc.php?user_tg_id=" + name + "&value=" + value,
      headers: {
    'Content-Type': 'application/json'}
  });
  return "success";
}

function getData(name) {
  HTTP.get({
    url: "https://heterotrophic-water.000webhostapp.com/get_sc.php?user_tg_id=" + name,
    success: libPrefix + 'onDataReceived',
    headers: {
    'Content-Type': 'application/json'}
  });
}

function onDataReceived() {
  var data = JSON.parse(content);
  return JSON.stringify(content);

}

publish({
  saveData: saveData,
  getData: getData
});

on(libPrefix + 'onDataReceived', onDataReceived);
