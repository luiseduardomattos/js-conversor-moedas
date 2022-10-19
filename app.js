function ConverterDeDolarParaReal(){
//1 - Pegar o valor que foi digitado no campo com id #valor
let valorEmDolar = document.getElementById("valor").value

//2 - Converter o valor de Dólar para Real
let valorConvertido = valorEmDolar * 5.3

//3 - Mostrar o valor no h2 com id #valorConvertido
document.getElementById("valorConvertido").innerText = valorConvretido.toFixed(2)
}