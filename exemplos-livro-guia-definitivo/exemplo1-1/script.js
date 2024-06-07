function calculate() { // Função para calcular o emprestimo
    // Pesquisa os elementos de entrada e saída no documento
    var amount = document.getElementById("amount");
    var apr = document.getElementById("apr");
    var years = document.getElementById("years");
    var zipcode = document.getElementById("zipcode");
    var payment = document.getElementById("payment");
    var total = document.getElementById("total");
    var totalinterest = document.getElementById("totalinterest");
    
    var principal = parseFloat(amount.value); // Obtém o valor através da entrada do usuario
    var interest = parseFloat(apr.value) / 100 / 12; // Converte os juros de  porcetagem para decimais e converte de taxa anual para mensal
    var payments = parseFloat(years.value) * 12; // Converte o período de pagamento em anos para o número de pagamentos mensais

    // Calcula o valor do pagamento mensal
    var x = Math.pow(1 + interest, payments);
    var monthly = (principal * x * interest) / (x - 1);
    alert(monthly)

    // Verifica se o resultado é um número finito e exibi os resultados
    if (isFinite(monthly)) {
        // Preenche o campo de saída, arredondando para 2 casas decimais
        payment.innerHTML = monthly.toFixed(2);
        total.innerHTML = (monthly * payments).toFixed(2);
        totalinterest.innerHTML = ((monthly * payments) - principal).toFixed(2);

        // Salva a entrada do usuário para que possamos recuperá-la na prócima vez que ele visitar
        save(amount.value, apr.value, years.value, zipcode.value);

        // Anúncio: localiza e exibe financeiras locais, mais ingnora erros de rede
        try { // Captura quaisquer erros que ocorram dentro destas chaves
            getLenders(amount.value, apr.value, years.value, zipcode.value);
        }
        catch(e) { /* E ignora esses erros */ }

        // Por fim, traça o gráfico do saldo devedor, dos juros e dos pagamentos do capital
        chart(principal, interest, monthly, payments);
    }
    else {
        // O resultado foi Not-a-Number ou infinito, o que significa que a entrada estava incompleta ou era inválida. Apaga qualquer saída exibida anteriormente.
        payment.innerHTML = ""; // Apaga o conteúdo desse elemento
        total.innerHTML = ""; // Apaga o conteúdo desse elemento
        totalinterest.innerHTML = ""; // Apaga o conteúdo desse elemento
        chart(); // Sem  argumentos o gráfico é apagado
    }
}

function save(amount, apr, years, zipcode) { // Salva a entrada do usuário como propriedade do objeto localStorage
    if (window.localStorage) { // Apenas se o navegador suportar
        localStorage.loan_amount = amount;
        localStorage.loan_apr = apr;
        localStorage.loan_years = years;
        localStorage.loan_zipcode = zipcode;
    }
}

// Tenta restaurar os campos de entrada automaticamente quando o documento é carregado pela primeira vez
window.onload = function() {
    // Se o navegador suportar localStorage e temos alguns dados armazenados
    if (window.localStorage && localStorage.loan_amount) {
        document.getElementById("amount").value = localStorage.loan_amount;
        document.getElementById("apr").value = localStorage.loan_apr;
        document.getElementById("years").value = localStorage.loan_years;
        document.getElementById("zipcode").value = localStorage.loan_zipcode;
    }
}

// Passa a entrada do usuário pra um script no lado do servidor que (teoricamente) pode retornar uma lista de links para financeiras locais interessadas em fazer empréstimos

function getLenders(amount, apr, years, zipcode) {
    // Se o navegador não suportar o objeto XMLHttpRequest, não faz nada
    if (!window.XMLHttpRequest) return;
    
    // Localiza o elemento para exibir a lista de financeiras
    var ad = document.getElementById("lenders")
    if (!ad) return; // Encerra se não há ponto de saída
    
    // Codifica a entrada do usuário como parâmentros de consulta em um URL
    // URL do serviço mais dados do usuário na string de consulta
    var url = "getLenders.php" +
        "?amt=" + encodeURIComponent(amount) +
        "&apr=" + encodeURIComponent(apr) +
        "&yrs=" + encodeURIComponent(years) + 
        "&zip=" +encodeURIComponent(zipcode);

    // Busca o conteúdo desse URL usando o objeto XMLHttpRequest
    var req = new XMLHttpRequest(); // Inicia um novo pedido
    req.open("GET", url); // Um pedido GET da HTTP para o URL
    req.send(null); // Envia  o  pedido sem corpo

    // Antes de retornar, registra uma função de rotina de tratamento de evento que será chamada em uma momento posterior, quando a resposta do servidor de  HTTP chegar
    req.onreadystatechange = function() {
        if (req.readyState == 4 && req.status == 200) {
            // Se chegar até aqui, foi obtida uma resposta HTTP válidae completa
            var response = req.responseText; // Resposta HTTP como string
            var lenders = JSON.parse(response); // Analisa em um array JS

            // Converte o array de objetos lender em uma string HTML
            var list = "";
            for (var i = 0; i < lenders.length; i++) {
                list += "<li><a href='" + lenders[i].url + "'>" + lenders[i].name + "</a>";
            }

            // Exibe o código HTML no elemento acima
            ad.innerHTML = "<ul>" + list + "</ul>";
        }
    }
}

