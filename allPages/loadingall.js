const loadingframe = document.getElementById("loadingframe");
const m3d = document.querySelector("#m3D model-viewer");
const carregado = new Promise((resolve) => {
    if (document.readyState === "complete") {
        resolve();
    } else {
        window.addEventListener("load", resolve, { once: true });
    }
});


const carregado3d = new Promise((resolve) => {
    if (!m3d) {
        resolve();
        return;
    }

    if (m3d.loaded) {
        resolve();
    } else {
        m3d.addEventListener("load", resolve, { once: true});
    }
});


Promise.all([carregado, carregado3d]).then(() => {
    loadingframe.classList.add("paginacarregada");

    document.body.classList.add("carregado");

    setTimeout(() => {
        carregar.remove();
    }, 500);
});