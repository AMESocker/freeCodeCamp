//?One common aspect of web development is learning how to fetch data from an external API, then work with asynchronous JavaScript. This freeCodeCamp authors page project will show you how to use the fetch method, then dynamically update the DOM to display the fetched data. This project will also teach you how to paginate your data so you can load results in batches.
const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = []

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
  .then((res) => res.json())
  .then((data)=>{
    authorDataArr = data
    displayAuthors(authorDataArr.slice(startingIndex,endingIndex))
  })
  .catch((err)=>{
    authorContainer.innerHTML = `<p class="error-msg">There was an error loading the authors</p>`;
});


const fetchMoreAuthors = () => {
  startingIndex += 8;
  endingIndex += 8;
  displayAuthors(authorDataArr.slice(startingIndex,endingIndex))
  if(authorDataArr.length <= endingIndex){
    loadMoreBtn.disabled = true;
    loadMoreBtn.style.cursor = 'not-allowed'
    loadMoreBtn.textContent = 'No more data to load'
  }
}

const displayAuthors = (authors) => {
  authors.forEach(({author, image, url, bio}, index)=>{
    authorContainer.innerHTML += `
    <div id="${index}" class='user-card'>
      <h2 class="author-name">${author}</h2>
      <img class="user-img" src="${image}" alt="${author} avatar" text="avatar"/>
      <div class="purple-divider"></div>
      <p class="bio">${bio.length > 50 ? bio.slice(0, 50) + '...' : bio}</p>
      <a class="author-link" href="${url}" target="_blank">${author}'s author page</a>
    </div>
    `;
  })
}

loadMoreBtn.addEventListener('click',fetchMoreAuthors)
//?2 The 'Fetch API' is a built-in JavaScript interface to make network requests to a server. It has a 'fetch()' method you can use to make 'GET', 'POST', 'PUT', or 'PATCH' requests. In this project, you'll make a 'GET' request to a URL for a JSON file with information about authors on freeCodeCamp News. Here is how you can make a 'GET' request with the fetch() method:
//fetch("url-goes-here")

//?3 The 'fetch()' method returns a 'Promise', which is a placeholder object that will either be fulfilled if your request is successful, or rejected if your request is unsuccessful. If the 'Promise' is fulfilled, it resolves to a 'Response' object, and you can use the '.then()' method to access the 'Response'. Here's how you can chain '.then()' to the 'fetch()' method:
// fetch("sample-url-goes-here")
//  .then((res) => res)

//?6 The .catch() method is another asynchronous JavaScript method you can use to handle errors. This is useful in case the Promise gets rejected. Chain .catch() to the last .then(). Pass in a callback function with err as the parameter. Inside the callback, use console.error() to log possible errors to the console with the text There was an error: ${err}. Since you're using err in the text, don't forget to use a template literal string with backticks (``) instead of single or double quotes. Note: Now you can terminate your code with a semicolon. You couldn't do that in the previous steps because you'll signal to JavaScript to stop parsing your code, which will affect the fetch() syntax.