// Faz o gráfico do saldo devedor mensal, dos juros e do capital em um elemento <canvas> da HTML
function chart(principal, interest, monthly, payments) {
    var graph = document.getElementById("graph"); // Obtém a tag <canvas>
    graph.width = graph.width; // Mágica para apagar e redefinir o elemento canvas
    
    // Se chamamos sem argumentos ou se esse navegador não suporta elementos gráficos em um elemento <canvas>, basta retornar agora
    if (arguments.length == 0 || !graph.getContext) return;

    // Obtém o objeto "contexto" de <canvas> que define a API de desenho
    var g = graph.getContext("2d"); // Todo desenho é feito com esse objeto
    var width = graph.width, height = graph.height; // Obtém o tamanho da tela de desenho

    // Função para converter números de pagamentos e valores monetários em pixels
    function paymentToX(n) { return n * width / payments; }
    function amountToY(a) { return height- (a * height / (monthly * payments * 1.05)); }

    // Os pagamentos são uma linha reta de (0,0) a (payments, monthly * payments)
    g.moveTo(paymentToX(0), amountToY(0)); // Começa no canto inferior esquerdo
    g.lineTo(paymentToX(payments), amountToY(monthly * payments)); // Desenha até o canto superior direito
    g.lineTo(paymentToX(payments), amountToY(0)); // Para baixo até o cando inferior direito
    g.closePath(); // E volta ao início
    g.fillStyle = "#f88"; // Vermelho-claro
    g.fill(); // Preenche o triângulo
    g.font = "bold 12px sans-serif"; // Define uma fonte
    g.fillText("Total Interest Payments", 20, 20); // Desenha texto na legenda
    
    // O capital acumulado não é linear e é mais complicado representar no gráfico
    var equity = 0;
    g.beginPath(); // Inicia uma nova figura
    g.moveTo(paymentToX(0), amountToY(0)); // Começa no canto inferior esquerdo

    for (var p = 1; p <= payments; p++) {
        // Para cada pagamento, desconbre quanto é o juro
        var thisMonthsInterest = (principal - equity) * interest;
        equity += (monthly - thisMonthsInterest); // Manda o resto para o capital
        g.lineTo(paymentToX(p), amountToY(equity)); // Linha até este ponto
    }
    g.lineTo(paymentToX(payments), amountToY(0)); // Linha de volta para o eixo X
    g.closePath(); // Volta para o ponto inicial
    g.fillStyle = "green"; // Agora usa a cor verde
    g.fill(); //E preenche a área sob a curva
    g.fillText("Total Equity", 20, 35); // Rotula em verde

    // Faz o loop novamente, representando o saldo devedor como uma linha preta grossa no gráfico
    var bal = principal;
    g.beginPath();
    g.moveTo(paymentToX(0), amountToY(bal));
    for (var p = 1; p <= payments; p++) {
        var thisMonthsInterest = bal * interest;
        bal -= (monthly - thisMonthsInterest); // O resto vai para o capital
        g.lineTo(paymentToX(p), amountToY(bal)); // Desenha alinha até este ponto
    }
    g.lineWidth = 3; // Usa uma linha grossa
    g.stroke(); // Desenha a curva do saldo
    g.fillStyle = "black"; // Troca a cor do texto para preto
    g.fillText("Loan Balance", 20, 50); // Entrada da legenda

    // Agora faz marcações anuais e os nmúmeros de anos no eixo X
    g.textAlign = "center"; // Centraliza o texto nas marcas

    var y = amountToY(0); // Coordenada Y do eixo X
    for (var year = 1; year * 12 <= payments; year++) { // Para cada ano
        var x = paymentToX(year * 12); // Calcula a posição da marca
        g.fillRect(x-0.5, y-3, 1, 3); // Desenha a marca
        if (year == 1) g.fillText("Year", x, y - 5); // Rotula o eixo
        if (year % 5 == 0 && year * 12 !== payments) // Numera cada 5 anos
            g.fillText(String(year), x, y - 5);
    }

    // Marca Valores de pagamento ao longo da margem direita
    g.textAlign = "right"; // Alinha o texto à direita
    g.textBaseline = "middle"; // Centraliza verticalmente
    var ticks = [monthly * payments, principal]; // Os dois pontos que marcaremos
    var rightEdge = paymentToX(payments); // Coordenada X do eixo Y
    for (var i = 0; i < ticks.length; i++) { // Para cada um dos dois pontos
        var y = amountToY(ticks[i]); // Calcula a posição Y da marca
        g.fillRect(rightEdge-3, y-0.5, 3, 1); // Desenha a marcação
        g.fillText(String(ticks[i].toFixed(0)), rightEdge-5, y); // E a rotula
    }
}