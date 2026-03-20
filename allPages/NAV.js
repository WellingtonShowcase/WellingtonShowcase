document.addEventListener("DOMContentLoaded", () => {
    fetch("../allPages/NAV.html")
       .then(response => {
        if (!response.ok) {
            throw new Error("Não foi possível carregar, tente novamente.");
        }
        return response.text();
       })
       .then(data => {
        document.getElementById("NAV").innerHTML = data;
        if (typeof LINKS === "function") {
            LINKS();
        }
       })
       .catch(err => console.error("Erro ao carregar o menu tente novamente.", err));
    });