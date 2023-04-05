const news = document.getElementById('news')
const url = 'https://jsonplaceholder.typicode.com/posts'

const getData = async (url) => {
    await fetch(url)
        .then(res => res.json())
        .then(data => {
            data.forEach(element => {
                const div = document.createElement('div')
                div.innerHTML = `
                    <div class="news_intro">
                         <img src="images/img_1.png" alt="">
                         <h2>${element.title}</h2>
                         <p>${element.body}</p>
                    </div>
                `
                news.append(div)
            })
        })
}
getData(url)
