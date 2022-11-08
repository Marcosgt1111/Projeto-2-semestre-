function verificar() {
    var res = document.getElementById('res')
    var genero_ame = document.getElementById('ame')
    var genero_ath = document.getElementById('ath')
    var genero_atl = document.getElementById('atl')
    var genero_bah = document.getElementById('bah')
    var genero_bot = document.getElementById('bot')
    var genero_cor = document.getElementById('cor')
    var genero_coi = document.getElementById('coi')
    var genero_cru = document.getElementById('cru')
    var genero_cui = document.getElementById('cui')
    var genero_fla = document.getElementById('fla')
    var genero_flu = document.getElementById('flu')
    var genero_for = document.getElementById('for')
    var genero_goi = document.getElementById('goi')
    var genero_gre = document.getElementById('gre')
    var genero_int = document.getElementById('int')
    var genero_pal = document.getElementById('pal')
    var genero_rbb = document.getElementById('rbb')
    var genero_san = document.getElementById('san')
    var genero_sao = document.getElementById('sao')
    var genero_vas = document.getElementById('vas')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (genero_ame.checked) {
        genero = 'America-MG'
        brasileiro = '0'
        copa = '0'
        liberta = '0'
        mundial = '0'
        img.setAttribute('src', 'america mineiro.png')
    } else   if (genero_goi.checked) {
        genero = 'Atletico Goianiense'
        brasileiro = '0'
        copa = '0'
        liberta = '0'
        mundial = '0'
        img.setAttribute('src', 'atletico goianiense.png')
    } else if (genero_ath.checked) {
        genero = 'Athletico-PR'
        brasileiro = '1'
        copa = '1'
        liberta = '0'
        mundial = '0'
        img.setAttribute('src', 'atletico paranaense.png')
    } else if (genero_atl.checked) {
        genero = 'Atlético-MG'
        brasileiro = '2'
        copa = '2'
        liberta = '1'
        mundial = '0'
        img.setAttribute('src', 'atletico mineiro.png')
    } else  if (genero_bah.checked) {
        genero = 'Bahia'
        brasileiro = '2'
        copa = '0'
        liberta = '0'
        mundial = '0'
        img.setAttribute('src', 'bahia.png')
    } else if (genero_bot.checked) {
        genero = 'Botafogo'
        brasileiro = '2'
        copa = '0'
        liberta = '0'
        mundial = '0'
        img.setAttribute('src', 'botafogo.png')
    } else if (genero_cor.checked) {
        genero = 'Corinthians'
        brasileiro = '7'
        copa = '3'
        liberta = '1'
        mundial = '2'
        img.setAttribute('src', 'corinthians.png')
    } else  if (genero_coi.checked) {
        genero = 'Coritiba'
        brasileiro = '1'
        copa = '0'
        liberta = '0'
        mundial = '0'
        img.setAttribute('src', 'coritiba.png')
    } else   if (genero_cru.checked) {
        genero = 'Cruzeiro'
        brasileiro = '4'
        copa = '6'
        liberta = '2'
        mundial = '0'
        img.setAttribute('src', 'cruzeiro.png')
    } else   if (genero_cui.checked) {
        genero = 'Cuiaba'
        brasileiro = '0'
        copa = '0'
        liberta = '0'
        mundial = '0'
        img.setAttribute('src', 'cuiaba.png')
    } else  if (genero_fla.checked) {
        genero = 'Flamengo'
        brasileiro = '8'
        copa = '4'
        liberta = '3'
        mundial = '1'
        img.setAttribute('src', 'flamengo.png')
    } else  if (genero_flu.checked) {
        genero = 'Fluminense'
        brasileiro = '4'
        copa = '1'
        liberta = '0'
        mundial = '0'
        img.setAttribute('src', 'fluminense.png')
    } else if (genero_for.checked) {
        genero = 'Fortaleza'
        brasileiro = '0'
        copa = '0'
        liberta = '0'
        mundial = '0'
        img.setAttribute('src', 'fortaleza.png')
    } else  if (genero_gre.checked) {
        genero = 'Gremio'
        brasileiro = '2'
        copa = '5'
        liberta = '3'
        mundial = '1'
        img.setAttribute('src', 'gremio.png')
    } else  if (genero_int.checked) {
        genero = 'Internacional'
        brasileiro = '3'
        copa = '1'
        liberta = '2'
        mundial = '1'
        img.setAttribute('src', 'internacional.png')
    } else  if (genero_pal.checked) {
        genero = 'Palmeiras'
        brasileiro = '11'
        copa = '4'
        liberta = '3'
        mundial = '0'
        img.setAttribute('src', 'palmeiras.png')
    } else if (genero_rbb.checked) {
        genero = 'RB Bragantino'
        brasileiro = '0'
        copa = '0'
        liberta = '0'
        mundial = '0'
        img.setAttribute('src', 'red bull bragantino.png')
    } else   if (genero_san.checked) {
        genero = 'Santos'
        brasileiro = '8'
        copa = '1'
        liberta = '3'
        mundial = '2'
        img.setAttribute('src', 'santos.png')
    } else  if (genero_sao.checked) {
        genero = 'São Paulo'
        brasileiro = '6'
        copa = '0'
        liberta = '3'
        mundial = '3'
        img.setAttribute('src', 'sao paulo.png')
    } else  if (genero_vas.checked) {
        genero = 'Vasco'
        brasileiro = '4'
        copa = '1'
        liberta = '1'
        mundial = '0'
        img.setAttribute('src', 'vasco.png')
    }
    res.style.textAlign = 'center'
    res.innerHTML = (`O ${genero} ja foi campeão:<br>${brasileiro} do Brasileirão<br>${copa} da Copa do Brasil<br>${liberta} da Libertadores da América<br>${mundial} do Mundial de Clubes<br>`)
    res.appendChild(img)
}