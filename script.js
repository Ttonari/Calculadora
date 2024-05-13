
function insert(input) {
       const monitor = document.getElementById("monitor");
       monitor.textContent += input;
   }
function apagar(){
      const monitor = document.getElementById('monitor')
      monitor.textContent = ''
}      

function calcular() {
       const monitor = document.getElementById("monitor");
       const expressao = monitor.textContent.trim(); // Obtém a expressão da string no elemento "monitor" (removendo espaços em branco)
       try {
           const funcao = new Function(`return ${expressao}`);//A expressão ${expressao} é interpolada na string, resultando em algo como return 2 + 3 * 4
           const resultado = funcao();//Essa função avalia a expressão matemática (por exemplo, “2 + 3 * 4”) e retorna o resultado
           monitor.textContent = resultado; // Atualiza o conteúdo do "monitor" com o resultado
       } catch (error) {
           console.error("Erro ao calcular a expressão:", error);
           monitor.textContent = "Erro"; // Em caso de erro, exibe "Erro" no "monitor"
       }
   }
   function apagar1() {
    const conteudo_string= document.getElementById("monitor");
    const str = conteudo_string.textContent;
    const apagar_1 = str.substring(0, str.length - 1);
    conteudo_string.textContent = apagar_1
}