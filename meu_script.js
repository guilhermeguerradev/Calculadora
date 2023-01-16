function calcular (tipo, valor) {


    if (tipo == "acao") {
        if (valor == "c") {
            document.getElementById("tela").value = ""
        }
        else if (valor == "*" || valor == "/" || valor == "+" || valor =="-" || valor == "." ) {

            document.getElementById("tela").value += valor
        }

        else if (valor == "=") {
            var resultado = eval(document.getElementById("tela").value)
            document.getElementById("tela").value = resultado
        }
    }

    else if (tipo == "valor")
        document.getElementById("tela").value += valor
}