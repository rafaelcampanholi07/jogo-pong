//variáveis da bolinha
let xBolinha = 100;
let yBolinha = 200;
let diametro = 22;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis do oponete
let = xRaqueteOponete =585;
let = yRaqueteOponete = 150;
let = velocidadeYoponete;
let = velocidadeXoponete;


let meusPontos = 0;
let pontosOponete = 0;



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background("green");
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  mostraRaqueteOponente();
  incluiPlacar();
  marcaPontos();
  movimentoRaqueteOponte();
}

function mostraBolinha() {
  square(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXBolinha *= -1;
    
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYBolinha *= -1;
  }
}

function mostraRaquete() {
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function mostraRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponete, raqueteComprimento, raqueteAltura);
}

function movimentoRaqueteOponente() {
   velocidadeYoponete = yBolinha -yRaqueteOponete - raqueteComprimento /2 -30
  yRaqueteoponete += velocidadeYoponete
}

function movimentaMinhaRaquete() {
  if(keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
  
function movimentoRaqueteOponte() {
  if(keyIsDown(87)) {
    yRaquete -= 10;
  }
  if(keyIsDown(83)) {
    yRaquete += 10;
  }
  
  function verificaColisaoRaqueteOponete() {
    if(xBolinha - raio < xRaqueteOponete + raqueteComprimento && yBolinha - raio < yRaqueteOponete + raqueteAltura && yBolinha + raio > yRaqueteOponete) {
      velocidadexBolinha *= -1;
    }
  function incluiPlacar (){
    fill(255)
    text(meusPontos, 278, 26);
    text(pontosOponete, 321, 26);
    
  }
  
  function marcaPontos(){
    
    if(xBolinha > 590){
      meusPontos += 1;
      
    }
    if(xBolinha < 10){
      pontosOpontente += 1;
    }
    
  }
  
  
  function verificaColisaoRaquete() {
    if(xBolinha - raio < xRaquete + raqueteComprimento && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
      velocidadexBolinha *= -1;
    }
    
  }
}
