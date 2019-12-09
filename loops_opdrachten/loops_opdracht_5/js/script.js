//javascript code
var i;





function button1(){
var myOutput = "";
for ( i=0 ; i<=20 ; i+=2 ) {
    document.getElementById('output1').innerHTML=myOutput;
    myOutput+=i + 2 +"<br>";
}
for (i=1; i <= 20; i++){
    if (i % 2 > 0){
        console.log(i)
    }
}
}



