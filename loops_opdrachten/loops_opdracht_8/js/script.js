//javascript code

// var i;
// function button1() {
//     var myOutput = "";
//     for (i = 1; i <= 26; i++){
//         document.getElementById('output1').innerHTML=myOutput;
//         myOutput+="<br>" + i;
//     }
//     setTimeout(function(){ window.alert('25');}, 500);
//     setTimeout(function(){ 
//         for (i = 27; i <= 51; i++) {
//             document.getElementById('output1').innerHTML=myOutput;
//             myOutput+="<br>" + i;
//         }
//     }, 500)
// }


var i;
function button1(){
    var myOutput = "";
    for (i = 1; i <= 26; i++){
        document.getElementById('output1').innerHTML=myOutput;        
        myOutput+="<br>" + i;
    }
    setTimeout(function(){
        if (i == 27){ 
            window.alert('Het getal 25 is net geen bullseye!');
            for (i = 27; i <= 51; i++) {
                document.getElementById('output1').innerHTML=myOutput;
                myOutput+="<br>" + i;
            }
        }
    }, 250)
}