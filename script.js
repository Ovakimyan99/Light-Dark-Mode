const toggleSwitch = document.querySelector('input[type="checkbox"]');
const navMenu = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const images = document.querySelectorAll('.image-container img');
const textBox = document.getElementById('text-box');

// Dark or Light Images
function imagesMode(color) {
    images.forEach(img => {
        img.src = `./img/undraw_conceptual_idea_${color}.svg`;
    })
}

// Toggle Dark or Light Mode
function toggleDarkLightMode(isDark) {
    navMenu.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? imagesMode('dark') : imagesMode('light');
    isDark ?
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') :
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}

// Switch Theme Dinamically
function switchTheme(event) {
    if (event.target.checked) {
        // dark
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark')
        toggleDarkLightMode(true);
    } else {
        // light
        document.documentElement.setAttribute('data-theme', null);
        localStorage.setItem('theme', 'light')
        toggleDarkLightMode(false);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme)
const currentTheme = localStorage.getItem('theme')

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleDarkLightMode(true)
    }
}
