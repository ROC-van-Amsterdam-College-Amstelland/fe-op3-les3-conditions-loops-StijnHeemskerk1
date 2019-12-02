//javascript code


var myOperator = prompt('+ of -'); 

// function janee() {
//     console.log(myOperator);
// }

function janee() {
    var myNumber1 = parseInt(document.getElementById('input1').value);
    var myNumber2 = parseInt(document.getElementById('input2').value);
 
    if (myOperator == '+') {
        document.getElementById('div1').innerHTML = myNumber1 + myNumber2;
        var myUitkomst = document.getElementById('div1').innerHTML;
        document.getElementById('div1').innerHTML = "De uitkomst van de som " + myNumber1 + myOperator + myNumber2 + " = " + myUitkomst;

    } else if (myOperator == '-') {
        document.getElementById('div1').innerHTML = myNumber1 - myNumber2;
        var myUitkomst = document.getElementById('div1').innerHTML;
        document.getElementById('div1').innerHTML = "De uitkomst van de som " + myNumber1 + myOperator + myNumber2 + " = " + myUitkomst;
    }
} 

