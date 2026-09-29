if (window.__loadingExecutado) {
const frame = document.getElementById("loadingframe");
    if (frame) frame.remove();
    } else {
    window.__loadingExecutado = true;

    const loadingframe = document.getElementById("loadingframe");

const carregado = new Promise((resolve) => {
if (document.readyState === "complete") {
    resolve();
} else {
    window.addEventListener("load", resolve, { once: true });
}
});


const carregado3d = new Promise(async (resolve) => {
    try {
        if ("customElements" in window) {
            await customElements.whenDefined("model-viewer");
    }

const m3d = document.querySelector("#m3D model-viewer");

if(!m3d){
    resolve();
    return;
}

    if (m3d.loaded) {
        resolve();

    } else {
        m3d.addEventListener("load", resolve, { once: true });

        m3d.addEventListener("error", resolve, { once: true });
    }
} catch (error) {
    resolve();
}
});


Promise.all([carregado, carregado3d]).then(() => {
    if (!loadingframe) return;

    loadingframe.classList.add("paginacarregada");
    document.body.classList.add("carregado");

    loadingframe.addEventListener("transitionend", () => {
        loadingframe.remove();
    }, { once: true });
});
}