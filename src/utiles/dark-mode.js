const darkMode = () => {

    const themeToggleBtn = document.querySelectorAll('#theme-toggle');
    

    //state
    const theme = localStorage.getItem('theme');

    //On mount
    theme && document.body.classList.add(theme);

    //handler
    const handleThemeToggle = () => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                localStorage.setItem('theme', 'light-mode');
            }
            else {
                localStorage.removeItem('theme');
            }
    }
    themeToggleBtn.forEach(btn => btn.addEventListener('click', handleThemeToggle));
};


export default darkMode;