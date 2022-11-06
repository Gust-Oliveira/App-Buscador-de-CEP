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
function salvarCep(){
    let cep = document.getElementById("cep").value;
    let endereco = document.getElementById("endereco").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let uf = document.getElementById("uf").value;
    
    let divSalvar = document.createElement("div");
    divSalvar.id = `${cep}`
    divSalvar.className = 'divSalvar';

    let p1 = document.createElement("div");
    p1.innerHTML = `<strong>CEP</strong> : ${cep}`;
    let p2 = document.createElement("div");
    p2.innerHTML = `<strong>Endereço</strong> : ${endereco}`;
    let p3 = document.createElement("div");
    p3.innerHTML = `<strong>Bairro</strong> : ${bairro}`;
    let p4 = document.createElement("div");
    p4.innerHTML = `<strong>Cidade</strong> : ${cidade}`;
    let p5 = document.createElement("div");
    p5.innerHTML = `<strong>UF</strong> : ${uf}`;

    let divApagar = document.createElement("div");
    divApagar.id = `${cep}`;
    divApagar.className = 'divApagar';
    divApagar.innerHTML = `<strong>Apagar</strong>`;

    divApagar.addEventListener("click", function(){
        divSalvar.remove();
    })
    let hr = document.createElement("hr");

    divSalvar.appendChild(p1)
    divSalvar.appendChild(p2)
    divSalvar.appendChild(p3)
    divSalvar.appendChild(p4)
    divSalvar.appendChild(p5)
    divSalvar.appendChild(divApagar);
    divSalvar.appendChild(hr);
    document.getElementById("container-salvar").appendChild(divSalvar);

    document.getElementById("cep").value = '';
    document.getElementById("endereco").value = '';
    document.getElementById("bairro").value = '';
    document.getElementById("cidade").value = '';
    document.getElementById("uf").value = '';
}