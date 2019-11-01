// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardCont = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        console.log(response)
        for (i in response.data.articles){
            response.data.articles[i].forEach(element => {
                cardCont.appendChild(cardCreator(element))
            });
        }

    })

function cardCreator(article){
    //create
    const card = document.createElement('div'),
    headline = document.createElement('div'),
    author = document.createElement('div'),
    imgCont = document.createElement('div'),
    img = document.createElement('img'),
    by = document.createElement('span')
    //nest
    card.append(headline, author)
    author.append(imgCont, by)
    imgCont.append(img)
    //classes
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgCont.classList.add('img-container')
    //content
    headline.textContent = article.headline
    img.src = article.authorPhoto
    by.textContent = `By ${article.authorName}`

    return card
}
