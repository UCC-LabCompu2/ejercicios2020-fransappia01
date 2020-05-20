/**
 * Created by Agus on 6/5/2017.
 */

/**
 * Conversion de unidades, de metros, yardas, pulgadas y pies.
 * @method CambiarUnidades
 * @param {string} id - El id de los inputs de metros, yardas, pies o pulgadas.
 * @param {number} valor - El valor de los inputs de metros, yardas, pies o pulgadas.
 * @return
 */
function CambiarUnidades(id, valor) {
    if (isNaN(valor)){
        alert("Se ingreso un valor invalido");
        document.lasUnidades.unid_metro.value = "";
        document.lasUnidades.unid_pulgada.value = "";
        document.lasUnidades.unid_pie.value = "";
        document.lasUnidades.unid_yarda.value= "";
    }else if (id=="metro"){
        document.lasUnidades.unid_pulgada.value = 39.3701*valor;
        document.lasUnidades.unid_pie.value = 3.28084*valor;
        document.lasUnidades.unid_yarda.value= 1.09361*valor;
    }
}

function convertirGR(id) {
    var grad, rad;
    if (id=="grados"){
        grad=document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;

    }else if (id=="radianes"){
        rad=document.getElementById("radianes").value;
        grad=(rad*180)/ Math.PI
    }
    document.getElementById("grados").value=grad;
    document.getElementById("radianes").value=rad;
}