// Banco de perguntas (Compreensão, Funcionamento da Língua, Gramática)
let bancoPerguntas = [
{grupo:"Compreensão", pergunta:"Quem é a personagem principal do texto?", respostas:["maria"]},
{grupo:"Compreensão", pergunta:"Para onde Maria caminhava?", respostas:["para escola","para a escola"]},
{grupo:"Compreensão", pergunta:"Qual é o sonho de Maria?", respostas:["ser professora"]},
{grupo:"Compreensão", pergunta:"O que Maria gostava de observar?", respostas:["as árvores"]},
{grupo:"Funcionamento da língua", pergunta:"O que é um substantivo?", respostas:["palavra que nomeia seres","palavra que dá nome aos seres"]},
{grupo:"Funcionamento da língua", pergunta:"O que é um verbo?", respostas:["palavra que indica ação","palavra que indica ação estado ou fenômeno"]},
{grupo:"Funcionamento da língua", pergunta:"O que é um adjetivo?", respostas:["palavra que caracteriza o substantivo","palavra que indica qualidade"]},
{grupo:"Gramática", pergunta:"Na frase 'Maria caminhava pela estrada', quem é o sujeito?", respostas:["maria"]},
{grupo:"Gramática", pergunta:"Qual é o verbo da frase 'Maria caminhava pela estrada'?", respostas:["caminhava"]},
{grupo:"Gramática", pergunta:"O que é uma oração?", respostas:["frase com verbo","frase que possui verbo"]},
{grupo:"Gramática", pergunta:"O que é predicado?", respostas:["tudo que se diz do sujeito"]},
{grupo:"Funcionamento da língua", pergunta:"O que é um advérbio?", respostas:["palavra que modifica o verbo"]}
];

// Seleciona 9 perguntas random + 1 composição
let perguntasSelecionadas = [];
while(perguntasSelecionadas.length < 9){
    let rand = Math.floor(Math.random()*bancoPerguntas.length);
    if(!perguntasSelecionadas.includes(bancoPerguntas[rand])){
        perguntasSelecionadas.push(bancoPerguntas[rand]);
    }
}

let container = document.getElementById("perguntas");
perguntasSelecionadas.forEach((p,i)=>{
    container.innerHTML += `
    <div class="pergunta">
    <b>${p.grupo}</b>
    <p>${p.pergunta}</p>
    <input type="text" id="p${i}">
    </div>
    `;
});

// Pergunta de composição
container.innerHTML += `
<div class="pergunta">
<b>Composição</b>
<p>Fala em 5-10 linhas sobre a importância da educação.</p>
<textarea id="comp"></textarea>
</div>
`;

function corrigir(){
    let pontos = 0;
    perguntasSelecionadas.forEach((p,i)=>{
        let r = document.getElementById("p"+i).value.toLowerCase().trim();
        if(p.respostas.includes(r)){
            pontos++;
        }
    });

    // A composição vale 1 ponto se preenchida
    let comp = document.getElementById("comp").value.trim();
    if(comp.length > 0) pontos++;

    let total = 10;
    let nota = (pontos/total)*20;
    nota = nota.toFixed(1);

    // Nota colorida no alert
    if(nota >= 10){
        alert("%cNota: "+nota+" ✔ Aprovado","color:green;font-weight:bold;font-size:16px");
    }else{
        alert("Nota: "+nota+" ❌ Reprovado","color:red;font-weight:bold;font-size:16px");
    }

    // Pergunta se quer fazer outra prova
    setTimeout(()=>{
        let resposta = confirm("Deseja fazer outra prova?");
        if(resposta){
            window.location.href="pagina3.html";
        }
    },500);
}