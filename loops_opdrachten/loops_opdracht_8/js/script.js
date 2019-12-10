//javascript code

var i;


function button1(){
    var getal1 ="";
    for (i = 0; i <= 51; i++){
        document.getElementById('output1').innerHTML=getal1;
        getal1+="<br>" + i;
        if (i == 25){
            window.alert("Het getal 25 is net geen bullseye!");
        } 
    }
}


// function button1(){
//     var getal1 ="";
//     setTimeout(function () {
//         for (i = 0; i <= 50; i++) {
//             document.getElementById('output1').innerHTML=getal1;
//             getal1+="<br>" + i;
//             }   
//         }, 3000); 
// }