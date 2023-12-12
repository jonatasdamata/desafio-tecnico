function somatorio() {
    let numero = document.getElementById("numero").value;
    let somatorio = 0;
  
    // Array para armazenar os números que serão somados
    let numerosSoma = [];
  
    document.getElementById("setResultado").innerHTML = "";
  
    // Uso do Loop for para encontrar e somar os múltiplos de 3 ou 5.
    for (let i = 1; i < numero; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        // Adiciona o número ao somatório
        somatorio += i;
  
        // Se i é múltiplo de 3 ou 5, i é adicionado ao array
        numerosSoma.push(i);
      }
    }
  
    // Obtém a referência ao textarea
    let textareaResultado = document.getElementById("setResultado");
  
    // Atualiza o conteúdo do textarea com os resultados
    textareaResultado.value = `${numerosSoma.join(" + ")}= \n Totalizando: ${somatorio}`;
  }
  