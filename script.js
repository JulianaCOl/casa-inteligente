// ### CONFIGURANDO O BROKER MQTT PARA O NAVEGADOR
const MQTT_URL = "wss://test.mosquitto.org:8081";

// ### Configurando o ID do cliente MQTT
const clienteId = 'web-casa-inteligente-juliana';

// ###Criando o cliente MQTT do navegador, POREM ainda não estamos conectados ao BROKER
// const cliente = mqtt.connect(MQTT_URL, {
//     clienteId,
//     clean: true,
//     connectTimeout: 4000,
// });

//### Variaveis dos dispositivos
const lampSalaInput = document.getElementById("lamp-sala");
const lampSalaTexto = document.getElementById("lamp-sala-texto");
const cortSalaInput = document.getElementById("cort-sala");
const cortSalaTexto = document.getElementById("cort-sala-texto");
const portSalaInput = document.getElementById("port-sala");
const portSalaTexto = document.getElementById("port-sala-texto");
const lampCozinhaInput = document.getElementById("lamp-cozinha");
const lampCozinhaTexto = document.getElementById("lamp-cozinha-texto");
const exaustorInput = document.getElementById("exaus-cozinha");
const exaustorTexto = document.getElementById("exaus-cozinha-texto");
const lampVarInput = document.getElementById("lamp-varanda");
const lampVarTexto = document.getElementById("lamp-varanda-texto");
const varVarandaInput = document.getElementById("var-varanda");
const varVarandaTexto = document.getElementById("var-varanda-texto");
const portVarandaInput = document.getElementById("port-varanda");
const portVarandaTexto = document.getElementById("port-varanda-texto");
const irrigaInput = document.getElementById("ir-varanda");
const irrigaTexto = document.getElementById("ir-varanda-texto");

//### Alterando estado dos dispositivos

// pegando o evento de mudança do botão (ligado/desligado)
lampSalaInput.addEventListener("change", () => {


    //verifica se o botão esta como ligado
    const ligado = lampSalaInput.checked === true;

    if(ligado ===true){
        console.log("Lampada ligada");
        lampSalaTexto.innerHTML = "Ligado"
    } else {
        console.log("Lampada desligada");
        lampSalaTexto.innerHTML = "Desligado"
    }

})

cortSalaInput.addEventListener("change", () => {


    const aberto = cortSalaInput.checked === true;

    if(aberto === true){
        console.log("Cortina aberta");
        cortSalaTexto.innerHTML = "Aberta"
    } else{
        console.log("Cortina fechada");
        cortSalaTexto.innerHTML = "Fechada"
    }

}) 

portSalaInput.addEventListener("change" , () => {
    const aberto = portSalaInput.checked === true;

    if(aberto === true){
        console.log("Porta aberta");
        portSalaTexto.innerHTML = "Aberta"
    
    } else{
        console.log("Porta fechada");
        portSalaTexto.innerHTML = "Fechada"
    }
})

lampCozinhaInput.addEventListener("change", () => {


    const ligado = lampCozinhaInput.checked === true;

    if(ligado ===true){
        console.log("Lampada ligada");
        lampCozinhaTexto.innerHTML = "Ligado"
    } else {
        console.log("Lampada desligada");
        lampCozinhaTexto.innerHTML = "Desligado"
    }

})
exaustorInput.addEventListener("change" , () => {
    const ligado = exaustorInput.checked === true;
    if(ligado === true){
        console.log("Exaustor ligado");
        exaustorTexto.innerHTML = "Ligado"
    } else{
        console.log("Exaustor desligado");
        exaustorTexto.innerHTML = "Desligado"
    }
})

lampVarInput.addEventListener("change", () => {


    const ligado = lampVarInput.checked === true;

    if(ligado ===true){
        console.log("Lampada ligada");
        lampVarTexto.innerHTML = "Ligado"
    } else {
        console.log("Lampada desligada");
        lampVarTexto.innerHTML = "Desligado"
    }

})

varVarandaInput.addEventListener("change" , () => {
    const aberto = varVarandaInput.checked === true;

    if(aberto === true){
        console.log("Varal aberto");
        varVarandaTexto.innerHTML = "Aberto"
    
    } else{
        console.log("Varal fechado");
        varVarandaTexto.innerHTML = "Fechado"
    }
})

portVarandaInput.addEventListener("change" , () => {
    const aberto = portVarandaInput.checked === true;

    if(aberto === true){
        console.log("Portão aberto");
       portVarandaTexto.innerHTML = "Aberto"
    
    } else{
        console.log("Portão fechado");
        portVarandaTexto.innerHTML = "Fechado"
    }
})
irrigaInput.addEventListener("change", () => {
    const ligado = irrigaInput.checked === true;

    if(ligado === true){
        console.log(" Irrigação ligada");
        irrigaTexto.innerHTML = "Ligado"
    } else{
        console.log("Irrigação desligada");
        irrigaTexto.innerHTML = "Desligado"
    }
})


// ### Chamando um evento do JS do tipo "DOMContentLoaded", que é um evento que acontece após
//      toda a minha página HTML ser carregada
// document.addEventListener("DOMContentLoaded", () => {
//     console.log("Página carregada com sucesso ✅ ... Conectando com o Mosquitto");

//     //### Estabelecendo a conexão com o broker mqtt
//     cliente.on("connect", () => {
//         console.log("Conexão estabelecida com Sucesso ✅!");
//         console.log("Cliente conectado: ", clienteId);

//         // ### criando um topico para acessar mensagens do MQTT
//         const topicoTeste = 'teste/juliana';

//         // ### recebendo mensagens do topico criado
//         cliente.subscribe(topicoTeste);
//     });

//     //### Preparando mensagem de erro caso algo aconteça
//     cliente.on("error", (erro) => {
//         console.error("Erro ao conectar ao Broker MQTT 🚫!");
//         console.error(erro);
//     });

//     //### Recebendo as mensagens dos tópicos assinados no MQTT pelo cliente
//     cliente.on("message", (topico, mensagem) => {
//         console.log("Topico recebido: ", topico);
//         console.log("Mensagem recebida: ", mensagem);
//     });
// });