const botaoEntrar = document.querySelector('.menu-open')

const botaoSair = document.querySelector('.menu-close')

const items = document.querySelector('.nav-list')

botaoSair.style.display = 'none';


function entrar() {
    botaoSair.style.display = 'block'
    items.style.display = 'flex'
    botaoEntrar.style.display = 'none'
    document.body.classList.toggle("show-mobile-menu")
}

function sair() {
    botaoSair.style.display = 'none'
    items.style.display = 'none'
    botaoEntrar.style.display = 'block'

    document.body.classList.remove("show-mobile-menu");

}