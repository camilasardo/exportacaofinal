function calculaExport()
{    
    var form = document.frmTeste;
    var valordoacucar = form.valordoacucar.value;
    var quantacucar = form.quantacucar.value;
    var divvalorPagar = document.getElementById("resultado");
    var valorPagar = valordoacucar * quantacucar;
    divvalorPagar.innerHTML = valorPagar;
}