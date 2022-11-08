function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO} verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementById('radsex')
        var idade = ano - Number(fano.value)
        var genero_mas = document.getElementById('masc')
        var genero_fem = document.getElementById('fem')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (genero_mas.checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 4) {
                //bebe
                img.setAttribute('src', 'Bebe.png')
            } else if (idade >= 4 && idade <10) {
                //criança
                img.setAttribute('src', 'criancaH.png')
            } else if (idade >= 10 && idade < 18) {
                //jovem
                img.setAttribute('src', 'jovem H.png')
            } else if (idade >= 18 && idade < 60) {
                //adulto
                img.setAttribute('src', 'adultoH.png')
            } else if (idade >= 60 && idade < 118) {
                //idoso
                img.setAttribute('src', 'idoso.png')
            } else {
                //caveira
                img.setAttribute('src', 'caveira.png')
            }
        } else if (genero_fem.checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 3) {
                //bebe
                img.setAttribute('src', 'Bebe.png')
            } else if (idade >= 4 && idade <10) {
                //criança
                img.setAttribute('src', 'crianca M.png')
            } else if (idade >= 11 && idade < 17) {
                //jovem
                img.setAttribute('src', 'jovem M.png')
            } else if (idade >= 18 && idade < 60) {
                //adulta
                img.setAttribute('src', 'adultoM.png')
            } else if (idade >= 60 && idade < 118) {
                //idosa
                img.setAttribute('src', 'idosa.png')
            } else {
                //caveira
                img.setAttribute('src', 'caveira.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML =  `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}