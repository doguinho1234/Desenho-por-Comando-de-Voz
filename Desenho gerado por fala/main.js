let x = 0;
let y = 0;
let desenharCirculo = "";
let desenharQuadrado = "";
let desenharRetangulo = "";

//API de reconhecimento de fala
var SpeechRecognition = window.webkitSpeechRecognition;
//criando um novo reconhecimento de fala e armazenando na variável
var recognition = new SpeechRecognition();

function start() { //ao clicar no botão desenhar
    document.getElementById("status").innerHTML = "O sistema está ouvindo, por favor fale: Círculo, Quadrado ou Retângulo";
    recognition.start(); // novo reconhecimento de fala
}

recognition.onresult = function (event) {
    console.log(event);
    
    // acessando o reconhecimento com maior precisão e armazenando na variável.
    var content = event.results[0][0].transcript; // 1 [0] = Array. 2 [0][0] = Matriz
    document.getElementById("status").innerHTML = "A fala foi reconhecida como :" + content;

    if (content == "círculo") {
        x = Math.floor(Math.random() * 900); //Math.floor arredonda números(Apenas números inteiros, sem decimais)
        y = Math.floor(Math.random() * 600);
        desenharCirculo = "set";
    }
    if (content == "quadrado") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        desenharQuadrado = "set";
    } 
    if (content == "retângulo") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        desenharRetangulo = "set";
    }
}

function draw() {
    if (desenharCirculo == "set") {
        radius = Math.floor(Math.random() * 100);
        r = Math.random() * 255;
        g = Math.random() * 255;
        b = Math.random() * 255;
        fill(r,g,b);
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Círculo desenhado";
        desenharCirculo = "";
    }

    if(desenharQuadrado == "set") {
        r = Math.random() * 255;
        g = Math.random() * 255;
        b = Math.random() * 255;
        fill(r,g,b);
        rect(x,y,100,100);
        document.getElementById("status").innerHTML = "Quadrado desenhado";
        desenharQuadrado = "";
    }

    if(desenharRetangulo == "set") {
        Altura = Math.floor(Math.random() * 100);
        Largura = Math.floor(Math.random() * 50);
        r = Math.random() * 255;
        g = Math.random() * 255;
        b = Math.random() * 255;
        fill(r,g,b);
        rect(x,y,Altura,Largura);
        document.getElementById("status").innerHTML = "Retângulo desenhado";
        desenharRetangulo = "";
    }
}

function setup() {
    canvas = createCanvas(900, 600);
}


