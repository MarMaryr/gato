var elem = document.getElementById('btnhello');
elem.addEventListener('click', function () {
    var divtela = document.getElementById("tela");
    divtela.innerHTML = "Bom dia";
}, false);

//Função do botão com alerta

//explicação: Criei uma variável que chamei de btn "var btn = ..." depois atribuí o comando 
//document.getElementById que significa que ele irá puxar o elemento com 
//o Id que estiver no parênteses a seguir
//o comando <button> no html tem um id com o nome "btnhello2", para escrever basta digitar
//<button id=btnhello2> olá </button> e o id está atribuido
//depois de criada a variável chamei ela digitando "btn." e depois o comando
//addEventListener que significa que terá um evento quando feito uma ação
//então atribui o evento de 'click' que significa quando clicar em cima, dei uma virgula e 
//digitei function() que é para descrever a função que virá a seguir
//por fim se abre chaves e digito o comando, no caso alert que quando clicado no botão ira aparecer uma tela
//logo a cima dizendo a mensagem do parênteses (pratique criando outros botões)

var btn = document.getElementById('btnhello2');

btn.addEventListener('click', function () {
    alert("boa tarde");
});

