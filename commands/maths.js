/**
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function randomNumb(pNumber){
    let RandomNumber = getRandomArbitrary(1,pNumber);
    let RoundRandom = Math.floor(RandomNumber);
    return RoundRandom;
}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


  
function coinFlip(){
    let Random = getRandomInt(2);
    let Value = "";
    if(Random == 1){
        Value = "Pile";
    }
    if(Random == 2 ){
        Value = "Face";
    }

    let Value2 = ["Pile", "Face"];
        let ValueIndex = Math.round(Math.random() * Value2.length);
        let resultat = Value2[ValueIndex];
        return resultat;
       
}
*/