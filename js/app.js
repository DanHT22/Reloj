function hora(){
    let fecha = new Date();
    var horaSistema = fecha.toLocaleTimeString();
    console.log(horaSistema);
    return horaSistema;
}
var horaActualizada = Date.parse(horaActualizada);//toLocaleTimeString(horaActualizada(setInterval(hora, 3000)));


var miReloj = document.getElementById('reloj')
miReloj.innerHTML=horaActualizada;
console.log(typeof(horaActualizada));