alert('Coloque um CEP valido sem traço.')
function pesquisarCep(url){

    let cepId = document.getElementById("cep").value;

    let ajax = new XMLHttpRequest()
    ajax.open('GET',`https://viacep.com.br/ws/${cepId}/json/`);

    ajax.onreadystatechange = () => {
        if(ajax.readyState == 4 && ajax.status == 200){
            let cep = ajax.responseText;
            let cepObj = JSON.parse(cep);

            document.getElementById("endereco").value = cepObj.logradouro;
            document.getElementById("bairro").value = cepObj.bairro;
            document.getElementById("cidade").value = cepObj.localidade;
            document.getElementById("uf").value = cepObj.uf;
        }else{

        }
    }

    ajax.send();
}

function apagarCep(){
    document.getElementById("cep").value = '';
    document.getElementById("endereco").value = '';
    document.getElementById("bairro").value = '';
    document.getElementById("cidade").value = '';
    document.getElementById("uf").value = '';
}