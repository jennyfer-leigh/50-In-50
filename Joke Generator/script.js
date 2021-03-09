const jokeEle = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();


//fetch a promise
// function generateJoke() {
//     const config = {
//         headers: {
//             Accept: 'application/json'
//         }
//     }
//     fetch('https://icanhazdadjoke.com', config)
//     .then((result) => result.json())
//     .then((data) => {jokeEle.innerHTML = data.joke});
// }

// async await function
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    fetch('https://icanhazdadjoke.com', config)
    const result = await fetch ('https://icanhazdadjoke.com',
    config);
    const data = await result.json();

jokeEle.innerHTML = data.joke;

}