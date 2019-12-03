pragma solidity 0.5.12;

contract Exportacao {
        string public vendedor; 
        string public comprador;
        uint256 private valor; 
        uint256 private quantidade;
        
    constructor(string memory nomeComprador, string memory nomeVendedor, uint256 valorDoAcucar, uint256 quantDeAcucar) public {
        comprador = nomeComprador; 
        vendedor = nomeVendedor;
        valor = valorDoAcucar; 
        quantidade = quantDeAcucar;
       }

    function valorDoAcucar() public view returns (uint256) { 
        return valor; 
    }

    function quantDeAcucar() public view returns (uint256) { 
        return quantidade; 
    }

    function valorAPagar() public view returns(uint256 valorTotalAPagar) { 
        valorTotalAPagar = valor*quantidade; 
        return valorTotalAPagar; 
    }
}
