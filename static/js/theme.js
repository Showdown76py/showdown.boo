const toggleButtons = document.querySelectorAll('.theme-button');

function applyTheme(theme) {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(theme);
    document.cookie = "theme=" + theme + "; path=/; max-age=31536000";

    document.querySelectorAll('.theme-button i').forEach(icon => {
        icon.classList.toggle('fa-moon', theme === 'dark-theme');
        icon.classList.toggle('fa-sun', theme === 'light-theme');
    });
}

function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-theme' : 'light-theme';
}

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = document.cookie.replace(/(?:(?:^|.*;\s*)theme\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    applyTheme(savedTheme || getSystemTheme());
});

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentTheme = document.body.classList.contains('light-theme') ? 'light-theme' : 'dark-theme';
        applyTheme(currentTheme === 'light-theme' ? 'dark-theme' : 'light-theme');
    });
});
