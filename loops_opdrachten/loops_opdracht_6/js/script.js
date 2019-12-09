//javascript code

var i;

function button1(){
    var myOutput = "";
var maxNum = document.getElementById('input1').value;
for (i = 1; i <= maxNum; i++) {
    document.getElementById('output1').innerHTML=myOutput;
    myOutput+=i + '<br>';
    console.log(i);

}
}