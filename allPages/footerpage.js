document.addEventListener("DOMContentLoaded", () => {
    fetch("../allPages/FOOTER.html")
       .then(response => {
        if (!response.ok) {
            throw new Error("Não foi possível carregar, tente novamente.");
        }
        return response.text();
       })
       .then(data => {
        document.getElementById("RODAPE").innerHTML = data;
        if (typeof LINKS === "function") {

        }
       })
       .catch(err => console.error("Erro ao carregar o menu tente novamente.", err));
    });