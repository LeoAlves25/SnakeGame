document.getElementById("opcoes").style.display="none";

document.getElementById('botaoOpcoes').addEventListener("click", function(event){
    document.getElementById("botoes").style.display="none";
    document.getElementById("opcoes").style.display="block";
})

document.getElementById('botaoJogar1').addEventListener('click',function(event){
    document.getElementById("botoes").style.display="none";
    document.getElementById("menu").style.display="none";
})

document.getElementById('botaoJogar2').addEventListener('click',function(event){
    document.getElementById("menu").style.display="none";
    document.getElementById("opcoes").style.display="none";
    document.getElementById("rodape").style.display="none";
    let tamanho=document.querySelector('input[name=tArena]:checked').value;
    let dificuldade=document.querySelector('input[name=tDiffi]:checked').value;
    console.log(cor)
    console.log(tamanho)
    console.log(dificuldade)
})

let cor=document.querySelector('input[name=tCor]:checked').value;
let tamanho=document.querySelector('input[name=tArena]:checked').value;
let dificuldade=document.querySelector('input[name=tDiffi]:checked').value;

console.log(cor)
console.log(tamanho)
console.log(dificuldade)