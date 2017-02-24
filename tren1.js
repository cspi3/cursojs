var trenes_status_service=["OK","OK","OK","NOK","NOK","NOK","NOK","NOK"];

//for(i=0;i<length.trenes_status_service;i++)
//if(trenes[i]=="OK") console.log("El tren número"+i+"esta funcionando");



function logger(element, index, array) {
    if(element=="OK") console.log("El tren número "+index+" esta funcionando");
    else console.log("El tren número "+index+" no esta funcionando");

}
trenes_status_service.forEach(logger);
