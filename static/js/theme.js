const button = document.getElementById('theme-toggle-btn');
const buttondiv = document.querySelectorAll('.theme-button');


function applyTheme(theme) {
    var currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
    document.body.classList.remove(currentTheme);
    document.body.classList.add(theme);
    document.cookie = "theme=" + theme;
}

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    const systemTheme = getSystemTheme();

    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme(systemTheme);
    }
});


for (let i = 0; i < buttondiv.length; i++) {
    console.log('Button:', buttondiv[i]);
    buttondiv[i].addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
        const newTheme = currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme';
        applyTheme(newTheme);
        document.cookie = "theme=" + newTheme;
    });
}
