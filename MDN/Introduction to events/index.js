btn = document.querySelector('button');

function random(number){
    return Math.floor(Math.random()*(number+1));
}

btn.addEventListener('click', function(){
    const rndcol = `rgb(${random(255)},${random(255)},${random(255)})`;
    document.body.style.backgroundColor = rndcol;
})