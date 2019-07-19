let authorNameDiv = document.getElementById("authorNameDiv")
let newsTitleDiv = document.getElementById("newsTitleDiv")
let descriptionDiv = document.getElementById("urlDiv")
let urlToImageDiv = document.getElementById("publishedAtDiv")
let mainNews = document.getElementById("mainNews")

//newsArray = Object.values(news)
//console.log(newsArray)


//console.log(news.articles.author)
let newsArticles = news.articles

//console.log(newsArticles)

let theNews = newsArticles.map(news => {
    
    let newsDiv = `<div class="articleContainer">
                    <div class="newsTitle"><h3>${news.title}</h3></div>
                    <div class="authorName">Author: ${news.author}</div>
                    <div class="description">Description: ${news.description}</div>
                    <div><img class="photo" src="${news.urlToImage}" onerror="this.onerror=null; this.src='http://webint.io/img/f5868460-8c20-11e9-9897-b59dd66c0032';"></img></div>


                    <div class="articleLink"><a href="${news.url}">Link to Article</a></div>           
                    <div "publishedOn">Release Date: ${news.publishedAt}</div>
                    <div "content"> Content: ${news.content}</div>
                    </div>`

        return newsDiv




})
/*
let theNews = news.articles.map(article => {
    

})
*/

mainNews.innerHTML = theNews.join("")

