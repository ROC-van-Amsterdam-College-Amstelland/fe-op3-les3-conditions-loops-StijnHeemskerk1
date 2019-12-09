//javascript code
var i;

function button1(){
    var myOutput = "";
    for (i = 0; i <= 1000; i = i + 10){
        console.log(i);
        myOutput+=i + "<br>";
        document.getElementById('output1').innerHTML=myOutput;
        }
    }

