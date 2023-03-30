function formatMoney(value) {
    value = Math.ceil(value * 100) / 100 // arredonda o valor para duas casas decimais
    value = value.toFixed(2) // formata o valor para duas casas decimais
    return '$ ' + value // retorna o valor formatado como uma string com o símbolo "$"
}

function formatSplit(value) {
    if (value == 1) return value + ' person' // se o valor for igual a 1, retorna "person" ao invés de "people"
    return value + ' people' // caso contrário, retorna "people"
}

function update(){
    let bill = Number(document.getElementById("yourBill").value) // pega o valor digitado pelo usuário no campo "yourBill" e converte para número
    let tipPercent = Number(document.getElementById("tipInput").value) // pega o valor digitado pelo usuário no campo "tipInput" e converte para número
    let split = document.getElementById('splitInput').value // pega o valor selecionado pelo usuário no campo "splitInput"

    let tipValue =  (bill * tipPercent) / 100 // calcula o valor da gorjeta
    let billTotal = bill + tipValue // calcula o valor total da conta com a gorjeta
    let billEach = billTotal / split // calcula o valor da conta dividido pelo número de pessoas

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %' // atualiza o elemento HTML com o valor da porcentagem da gorjeta
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue) // atualiza o elemento HTML com o valor da gorjeta formatado
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal) // atualiza o elemento HTML com o valor total da conta com a gorjeta formatado
    document.getElementById('splitValue').innerHTML = formatSplit(split) // atualiza o elemento HTML com o número de pessoas formatado
    document.getElementById('billEach').innerHTML = formatMoney(billEach) // atualiza o elemento HTML com o valor da conta dividido pelo número de pessoas formatado
}
