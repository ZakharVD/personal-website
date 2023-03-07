// nav menu 
const menuIcon = document.getElementById('menu-logo');
const navBar = document.getElementById('nav-bar');
const navLinks = document.querySelector('ul');

menuIcon.addEventListener('click', () => {
    navBar.classList.toggle('active');
    menuIcon.classList.toggle('fa-times');
});

// navLinks.forEach((navLinks) => {
//     navLinks.addEventListener('click', () => {
//         navBar.classList.remove('active');
//         menuIcon.classList.toggle('fa-times');
//     });
// });

//---------------------------Light Dark mode Switch

const modeSwitchBtn = document.getElementById('mode-switch');

function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } 
}
// event listeners
modeSwitchBtn.addEventListener('change', switchTheme);
// check local storage for current theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        modeSwitchBtn.checked = true;
    }
}

