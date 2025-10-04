// script.js
window.onload = function() {
    // Defina o link para o qual você quer redirecionar o usuário
    const destinationURL = "https://wa.me/554891103378"; // <-- TROQUE ESTE LINK!

    // Define o tempo de espera em milissegundos.
    // Para um redirecionamento quase instantâneo, você pode usar um valor baixo como 100 ou até 0.
    const delay = 500; // Meio segundo de espera

    // Função que redireciona o usuário
    setTimeout(function() {
        window.location.href = destinationURL;
    }, delay);

};



