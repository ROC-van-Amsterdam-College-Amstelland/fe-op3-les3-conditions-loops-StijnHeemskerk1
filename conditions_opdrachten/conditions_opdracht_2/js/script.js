//javascript code

var saldo = 25

function button1() {
    if (saldo == 25) {
        document.getElementById('output1').innerHTML="Je hebt voldoende saldo om € 25 op te nemen.";
    } else {
        document.getElementById('output1').innerHTML="Sorry, je hebt te weinig saldo!";
    }
}