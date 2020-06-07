const endPoint = "http://localhost:3000/api/v1/games"

document.addEventListener('DOMContentLoaded', () => {
    getGames()
})

function getGames() {
    fetch(endPoint)
        .then(r => r.json())
        .then(games => {
            console.log(games);
        })

}
