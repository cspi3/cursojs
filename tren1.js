var trenes=[
["OK","D","NF"],
["OK","D","NF"],
["OK","D","NF"],
["OK","N","F"],
["NOK","D","NF"],
["NOK","D","NF"],
["NOK","D","NF"],
["NOK","D","NF"],
["OK","D","NF"],
["OK","D","NF"],
["OK","D","NF"],
["OK","D","NF"],
["OK","D","NF"],
];



function logger(element, index, array) {
    if(element[0]=="OK") console.log("El tren número "+(index+1)+" esta funcionando");
    else console.log("El tren número "+index+" no esta funcionando");
    if(element[1]=="N") console.log("El tren número "+(index+1)+" es nocturno");
    if(element[2]=="F") console.log("El tren número "+(index+1)+" es fiestero");

}



trenes.forEach(logger);
