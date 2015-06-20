//alert("funcina");
var tablero, direccion;
var teclas=
{
	UP:   38,
	DOWN: 40,
	LEFT: 37,
    RIGHT:39
};

var fondo={//crear un objeto json : java scriptobjet notation- ntacion de objetos
	imagenURL:"fondo.png",
	imagenOK: false
};
var tifis={//crear un objeto json : java scriptobjet notation- ntacion de objetos
 		x: 0,
 		y: 0,
 		frenteURL: "diana-frente.png",
 		frenteOK: false, //boollen para saber si cargao  no
 		atrasURL: "diana-atras.png",
 		atraseOK: false, //
 		derURL: "diana-der.png",
 		derOK: false, 
 		izqURL: "diana-izq.png",
 		izqOK: false, 
 		velocidad: 20 //se mueva en 20 pixeles
};
var liz={//crear un objeto json : java scriptobjet notation- ntacion de objetos
 		x: 250,
 		y: 250,
 		lizURL: "liz.png",//sprite asi se llama ese tipo de imagenes
   		lizOK: false //boollen para saber si cargao  no
};
function inicio()
{
	
var canvas=document.getElementById("campo");//funcino del dmcuiento que permite obtene atrabver de id
tablero=canvas.getContext("2d");

fondo.imagen= new Image(); //varriable imagen q por dentro tiene un obtjeto //Image objeto internte de los navegadores que n permite crear imagnes
fondo.imagen.src=fondo.imagenURL;//agregamos la foto
fondo.imagen.onload=confirmar;//evento onload carga la imagen no le pone parentensis x quiero que se dispare la imagen cuando la imagen carge
//tidis frente
tifis.frente= new Image(); //varriable frente q por dentro tiene un obtjeto
tifis.frente.src=tifis.frenteURL;//agregamos la foto
tifis.frente.onload=confirmarFrente;//cuando carge todo esto confirmame el el frente
//tifis atras
tifis.atras= new Image(); 
tifis.atras.src=tifis.atrasURL;
tifis.atras.onload=confirmarAtras;
//tifis derecha
tifis.der= new Image(); 
tifis.der.src=tifis.derURL;
tifis.der.onload=confirmarDer;
//tifis izquierda
tifis.izq= new Image(); 
tifis.izq.src=tifis.izqURL;
tifis.izq.onload=confirmarIzq;


liz.lizy= new Image(); //varriable frente q por dentro tiene un obtjeto
liz.lizy.src=liz.lizURL;//agregamos la foto
liz.lizy.onload=confirmarliz;//cuando carge todo esto confirmame el el frente


//movimento por teclado
document.addEventListener("keydown",teclado); //evento de tecla oprimida
}

function teclado(evento) 
{
	//console.log(datos);
	var codigo = evento.keyCode;// guardo en cogido el numero de la telca oprimida
   
     if(codigo== teclas.UP){
        tifis.y -= tifis.velocidad;
        if(tifis.y < 0){
            tifis.y = 0;
        }
        limiteA();
        

    }
      if(codigo == teclas.DOWN){
        	if(tifis.y<=450){
 	          tifis.y += tifis.velocidad;
 	         // alert("arriba");
 	      }
        limiteB();
     }
      if(codigo == teclas.LEFT){  
             if(tifis.x>=0 ){               
            tifis.x -= tifis.velocidad;
 	         }
              limiteI();	      
     }
       if(codigo == teclas.RIGHT){ 
           if(tifis.x<=450 ){            
 	          tifis.x += tifis.velocidad;
 	        }	 limites();     
     }
     direccion=codigo;
	 dibujar();

}
function limiteA(){

    if (tifis.x > 170 && tifis.x < 238 && tifis.y < 250){
        tifis.y = 250;
        tifis.x; 
    }
    if(tifis.x >= -13 && tifis.x < 137 && tifis.y < 250){
        tifis.y = 250;
        tifis.x;
    }
    if(tifis.x > 110 && tifis.x < 500 && tifis.y < 400 && tifis.y > 370){
        tifis.y=400;
        tifis.x;
    }
}
function limites()
{
    if(tifis.x > 160 && tifis.x < 210 && tifis.y < 250 )
    {
        tifis.x = 160;
        tifis.y;
    }
    if(tifis.y > 300 && tifis.y < 400 && tifis.x > 110){
        tifis.x= 110;
        tifis.y;
    }    
    
}
function limiteI(){

    if (tifis.x > 210 && tifis.x < 240 && tifis.y < 250){
        tifis.x = 240;
        tifis.y;
    }
    if(tifis.x < 137 && tifis.y > 150 && tifis.y < 250){
            tifis.x =137;
            tifis.y;

    }
}
function limiteB(){

    if (tifis.x > 110 && tifis.x < 500 && tifis.y > 300 && tifis.y < 360){
        tifis.y = 300;
        tifis.x;
    }
    if(tifis.x >= -13 && tifis.x < 137 && tifis.y > 150 && tifis.y < 200){
        tifis.y = 150;
        tifis.x;
    }
}
function confirmar(){//para sabersi la imagen carga o no
	fondo.imagenOK=true;
	dibujar();
}
//tifis
function confirmarFrente(){//para sabersi la imagen carga o no
	tifis.frenteOK=true;
	dibujar();
}
function confirmarAtras(){//para sabersi la imagen carga o no
	tifis.atraseOK=true;
	dibujar();
}
function confirmarDer(){//para sabersi la imagen carga o no
	tifis.derOK=true;
	dibujar();
}
function confirmarIzq(){//para sabersi la imagen carga o no
	tifis.izqOK=true;
	dibujar();
}

//liz
function confirmarliz(){//para sabersi la imagen carga o no
	liz.lizOK=true;
	dibujar();
}

function dibujar()
{	
	//capa1 fondo
	if(fondo.imagenOK==true){//si la imagen cargo te dibuja o muestra la imagen
         tablero.drawImage(fondo.imagen, 0, 0);//simep va tener 3 parmetro la imagne y la posiocn en x e y
      }
      //capa2 liz
    //como liz es boleana no necsito compara
       if(liz.lizOK){
    	tablero.drawImage(liz.lizy, liz.x, liz.y);
    }
      //capa3 tifis
      var tifiDibujo = tifis.frente;
    if(tifis.frenteOK /*&& tifis.atrasOK && tifis.derOK && tifis.izqOK */){
    	 if(direccion==teclas.DOWN){
    	 	tifiDibujo=tifis.frente;
    	 }
    	 if(direccion==teclas.UP){
    	 	tifiDibujo=tifis.atras;
    	 }
    	  
    	  if(direccion==teclas.RIGHT){
    	 	tifiDibujo=tifis.der;
    	 }
    	  if(direccion==teclas.LEFT){
    	 	tifiDibujo=tifis.izq;
    	 }
    	tablero.drawImage(tifiDibujo, tifis.x, tifis.y);
    }
    
}








