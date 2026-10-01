(() => {
if (window.__loadingExecutado) return;
window.__loadingExecutado = true;

const loadingframe = document.getElementById("loadingframe");
const m3d = document.querySelector("#m3D model-viewer");

if (!loadingframe) return;
if (!m3d) {
    loadingframe.classList.add("paginacarregada");
    document.body.classList.add("carregado");
    return;
}

function finalizarLoading() {
    loadingframe.classList.add("paginacarregada");
    document.body.classList.add("carregado");

    loadingframe.addEventListener("transitionend", () => {
        loadingframe.remove();
    }, { once: true });
}


if (m3d.loaded) {
    finalizarLoading();
    return;
}


m3d.addEventListener("load", finalizarLoading, { once: true });
m3d.addEventListener("error", finalizarLoading, { once: true });
})();