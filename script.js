// ### CONFIGURANDO O BROKER MQTT PARA O NAVEGADOR
const MQTT_URL = "wss://test.mosquitto.org:8081";

// ### Configurando o ID do cliente MQTT
const clienteId = 'web-casa-inteligente-juliana';

// ###Criando o cliente MQTT do navegador, POREM ainda não estamos conectados ao BROKER
const cliente = mqtt.connect(MQTT_URL, {
    clienteId,
    clean: true,
    connectTimeout: 4000,
});

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

















// ### Chamando um evento do JS do tipo "DOMContentLoaded", que é um evento que acontece após
//      toda a minha página HTML ser carregada
document.addEventListener("DOMContentLoaded", () => {
    console.log("Página carregada com sucesso ✅ ... Conectando com o Mosquitto");

    //### Estabelecendo a conexão com o broker mqtt
    cliente.on("connect", () => {
        console.log("Conexão estabelecida com Sucesso ✅!");
        console.log("Cliente conectado: ", clienteId);

        // ### criando um topico para acessar mensagens do MQTT
        const topicoTeste = 'teste/juliana';

        // ### recebendo mensagens do topico criado
        cliente.subscribe(topicoTeste);
    });

    //### Preparando mensagem de erro caso algo aconteça
    cliente.on("error", (erro) => {
        console.error("Erro ao conectar ao Broker MQTT 🚫!");
        console.error(erro);
    });

    //     //### Recebendo as mensagens dos tópicos assinados no MQTT pelo cliente
    cliente.on("message", (topico, mensagem) => {
        console.log("Topico recebido: ", topico);
        console.log("Mensagem recebida: ", mensagem.toString());
    });

    // pegando o evento de mudança do botão (ligado/desligado)
    lampSalaInput.addEventListener("change", () => {
        const TOPICO_LAMP_SALA = 'casa-juliana/sala/lamp';


        //verifica se o botão esta como ligado
        const ligado = lampSalaInput.checked === true;

        if (ligado === true) {
            //console.log("Lampada ligada");
            cliente.publish(TOPICO_LAMP_SALA, 'Ligado')
            lampSalaTexto.innerHTML = "Ligado"
        } else {
            //console.log("Lampada desligada");
            cliente.publish(TOPICO_LAMP_SALA, 'Desligado')
            lampSalaTexto.innerHTML = "Desligado"
        }

    })
    cortSalaInput.addEventListener("change", () => {
        const TOPICO_CORT_SALA = 'casa-juliana/sala/cort';

        const aberto = cortSalaInput.checked === true;

        if (aberto === true) {
            //console.log("Cortina aberta");
            cliente.publish(TOPICO_CORT_SALA, 'Aberta')
            cortSalaTexto.innerHTML = "Aberta"
        } else {
            //console.log("Cortina fechada");
            cliente.publish(TOPICO_CORT_SALA, 'Fechada')
            cortSalaTexto.innerHTML = "Fechada"
        }

    })

    portSalaInput.addEventListener("change", () => {
        const TOPICO_PORT_SALA = 'casa-juliana/sala/port';

        const aberto = portSalaInput.checked === true;

        if (aberto === true) {
            //console.log("Porta aberta");
            cliente.publish(TOPICO_PORT_SALA, 'Aberta')
            portSalaTexto.innerHTML = "Aberta"

        } else {
            //console.log("Porta fechada");
            cliente.publish(TOPICO_PORT_SALA, 'Aberta')
            portSalaTexto.innerHTML = "Fechada"
        }
    })

    lampCozinhaInput.addEventListener("change", () => {
        const TOPICO_LAMP_COZINHA = 'casa-juliana/cozinha/lamp'

        const ligado = lampCozinhaInput.checked === true;

        if (ligado === true) {
            //console.log("Lampada ligada");
            cliente.publish(TOPICO_LAMP_COZINHA, 'Ligado')
            lampCozinhaTexto.innerHTML = "Ligado"
        } else {
            //console.log("Lampada desligada");
            cliente.publish(TOPICO_LAMP_COZINHA, 'Desligado')
            lampCozinhaTexto.innerHTML = "Desligado"
        }

    })

    exaustorInput.addEventListener("change", () => {
        const TOPICO_EXAUS_COZINHA = 'casa-juliana/cozinha/exaus'

        const ligado = exaustorInput.checked === true;
        if (ligado === true) {
            //console.log("Exaustor ligado");
            cliente.publish(TOPICO_EXAUS_COZINHA, 'Ligado')
            exaustorTexto.innerHTML = "Ligado"
        } else {
            //console.log("Exaustor desligado");
            cliente.publish(TOPICO_EXAUS_COZINHA, 'Desligado')
            exaustorTexto.innerHTML = "Desligado"
        }
    })

    lampVarInput.addEventListener("change", () => {
        const TOPICO_LAMP_VAR = 'casa-juliana/varanda/lamp';

        const ligado = lampVarInput.checked === true;

        if (ligado === true) {
            //console.log("Lampada ligada");
            cliente.publish(TOPICO_LAMP_VAR, 'Ligado')
            lampVarTexto.innerHTML = "Ligado"
        } else {
            //console.log("Lampada desligada");
            cliente.publish(TOPICO_LAMP_VAR, 'Desligado')
            lampVarTexto.innerHTML = "Desligado"
        }

    })
    varVarandaInput.addEventListener("change", () => {
        const TOPICO_VARAL_VAR = 'casa-juliana/varanda/var';

        const aberto = varVarandaInput.checked === true;

        if (aberto === true) {
            //console.log("Varal aberto");
            cliente.publish(TOPICO_VARAL_VAR, 'Ligado')
            varVarandaTexto.innerHTML = "Aberto"

        } else {
            //console.log("Varal fechado");
            cliente.publish(TOPICO_VARAL_VAR, 'Fechado')
            varVarandaTexto.innerHTML = "Fechado"
        }
    })

    portVarandaInput.addEventListener("change", () => {
        const TOPICO_PORT_VARANDA = 'casa-juliana/varanda/port';

        const aberto = portVarandaInput.checked === true;

        if (aberto === true) {
            //console.log("Portão aberto");
            cliente.publish(TOPICO_PORT_VARANDA, 'Aberto')
            portVarandaTexto.innerHTML = "Aberto"

        } else {
            //console.log("Portão fechado");
            cliente.publish(TOPICO_PORT_VARANDA, 'Fechado')
            portVarandaTexto.innerHTML = "Fechado"
        }
    })

    irrigaInput.addEventListener("change", () => {
        const TOPICO_IRRIGA_VARANDA = 'casa-juliana/varanda/irriga';

        const ligado = irrigaInput.checked === true;

        if (ligado === true) {
            //console.log(" Irrigação ligada");
            cliente.publish(TOPICO_IRRIGA_VARANDA, 'Ligado')
            irrigaTexto.innerHTML = "Ligado"
        } else {
            //console.log("Irrigação desligada");
            cliente.publish(TOPICO_IRRIGA_VARANDA, 'Desligado')
            irrigaTexto.innerHTML = "Desligado"
        }
    })


});