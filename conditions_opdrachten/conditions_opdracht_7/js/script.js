//javascript code


function button1() {
    var kleurNaam = document.getElementById('input1').value;
    // De regel hierboven checked wat er in het input veld 'input1' 
    // voor kleurnaam staat en zet dat als variable neer.
    
    if (kleurNaam == 'groen') {
        document.getElementById('body1').style.backgroundColor='green';
    } 
    // De code hierboven checked of er in het input veld 'groen' staat
    // en veranderd de achtergrond kleur naar groen.
    else if (kleurNaam == 'blauw') {
        document.getElementById('body1').style.backgroundColor='blue';
    } 
    // De code hierboven checked of er in het input veld 'blauw' staat
    // en veranderd de achtergrond kleur naar blauw.
    else if (kleurNaam == 'geel') {
        document.getElementById('body1').style.backgroundColor='yellow';
    } 
    // De code hierboven checked of er in het input veld 'geel' staat
    // en veranderd de achtergrond kleur naar geel.
    else if (kleurNaam == 'rood') {
        document.getElementById('body1').style.backgroundColor='red';
    }
    // De code hierboven checked of er in het input veld 'rood' staat
    // en veranderd de achtergrond kleur naar rood.
}