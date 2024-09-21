function converterDecimal() {
    var decimal = Number(input_numero.value);
    let octal = decimal.toString(8);
    let hexadecimal = decimal.toString(16);
    let binario = decimal.toString(2);

    resultado_binario.innerHTML = ` ${binario}`;
    resultado_octal.innerHTML = ` ${octal}`;
    resultado_hexadecimal.innerHTML = ` ${hexadecimal}`;
}

function converterBinario() {
    var binario = Number(input_numero.value);
    let decimal = parseInt(binario, 2).toString(10);
    let octal = parseInt(binario, 2).toString(8);
    let hexadecimal = parseInt(binario, 2).toString(16);

    resultado_decimal.innerHTML = ` ${decimal}`;
    resultado_octal.innerHTML = ` ${octal}`;
    resultado_hexadecimal.innerHTML = ` ${hexadecimal}`;
}

function converterOctal() {
    var octal = Number(input_numero.value);
    let decimal = parseInt(octal, 8);
    let binario = parseInt(octal, 8).toString(2);
    let hexadecimal = parseInt(octal, 8).toString(16);

    resultado_decimal.innerHTML = ` ${decimal}`;
    resultado_binario.innerHTML = ` ${binario}`;
    resultado_hexadecimal.innerHTML = ` ${hexadecimal}`;
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