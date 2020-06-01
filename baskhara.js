var a = 16
var b = 16
var c = 26
var cima1 = 16
var cima2 = 16
var x1 = 16
var x2 = 16
var baixo = 16

a = parseInt(prompt('valor de a'))
b = parseInt(prompt('valor de b'))
c = parseInt(prompt('valor de c'))
var delta =  Math.sqrt(((b)**2)-(4*(a)*(c)))
if (delta < 0){
    console.log('solução vazia')
}
else{
cima1 = parseFloat(-(b) + delta)
cima1 = Math.round(cima1)

cima2 = parseFloat(-(b) - delta)
cima2 = Math.round(cima2)


baixo = 2*(a)

x1 = cima1/baixo

x2 = cima2/baixo


if (x1 != Math.round(x1)){
    console.log(cima1 + `/` + baixo)
}
else{
    console.log(x1)
}

if (x2 != Math.round(x2)){
    console.log(cima2 + `/` + baixo)
}
else{
    console.log(x2)
}
}