//javascript code

var i;
function button1(){
    setTimeout(function(){for (i = 1; i <= 5; i++){
        console.log(i);
    }}, 500)
    setTimeout(function(){if (i == 6){
        document.getElementById('output1').innerHTML="Het einde is bereikt";
    }}, 1000)
    setTimeout(function(){for (i = 5; i >= 1; i = i - 1){
        console.log(i)
    }}, 2000)
    setTimeout(function(){if (i == 0) {
        document.getElementById('output2').innerHTML="Het begin is het begin";
    }}, 2500)
}