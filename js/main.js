let header = document.querySelector('header'), menu = document.querySelector('#menu-but'), nav = 
    document.querySelector('nav');

window.onscroll = () => {
    header.classList.toggle('active', window.scrollY > 10);
    menu.classList.remove('fa-times');
    nav.classList.remove('active');
}

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    nav.classList.toggle('active');
}