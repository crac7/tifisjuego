var tablero, direccion;
var teclas=
{
  UP:   38,
  DOWN: 40,
  LEFT: 37,
    RIGHT:39
};
var Imagenes = function ( x, y, fURL, fOK ,aURL ,aOK ,deURL ,deOK ,izqURL ,izqOK )
{
        this.x=x;
        this.y=y;
        this.frenteURL=fURL;
        this.frenteOK=fOK;
        this.atrasURL=aURL;
        this.atrasOK=aOK;
        this.derechaURL=deURL;
        this.derechaOK=deOK;
        this.izquierdaURL=izqURL;
        this.izquierdaOK=izqOK;
        this.velocidad=20;
  
  
   
  
}
  
var fondo= new Imagenes(0, 0, "fondo.png", false);
var tifis= new Imagenes(0, 0, "diana-frente.png", false, "diana-atras.png", false, "diana-der.png", false, "diana-izq.png", false);
var liz= new Imagenes(250, 250, "liz.png", false);
function inicio()
{
var canvas=document.getElementById("campo");
tablero=canvas.getContext("2d");

fondo.cargar();
//tifis.cargar();
}
Imagenes.prototype.cargar = function () 
    {
       this.personajes=new Image();
        this.personajes.src=this.frenteURL;
        this.personajes.onload= this.confirmar(); 

  }  
/*Imagenes.prototype.confirmar= */
Imagenes.prototype.confirmar = function  ()
    {
          this.frenteOK=true;
              fondo.dibujar();  
    } 
Imagenes.prototype.dibujar = function  ()
{  

  //var imagenes;
  if(fondo.frenteOK)
 { 
//  imagenes=this.personajes;
         tablero.drawImage(fondo.personajes, fondo.personajes.x, fondo.personajes.y);
        // console.log("sdhbfsdivsud");        
      }
      }
/*
liz.cargarliz();
tifis.cargartifis();
tifis.cargarTifisAtras();
tifis.cargarTifisDerecha();
tifis.cargarTifisIzquierda();*/
//document.addEventListener("keydown",tifis.teclado);
/*

Imagenes.prototype.teclado = function (evento) 
{  
  var codigo = evento.keyCode;
   
     if(codigo== teclas.UP)
     {
      tifis.y -= tifis.velocidad;           

    }
      if(codigo == teclas.DOWN)
      {
          
            tifis.y += tifis.velocidad;     
      
      }
           if(codigo == teclas.LEFT)
           {  
                          
           tifis.x -= tifis.velocidad;
          
           }

               if(codigo == teclas.RIGHT)
               { 
                 tifis.x += tifis.velocidad;
          
                }

     direccion=codigo;
     dibujar();

}
Imagenes.prototype.cargar = function()
{       
       //if(fondo.frenteOK=false){}
       fondo.imagen=new Image();
       fondo.imagen.src=fondo.frenteURL;
       fondo.imagen.onload=fondo.confirmar;   
}
Imagenes.prototype.cargartifis = function()
{ 
        tifis.frente=new Image();
       tifis.frente.src=tifis.frenteURL;
       tifis.frente.onload=tifis.confirmarFrente;    
        
} 
Imagenes.prototype.cargarTifisAtras = function()
{
        tifis.atras= new Image(); 
        tifis.atras.src=tifis.atrasURL;
        tifis.atras.onload=tifis.confirmarAtras;
} 
Imagenes.prototype.cargarTifisDerecha = function()
{
        tifis.der= new Image(); 
        tifis.der.src=tifis.derechaURL;
        tifis.der.onload=tifis.confirmarDer;
} 
Imagenes.prototype.cargarTifisIzquierda = function()
{
        tifis.izq= new Image(); 
        tifis.izq.src=tifis.izquierdaURL;
        tifis.izq.onload=tifis.confirmarIzq;
} 
Imagenes.prototype.cargarliz = function()
{ 
       liz.liz=new Image();
       liz.liz.src=liz.frenteURL;
       liz.liz.onload=liz.confirmarliz;
} *//*
Imagenes.prototype.confirmar= function ()
{
  personajes.frenteOK=true;
  dibujar();*/
/*
Imagenes.prototype.confirmarFrente = function ()
{//para sabersi la imagen carga o no
  tifis.frenteOK=true;
  dibujar();
}
Imagenes.prototype.confirmarAtras = function ()
{//para sabersi la imagen carga o no
  tifis.atrasOK=true;
  dibujar();
}
Imagenes.prototype.confirmarDer = function ()
{//para sabersi la imagen carga o no
  tifis.derechaOK=true;
 dibujar();
}
Imagenes.prototype.confirmarIzq = function ()
{//para sabersi la imagen carga o no
  tifis.izquierdaOK=true;
  dibujar();
}

//liz
Imagenes.prototype.confirmarliz = function ()
{//para sabersi la imagen carga o no
  liz.frenteOK=true;
  dibujar();
}
function limite()
{
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
function limiteI()
{
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
}*/

  /*
          if(liz.frenteOK)
          {imagenes=liz.liz;
          tablero.drawImage(imagenes, imagenes.x, liz.y);        
          }
 var tifiDibujo = tifis.atras;
        if(tifis.frenteOK && tifis.atrasOK && tifis.derechaOK && tifis.izquierdaOK ){
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
    }*/
