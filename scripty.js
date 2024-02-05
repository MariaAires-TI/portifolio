function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light')


    // pegar a tag img
    const img = document.querySelector("#profile img")
    // substituir a imagem

    if (html.classList.contains('light')) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute('src', "./avatarMaria-light.png");
        img.setAttribute('alt', "Maria sorrindo em um evento durante o dia");       
    } else {
        //se tiver sem light mode, manter a imagem
        img.setAttribute('src', "./avatarMaria.png");
        img.setAttribute('alt', "Maria sorrindo em um eventoa noite");
    }

    
}