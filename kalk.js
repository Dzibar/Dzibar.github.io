
function calc() {


let przelPion = null
let przelPoziom = null

dystans = parseInt(document.querySelector('#wybórDystansu').value);
console.log(dystans);
       

    if(dystans == 20){
        przelPion = 2.86
        przelPoziom = 0.26}
    
    else if(dystans == 25){
        przelPion = 3.575
        przelPoziom = 0.325}

    else if(dystans == 35){
        przelPion = 5.005
        przelPoziom = 0.455}

   else if(dystans == 50){
        przelPion = 7.15
        przelPoziom = 0.65}

    else{alert('Wprowadź dystans!')
    throw new Error("Something went badly wrong!")}
    
        console.log(przelPion);
        console.log(przelPoziom);

    
        let UP = parseInt(document.getElementById("up").value);
        let DN = parseInt(document.getElementById("dn").value);
        let  L  = parseInt(document.getElementById("l").value);
        let R  = parseInt(document.getElementById("r").value);

        let poprUp = UP/przelPion;
        let poprDn = DN/przelPion;
        let poprL = L/przelPoziom;
        let poprR = R/przelPoziom;

        poprUp = poprUp.toFixed(1)
        poprDn = poprDn.toFixed(1)
        poprL = poprL.toFixed(0)
        poprR = poprR.toFixed(0)

        document.getElementById("poprUp").innerHTML = poprUp;
        document.getElementById("poprDn").innerHTML = poprDn;
        document.getElementById("poprL").innerHTML = poprL;
        document.getElementById("poprR").innerHTML = poprR;

    }


    function wyczysc(){

        document.getElementById("poprUp").innerHTML = '0';
        document.getElementById("poprDn").innerHTML = '0';
        document.getElementById("poprL").innerHTML = '0';
        document.getElementById("poprR").innerHTML = '0';


        var getValue= document.getElementById("up");
        if (getValue.value !="") {
            getValue.value = "";
        }

        var getValue= document.getElementById("dn");
        if (getValue.value !="") {
            getValue.value = "";
        }

        var getValue= document.getElementById("l");
        if (getValue.value !="") {
            getValue.value = "";
        }

        var getValue= document.getElementById("r");
        if (getValue.value !="") {
            getValue.value = "";
        }

     }