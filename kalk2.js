
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
    
    let wPion = parseInt(document.getElementById("wartPion").value);
    let wPoziom = parseInt(document.getElementById("wartPoziom").value);

    console.log(wPion);
    console.log(wPoziom);

    let kierunek = document.getElementById("kPion").value;
    let elewacja = document.getElementById("elew").value;

    console.log(kierunek);
    console.log(elewacja);

    var poprKier = wPoziom/przelPoziom;
    var poprElew = wPion/przelPion;

        poprElew = poprElew.toFixed(1)
        poprKier = poprKier.toFixed(0)

    console.log(poprElew);
    console.log(poprKier);

    var dokrPrzez = "Dokręć przeziernik o "
    var wykrPrzez = "Wykręć przeziernik o "
    var odpKier1 = " klików (kręć w prawo, w kierunku lufy)"
    var odpKier2 = " klików (kręć w lewo, w kierunku kolby)"


    if (kierunek == "prawo"){

        document.getElementById("1").innerHTML = `${dokrPrzez}${poprKier}${odpKier1}`;
        } 

    else if (kierunek == "lewo"){

         document.getElementById("1").innerHTML = `${wykrPrzez}${poprKier}${odpKier2}`;
    } 


    var dokrMuszke = "Dokręć muszkę o "
    var wykrMuszke = "Wykręć muszkę o "
    var odpElew1 = " obrotów           (kręć w prawo, zgodnie z ruchem wskazówek)"
    var odpElew2 = " obrotów           (kręć w lewo, przeciwnie do ruchu wskazówek)"

    if (elewacja == "góra"){

        document.getElementById("2").innerHTML = `${dokrMuszke}${poprElew}${odpElew1}`;
        } 

    else if (elewacja == "dół"){

         document.getElementById("2").innerHTML = `${wykrMuszke}${poprElew}${odpElew2}`;
    } 

}
    function wyczysc(){

        document.getElementById("wartPoziom").innerHTML = '0';
        document.getElementById("wartPion").innerHTML = '0';
        document.getElementById("1").innerHTML = '-';
        document.getElementById("2").innerHTML = '-';

        document.getElementById("kPion").selectedIndex = 0;
        document.getElementById("elew").selectedIndex = 0;

        var getValue= document.getElementById("wartPoziom");
        if (getValue.value !="") {
            getValue.value = "";
        }

        var getValue= document.getElementById("wartPion");
        if (getValue.value !="") {
            getValue.value = "";
        }
    }


      /* 
       
    function wyczysc(){


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
*/
          
