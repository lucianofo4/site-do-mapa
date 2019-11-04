var cidade,resposta,oReq,reqListener,obj,cordinate,
cordinate1;

function pegarcidade(){
    cidade = document.getElementById("digitado").value;
}

function testar (){
    oReq = new XMLHttpRequest();
    oReq.onload = reqListener;
    oReq.open("get","https://api.mapbox.com/geocoding/v5/mapbox.places/"+cidade+".json?access_token=sk.eyJ1Ijoib3J1YW4iLCJhIjoiY2sxYmEwbW53MDJpeDNvcGN4Mm5mYWYwciJ9.wuSyAqEfN8SFraG1v9jE8Q");
    oReq.send();
} 
function reqListener () {
	resposta = this.responseText;  
}
function compiler (){
	obj = (JSON.parse(resposta)	);
    console.log (obj);
    cordinate = obj.features[0].center[1];
	cordinate1 = obj.features[0].center[0];
}