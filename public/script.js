// selecteer alle comment buttons op de pagina
document.querySelectorAll('.comment-button').forEach(button => {

    // voeg een klik event toe aan elke button
    button.addEventListener('click', function(e) {

        // stop de klik van doorgaan naar de <a> student-link eronder
        e.stopPropagation()

        // voorkom standaard gedrag van de button
        e.preventDefault()

        // navigeer naar de url die opgeslagen is in data-href
        window.location = this.dataset.href
    })
})