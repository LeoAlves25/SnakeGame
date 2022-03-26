/**window.onload */
document.getElementById("botaoJogar2").onclick=function(){
    canv=document.getElementById("map");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/document.querySelector('input[name=tDiffi]:checked').value);
    canvX=parseInt(document.querySelector('input[name=tArena]:checked').value);
    canvY=parseInt(document.querySelector('input[name=tArena]:checked').value);
    tc=canvX/20;
}

document.getElementById("botaoJogar1").onclick=function(){
    canv=document.getElementById("map");
    ctx=canv.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game,1000/document.querySelector('input[name=tDiffi]:checked').value);
    canvX=400;
    canvY=400;
    tc=canvX/20;
}


playerX=playerY=10; /*Posição inicial*/
gs=20 /*Tamanho do corpo*/
ax=ay=15; /*Posição da fruta*/
xv=yv=0; /*Velocidade inicial*/
trail=[]; /*Corpo da cobra*/
tail=5; /*Tamanho inicial*/

function game(){
    playerX+=xv; /*Movimentação da cobra*/
    playerY+=yv;

    /*    if(playerX<(600-canvX)/2){
    playerX=((600-canvX)/2-1);
    }
    if(playerX>((600-canvX)/2-1)){
        playerX=(600-canvX)/2;
    }
    if(playerY<(600-canvX)/2){
        playerY=((600-canvX)/2-1);
    }
    if(playerY>(((600-canvX)/2-1))){
        playerY=(600-canvX)/2;
    }
    if(playerX<0){
        playerX=tc-1;
    }
    if(playerX>tc-1){
        playerX=0;
    }
    if(playerY<0){
        playerY=tc-1;
    }
    if(playerY>tc-1){
        playerY=0;
    }
    */
   
    if(playerX<(30-canvX/gs)/2){
        playerX=(30-(30-canvX/20)/2-1);
        }
        if(playerX>(30-(30-canvX/20)/2-1)){
            playerX=(30-canvX/20)/2;
        }
        if(playerY<0){
            playerY=(30-(30-canvX/20)-1);
        }
        if(playerY>((30-(30-canvX/20)-1))){
            playerY=0;
        }

    ctx.fillStyle="black"; /* Cor de fundo*/
    ctx.fillRect((600-canvX)/2,0,canvX,canvY);

    ctx.fillStyle=document.querySelector('input[name=tCor]:checked').value; /*Cor da cobrinha*/
    for(i=0;i<trail.length;i++){
        ctx.fillRect(trail[i].x*gs,trail[i].y*gs,gs-2,gs-2); /*Formação do corpo*/
        if(trail[i].x==playerX && trail[i].y==playerY){ /*Condição quado a cobra se comer*/
            tail=5;
        }
    }

    trail.push({x:playerX, y:playerY});/*Adicionar nova posição da cabeça*/

    while(trail.length>tail){ /*Remover ponta do rabo*/
        trail.shift();
    }

    if(ax==playerX && ay==playerY){ /*Condição para quando comer a fruta*/
        tail++;
        ax=Math.floor(Math.random()*tc+((600-canvX)/2)/20);
        ay=Math.floor(Math.random()*tc); /*Ponto aleatório da fruta surgir*/
        console.log(ax)
    }
    ctx.fillStyle="red";
    ctx.fillRect(ax*gs, ay*gs, gs-2, gs-2);
}

function keyPush(evt){ /*Dando função para as setas do teclado*/
    switch(evt.keyCode){
        case 37:
            xv=-1;
            yv=0;
            break;
        case 38:
            xv=0;
            yv=-1;
            break;
        case 39:
            xv=1;
            yv=0;
            break;
        case 40:
            xv=0;
            yv=1;
            break;
        case 27:
            location.reload();
            break;    
    }
}