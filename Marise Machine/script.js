function converterDecimal() {
    var decimal = Number(input_numero.value);
    let binario = decimal.toString(2);
    let octal = decimal.toString(8);
    let hexadecimal = decimal.toString(16);

    if (isNaN(binario) || isNaN(octal) || isNaN(hexadecimal)) {
        resultado_binario.innerHTML = `Valor inválido`
        resultado_octal.innerHTML = `Valor inválido`
        resultado_hexadecimal.innerHTML = `Valor inválido`    
    } else {
        resultado_binario.innerHTML = ` ${binario}`;
        resultado_octal.innerHTML = ` ${octal}`;
        resultado_hexadecimal.innerHTML = ` ${hexadecimal}`;
    }
}

function converterBinario() {
    var binario = Number(input_numero.value);
    let decimal = parseInt(binario, 2).toString(10);
    let octal = parseInt(binario, 2).toString(8);
    let hexadecimal = parseInt(binario, 2).toString(16);

    if (isNaN(decimal) || isNaN(octal) || isNaN(hexadecimal)) {
        resultado_decimal.innerHTML = `Valor inválido`
        resultado_octal.innerHTML = `Valor inválido`   
        resultado_hexadecimal.innerHTML = `Valor inválido` 
    } else {
        resultado_decimal.innerHTML = ` ${decimal}`;
        resultado_octal.innerHTML = ` ${octal}`;
        resultado_hexadecimal.innerHTML = ` ${hexadecimal}`;
    }
}

function converterOctal() {
    var octal = Number(input_numero.value);
    let decimal = parseInt(octal, 8);
    let binario = parseInt(octal, 8).toString(2);
    let hexadecimal = parseInt(octal, 8).toString(16);

    if (isNaN(decimal) || isNaN(binario) || isNaN(hexadecimal)) {
        resultado_decimal.innerHTML = `Valor inválido`
        resultado_binario.innerHTML = `Valor inválido`
        resultado_hexadecimal.innerHTML = `Valor inválido`    
    } else {
        resultado_decimal.innerHTML = ` ${decimal}`;
        resultado_binario.innerHTML = ` ${binario}`;
        resultado_hexadecimal.innerHTML = ` ${hexadecimal}`;
    }
}

function converterHexa() {
    var hexa = input_numero.value;
    let decimal = parseInt(hexa, 16);
    let binario = parseInt(hexa, 16).toString(2);
    let octal = parseInt(hexa, 16).toString(8);

    if (isNaN(decimal) || isNaN(binario) || isNaN(octal)) {
        resultado_decimal.innerHTML = `Valor inválido`
        resultado_binario.innerHTML = `Valor inválido`
        resultado_octal.innerHTML = `Valor inválido`    
    } else {
        resultado_decimal.innerHTML = ` ${decimal}`;
        resultado_binario.innerHTML = ` ${binario}`;
        resultado_octal.innerHTML = ` ${octal}`;
    }
}

function somaDecimal() {
    const numero1 = Number(input_numero1.value)
    const numero2 = Number(input_numero2.value)
    var resultado

    resultado = numero1 + numero2
    h3_texto.innerHTML = `Resultado`
    if (isNaN(numero1) || isNaN(numero2) || isNaN(resultado)){
        div_resultado_soma.innerHTML = `Valores inválidos`
    } else {
        div_resultado_soma.innerHTML = `A soma entra os número é de ${resultado}`
    }
}

function subtracaoDecimal() {
    const numero1 = Number(input_numero3.value)
    const numero2 = Number(input_numero4.value)
    var resultado

    resultado = numero1 - numero2
    h3_texto.innerHTML = `Resultado`
    if (isNaN(numero1) || isNaN(numero2) || isNaN(resultado)){
        div_resultado_subtracao.innerHTML = `Valores inválidos`
    } else {
        div_resultado_subtracao.innerHTML = `A subtração entra os número é de ${resultado}`
    }
}

function multiplicacaoDecimal() {
    const numero1 = Number(input_numero5.value)
    const numero2 = Number(input_numero6.value)
    var resultado

    resultado = numero1 * numero2
    h3_texto.innerHTML = `Resultado`
    if (isNaN(numero1) || isNaN(numero2) || isNaN(resultado)){
        div_resultado_multiplicacao.innerHTML = `Valores inválidos`
    } else {
        div_resultado_multiplicacao.innerHTML = `A multiplicação entra os número é de ${resultado}`
    }
}

function divisaoDecimal() {
    const numero1 = Number(input_numero7.value)
    const numero2 = Number(input_numero8.value)
    var resultado

    resultado = numero1 / numero2
    h3_texto.innerHTML = `Resultado`
    if (isNaN(numero1) || isNaN(numero2) || isNaN(resultado)){
        div_resultado_divisao.innerHTML = `Valores inválidos`
    } else {
        div_resultado_divisao.innerHTML = `A divisão entra os número é de ${resultado}`
    }
}

function somaBinario() {
    const numero1 = parseInt(input_numero1.value).toString(10)
    const numero2 = parseInt(input_numero2.value, 2).toString(10)
    var resultado

    resultado = numero1 + numero2
    h3_texto.innerHTML = `Resultado`
    if (isNaN(numero1) || isNaN(numero2) || isNaN(resultado)){
        div_resultado_soma.innerHTML = `Valores inválidos`
    } else {
        div_resultado_soma.innerHTML = `A soma entra os número é de ${resultado.toString(2)}`
    }
}

function subtracaoBinario() {
    const numero1 = Number(input_numero3.value)
    const numero2 = Number(input_numero4.value)
    var resultado

    resultado = numero1 - numero2
    h3_texto.innerHTML = `Resultado`
    if (isNaN(numero1) || isNaN(numero2) || isNaN(resultado)){
        div_resultado_subtracao.innerHTML = `Valores inválidos`
    } else {
        div_resultado_subtracao.innerHTML = `A subtração entra os número é de ${resultado}`
    }
}

function multiplicacaoBinario() {
    const numero1 = Number(input_numero5.value)
    const numero2 = Number(input_numero6.value)
    var resultado

    resultado = numero1 * numero2
    h3_texto.innerHTML = `Resultado`
    if (isNaN(numero1) || isNaN(numero2) || isNaN(resultado)){
        div_resultado_multiplicacao.innerHTML = `Valores inválidos`
    } else {
        div_resultado_multiplicacao.innerHTML = `A multiplicação entra os número é de ${resultado}`
    }
}

function divisaoBinario() {
    const numero1 = Number(input_numero7.value)
    const numero2 = Number(input_numero8.value)
    var resultado

    resultado = numero1 / numero2
    h3_texto.innerHTML = `Resultado`
    if (isNaN(numero1) || isNaN(numero2) || isNaN(resultado)){
        div_resultado_divisao.innerHTML = `Valores inválidos`
    } else {
        div_resultado_divisao.innerHTML = `A divisão entra os número é de ${resultado}`
    }
}