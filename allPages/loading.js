    window.addEventListener("load", () => {
    const carregar = document.getElementById("loadingframe");
    carregar.classList.add("paginacarregada");
    setTimeout(() => {
        carregar.remove();
    }, 2500);
    });