const libPrefix = "SpeedCruzeDatabase"

function saveData(name,value){
  


  HTTP.get( {
    url: "https://heterotrophic-water.000webhostapp.com/save_sc.php?user_tg_id="+name+"&value="+value 
  } )



}


function getData(name){
  HTTP.get( {
    url: "https://heterotrophic-water.000webhostapp.com/get_sc.php?user_tg_id="+name,
 success:libPrefix + 'SaveData'
  } )
}

function onLoading(){
  return JSON.parse(content).value
}
on(libPrefix + 'SaveData', onLoading );

publish({
  saveData: saveData,
  getData: getData     
})
