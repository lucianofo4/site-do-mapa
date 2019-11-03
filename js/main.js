var cidade,resposta,oReq,reqListener;

function pegarcidade(){
    cidade = document.getElementById("digitado").value;
}

function testar (){
    oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get","https://api.mapbox.com/geocoding/v5/mapbox.places/"+cidade+".json?access_token=sk.eyJ1Ijoib3J1YW4iLCJhIjoiY2sxYmEwbW53MDJpeDNvcGN4Mm5mYWYwciJ9.wuSyAqEfN8SFraG1v9jE8Q");
    oReq.send();
} 
    