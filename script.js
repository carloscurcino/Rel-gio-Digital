const hora = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mins = dateToday.getMinutes();
    let secs = dateToday.getSeconds();

    if(hr<10) hr= '0'+hr;
    if(mins<10) mins= '0'+mins;
    if(secs<10) secs= '0'+secs;

    hora.textContent = hr;
    minutos.textContent = mins;
    segundos.textContent = secs;
})