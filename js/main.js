(function () {
    const header = document.querySelector('.header__burger');
    const sport = document.querySelector('.our__sports');
    const body = document.querySelector('body');
    header.onclick = () => {
        header.classList.toggle('active');
        sport.classList.toggle('active');
        body.classList.toggle('lock')
    };
}());