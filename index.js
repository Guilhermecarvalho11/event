const segundo = 1000;
const minuto = segundo * 60;
const hora = minuto * 60;
const dia = hora * 24;

function contarDias(){
    let dateInc = new Date(document.mainForm.dataInc.value);
    let dateEnd = new Date(document.mainForm.dataFim.value);

    let dif = dateEnd.getTime() - dateInc.getTime();

    document.getElementById('days').innerText = Math.floor(dif / dia)
}

