import './style.css';


function kep(){
    let cicaskep = document.getElementById('urlbemenet').value;
    document.getElementById('kephelye').src = "../src" + cicaskep;
}

function szelssegallit(){
    let szelesseg = document.getElementById('szeles').value;
    
}

function vastagsagallit(){
    let vastagsag = document.getElementById('vastag').value;

}

function szinallit(){
    let szinesseg = document.getElementById('szin').value;

}

function init(){
    document.getElementById('kephelye').addEventListener('change', kep);
    document.getElementById('kephelye').addEventListener('input', szelssegallit);
    document.getElementById('kephelye').addEventListener('input', szinallit);
}

document.addEventListener('DOMContentLoaded', init);