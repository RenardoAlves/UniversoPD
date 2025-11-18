document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const menuNav = document.getElementById('menuNav');

    if (!menuToggle || !menuNav) {
        console.error('menuToggle ou menuNav não encontrado. Verifique IDs no HTML.');
        return;
    }

    // Acessibilidade
    menuToggle.setAttribute('role', 'button');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-controls', 'menuNav');
    menuNav.setAttribute('aria-hidden', 'true');

    // Clique / touch
    menuToggle.addEventListener('click', () => {
        const aberto = menuNav.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', aberto ? 'true' : 'false');
        menuNav.setAttribute('aria-hidden', aberto ? 'false' : 'true');
    });

    // Fechar menu ao clicar em link interno (bom para mobile)
    menuNav.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
            menuNav.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
            menuNav.setAttribute('aria-hidden', 'true');
        });
    });
});