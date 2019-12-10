//javascript code

var i;
function button1(){
    for (i = 0; i <= 100; i++) {
        var vetNum = i%3;
        var coolNum = i%5;
        if (coolNum == 0) {
            var coolGet = i / 5;
            document.getElementById("output1").innerHTML += "<br> COOL " + coolGet * 5;
        } else if (vetNum == 0){
            var vetGet = i / 3;
            document.getElementById('output1').innerHTML += "<br> VET " + vetGet * 3;
        } else {
            document.getElementById('output1').innerHTML += "<br>" + i;
        }
    }
    }