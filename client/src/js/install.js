const installBtn = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Added event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;

    installBtn.classList.toggle('hidden', false);
});
