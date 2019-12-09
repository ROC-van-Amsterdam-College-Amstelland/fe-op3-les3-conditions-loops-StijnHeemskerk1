//javascript code
function myFunction() {
    var myOutput = "";
for (i = 1; i <= 50; i++){
    if (i == 20){
        myOutput+=i + "dit zijn mooie getallen <br>";
    }
    else if (i == 40){
        myOutput+=i + "dit zijn mooie getallen <br>";
    }
    else {
        myOutput+=i + "<br>";
    }
}
document.getElementById('ja').innerHTML=myOutput;
}

