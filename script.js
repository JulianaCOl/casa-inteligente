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

// ### Chamando um evento do JS do ti´p "DOMContentLoaded", que é um evento que acontece após
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

    //### Recebendo as mensagens dos tópicos assinados no MQTT pelo cliente
    cliente.on("message", (topico, mensagem) => {
        console.log("Topico recebido: ", topico);
        console.log("Mensagem recebida: ", mensagem);
    });
});