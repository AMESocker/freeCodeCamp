# JSON APIs and AJAX
Similar to how UIs help people use programs, APIs (Application Programming Interfaces) help programs interact with other programs. APIs are tools that computers use to communicate with one another, in part to send and receive data.

Programmers often use AJAX (Asynchronous JavaScript and XML) when working with APIs. AJAX refers to a group of technologies that make asynchronous requests to a server to transfer data, then load any returned data into the page. And the data transferred between the browser and server is often in a format called JSON (JavaScript Object Notation).

This course will teach you the basics about working with APIs and different AJAX technologies in the browser.
# 1 Handle Click Events with JavaScript using the onclick property
You want your code to execute only once your page has finished loading. For that purpose, you can attach a JavaScript event to the document called `DOMContentLoaded`. Here's the code that does this:
```js
document.addEventListener('DOMContentLoaded', function() {});
```
You can implement event handlers that go inside of the `DOMContentLoaded` function. You can implement an `onclick` event handler which triggers when the user clicks on the `#getMessage` element, by adding the following code:
```js
document.getElementById('getMessage').onclick = function(){};
```
Add a click event handler inside of the `DOMContentLoaded` function for the element with id of `getMessage`.
# 2 Change Text with click Events
When the click event happens, you can use JavaScript to update an HTML element.

For example, when a user clicks the `Get Message` button, it changes the text of the element with the class `message` to say `Here is the message`.

This works by adding the following code within the click event:
```js
document.getElementsByClassName('message')[0].textContent="Here is the message";
```
Add code inside the `onclick` event handler to change the text inside the `message` element to say `Here is the message`.