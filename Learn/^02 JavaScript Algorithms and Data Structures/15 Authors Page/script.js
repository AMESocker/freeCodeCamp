const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
  .then((res) => console.log(res))

//?2 The 'Fetch API' is a built-in JavaScript interface to make network requests to a server. It has a 'fetch()' method you can use to make 'GET', 'POST', 'PUT', or 'PATCH' requests. In this project, you'll make a 'GET' request to a URL for a JSON file with information about authors on freeCodeCamp News. Here is how you can make a 'GET' request with the fetch() method:
//fetch("url-goes-here")

//?3 The 'fetch()' method returns a 'Promise', which is a placeholder object that will either be fulfilled if your request is successful, or rejected if your request is unsuccessful. If the 'Promise' is fulfilled, it resolves to a 'Response' object, and you can use the '.then()' method to access the 'Response'. Here's how you can chain '.then()' to the 'fetch()' method:
// fetch("sample-url-goes-here")
//  .then((res) => res)