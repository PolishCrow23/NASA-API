document.querySelector('button').addEventListener('click', getData)

function getData() {
let choice = document.querySelector('input').value

    fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${choice}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {

    console.log(data)

    document.querySelector('#title').innerText = data.title
    document.querySelector('#title').classList.toggle('hidden')

    if (data.media_type === 'image') {
        document.querySelector('img').src = data.hdurl

    } else if (data.media_type === 'video') {  
        document.querySelector('iframe').src = data.url
        document.querySelector('iframe').classList.toggle('hidden')
    }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}