//javascript code

var saldo = 500;

function rrr() {
    if (saldo == 500) {
        document.getElementById('output1').innerHTML="salaris gestort";
    } else if (saldo > 500) {
        document.getElementById('output1').innerHTML="salaris en een bonus gestort";
    }
}