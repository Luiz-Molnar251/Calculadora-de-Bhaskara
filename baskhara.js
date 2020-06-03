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
    window.onload = function(){

document.getElementById('resultados').innerHTML = 'Os resultados são ' + x1+ ' e ' + x2 + ' para a = ' + a + ', b = ' + b + ' e c = ' + c + '.'

document.getElementById('substituicao').innerHTML = 'Substituição:   {-(' + b + ') +/- √[' + b + '^2 - 4*' + a + '*' + c + ']} / {2*' + a  + '}'
document.getElementById('p1').innerHTML = '1o passo:    {' + -b + ' +/- √[' + b**2 + ' - ' + 4*a*c + ']} / {' + baixo  + '}'

document.getElementById('p2').innerHTML = '2o passo:   {' + -b + ' +/- √' + delta + '} / {' + baixo + '}'

document.getElementById('raiz').innerHTML = 'Resolução da raiz:   {' + -b + ' +/- ' + (Math.sqrt(delta)) + '} / {' + baixo + '}'
  
document.getElementById('cima1').innerHTML = '1a opção (+):     {' + cima1 + '} / {' + baixo + '}'

document.getElementById('cima1,2').innerHTML = '1a opção (+):    ' + x1

document.getElementById('cima2').innerHTML = '2a opção (-):     {' + cima2 + '} / {' + baixo + '}'

document.getElementById('cima2,2').innerHTML = '2a opção (-):    ' + x2



}