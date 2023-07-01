document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    
    fot (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            console.log(botao)
        })
    }
})