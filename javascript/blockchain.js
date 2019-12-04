var enderecoContrato = "0xfde9bedbbb4dd1922326171eb868511d18767d37";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);

var resultadoParaRegistro;

function calculaExport()
{    
    var form = document.frmTeste;
    var valordoacucar = form.valordoacucar.value;
    var quantacucar = form.quantacucar.value;
    var divvalorPagar = document.getElementById("resultado");
    var valorPagar = valordoacucar * quantacucar;
    resultadoParaRegistro = valorPagar;
    divvalorPagar.innerHTML = valorPagar;
}

function registrarResultado() {
    var caixaStatusTx = document.getElementById("caixaStatusTx1");
        contrato.registrarValor(resultadoParaRegistro)
        .then( (transacao) => {
            console.log("registrarMudancaStatus - Transacao ", transacao);   
            caixaStatusTx.innerHTML = "Transação enviada. Aguardando processamento...";
            transacao.wait()
            .then( (resultado) => {
            caixaStatusTx.innerHTML = "Transação realizada.";
            })        
            .catch( (err) => {
                console.error("registrarMudancaStatus - Aguardando tx ser minerada");
                console.error(err);
                caixaStatusTx.innerHTML = "Algo saiu errado: " + err.message;
            })
        })
        .catch( (err) => {
            console.error("registrarMudancaStatus");
            console.error(err);
            caixaStatusTx.innerHTML = "Algo saiu errado: " + err.message;
        })
}

function viewComprador() {
    var status;
    var campoComprador = document.getElementById("campoComprador");     
    contrato.comprador()
    .then( (resultado) => {
        campoComprador.innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        campoComprador.innerHTML = err;
    });
}

function viewVendedor() {
    var status;
    var campoVendedor = document.getElementById("campoVendedor");     
    contrato.vendedor()
    .then( (resultado) => {
        campoVendedor.innerHTML = resultado;
    })
    .catch( (err) => {
        console.error(err);
        campoVendedor.innerHTML = err;
    });
}

