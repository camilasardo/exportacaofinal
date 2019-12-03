var enderecoContrato = "0x9e7e9053b5974ae4c68467df6907d71928456e0e";
var provedor = new ethers.providers.Web3Provider(web3.currentProvider);
ethereum.enable();
var signatario = provedor.getSigner();
var contrato = new ethers.Contract(enderecoContrato, abiContrato, signatario);

function registrarVendedor() {
    var textoCampo = document.frmTeste.nomeVendedor.value;
    var caixaStatusTx = document.getElementById("caixaStatusTx1");
        contrato.mudaStatusPagamento(textoCampo)
        .then( (transacao) => {
            console.log("registrarMudancaStatus - Transacao ", transacao);   
            caixaStatusTx.innerHTML = "Transação enviada. Aguardando processamento...";
            transacao.wait()
            .then( (resultado) => {
                buscaStatusContrato();
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

function registrarVendedor() {
    var textoCampo = document.frmStatus.txtVendedor.value;
    var nomeVendedor = document.getElementById("nomeVendedor");
    if (textoCampo.length === 8) {
        nomeVendedor.innerHTML = "Enviando transação...";
        contrato.registrarVendedor(textoCampo)
        .then( (transacao) => {
            console.log("registrarVendedor" - Transacao ", transacao);   
            nomeVendedor.innerHTML = "Transação enviada. Aguardando processamento...";
            transacao.wait()
            .then( (resultado) => {
                buscaStatusContrato();
                nomeVendedor.innerHTML = "Transação realizada.";
            })        
            .catch( (err) => {
                console.error("registrarVendedor" - Aguardando tx ser minerada");
                console.error(err);
                nomeVendedor.innerHTML = "Algo saiu errado: " + err.message;
            })
        })
        .catch( (err) => {
            console.error("registrarVendedor");
            console.error(err);
            nomeVendedor.innerHTML = "Algo saiu errado: " + err.message;
        })
    }
}

function registrarComprador() {
    var textoCampo = document.frmStatus.txtComprador.value;
    var nomeComprador = document.getElementById("nomeComprador");
    if (textoCampo.length === 8) {
        nomeComprador.innerHTML = "Enviando transação...";
        contrato.registrarComprador(textoCampo)
        .then( (transacao) => {
            console.log("registrarComprador" - Transacao ", transacao);   
            nomeComprador.innerHTML = "Transação enviada. Aguardando processamento...";
            transacao.wait()
            .then( (resultado) => {
                buscaStatusContrato();
                nomeComprador.innerHTML = "Transação realizada.";
            })        
            .catch( (err) => {
                console.error("registrarComprador" - Aguardando tx ser minerada");
                console.error(err);
                nomeComprador.innerHTML = "Algo saiu errado: " + err.message;
            })
        })
        .catch( (err) => {
            console.error("registrarComprador");
            console.error(err);
            nomeComprador.innerHTML = "Algo saiu errado: " + err.message;
        })
    }
}

function registrarValorAcucar() {
    var textoCampo = document.frmStatus.txtvalordoacucar.value;
    var valordoacucar = document.getElementById("valordoacucar");
    if (textoCampo.length === 8) {
        valordoacucar.innerHTML = "Enviando transação...";
        contrato.registrarValorAcucar(textoCampo)
        .then( (transacao) => {
            console.log("registrarValorAcucar" - Transacao ", transacao);   
            valordoacucar.innerHTML = "Transação enviada. Aguardando processamento...";
            transacao.wait()
            .then( (resultado) => {
                buscaStatusContrato();
                valordoacucar.innerHTML = "Transação realizada.";
            })        
            .catch( (err) => {
                console.error("registrarValorAcucar" - Aguardando tx ser minerada");
                console.error(err);
                valordoacucar.innerHTML = "Algo saiu errado: " + err.message;
            })
        })
        .catch( (err) => {
            console.error("registrarValorAcucar");
            console.error(err);
            valordoacucar.innerHTML = "Algo saiu errado: " + err.message;
        })
    }
}

function registrarQuantAcucar() {
    var textoCampo = document.frmStatus.txtquantacucar.value;
    var quantacucar = document.getElementById("quantacucar");
    if (textoCampo.length === 8) {
        quantacucar.innerHTML = "Enviando transação...";
        contrato.registrarQuantAcucar(textoCampo)
        .then( (transacao) => {
            console.log("registrarQuantAcucar" - Transacao ", transacao);   
            quantacucar.innerHTML = "Transação enviada. Aguardando processamento...";
            transacao.wait()
            .then( (resultado) => {
                buscaStatusContrato();
                quantacucar.innerHTML = "Transação realizada.";
            })        
            .catch( (err) => {
                console.error("registrarQuantAcucar" - Aguardando tx ser minerada");
                console.error(err);
                quantacucar.innerHTML = "Algo saiu errado: " + err.message;
            })
        })
        .catch( (err) => {
            console.error("registrarQuantAcucar");
            console.error(err);
            quantacucar.innerHTML = "Algo saiu errado: " + err.message;
        })
    }
}

