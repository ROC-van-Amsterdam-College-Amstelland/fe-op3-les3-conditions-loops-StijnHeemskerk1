//javascript code

var i;

function button1() {
    var myOutput = "";
    for (i = 1; i <= 26; i++){
        document.getElementById('output1').innerHTML=myOutput;
        myOutput+="<br>" + i;
    }
    setTimeout(function(){ window.alert('25');}, 500);
    setTimeout(function(){ 
        for (i = 27; i <= 51; i++) {
            document.getElementById('output1').innerHTML=myOutput;
            myOutput+="<br>" + i;
        }
    }, 500)
}