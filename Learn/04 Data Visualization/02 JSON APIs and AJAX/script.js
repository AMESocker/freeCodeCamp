/* //? 1 Handle Click Events with JavaScript using the onclick property
document.addEventListener('DOMContentLoaded', function(){
  // Add your code below this line
  document.getElementById('getMessage').onclick = function(){}
}); */
/* //? 2 Change Text with click Events
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('getMessage').onclick = function(){
    // Add your code below this line
  document.getElementsByClassName('message')[0].textContent = "Here is the message";
  }
}); */
/* //? 3 Get JSON with the JavaScript XMLHttpRequest Method
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('getMessage').onclick = function(){
    // Add your code below this line
    const req = new XMLHttpRequest();
    req.open("GET",'/json/cats.json', true);
    req.send();
    req.onload = function(){
      const json = JSON.parse(req.responseText);
      document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
    };
    // Add your code above this line
  };
}); */
/* //? 4 Get JSON with the JavaScript fetch method
document.addEventListener('DOMContentLoaded',function(){
  document.getElementById('getMessage').onclick= () => {
    // Add your code below this line
    fetch('/json/cats.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById('message').innerHTML = JSON.stringify(data);
    });
    // Add your code above this line
  };
}); */
/* //? 5 Access the JSON Data from an API
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('getMessage').onclick = function(){
    const req = new XMLHttpRequest();
    req.open("GET",'/json/cats.json', true);
    req.send();
    req.onload=function(){
      const json = JSON.parse(req.responseText);
      document.getElementsByClassName('message')[0].innerHTML = JSON.stringify(json);
      // Add your code below this line
      console.log(json[2].codeNames[1]);
      // Add your code above this line
    };
  };
}); */
/* //? 6 Convert JSON Data to HTML
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('getMessage').onclick = function(){
    const req = new XMLHttpRequest();
    req.open("GET",'/json/cats.json',true);
    req.send();
    req.onload = function(){
      const json = JSON.parse(req.responseText);
      let html = "";
      // Add your code below this line
      json.forEach((val)=>{
        const keys = Object.keys(val);
        html += "<div class = 'cat'>";
        keys.forEach((key)=>{
          html += "<strong>" + key + "</strong>: " + val[key] + "<br>";
        });
        html += "</div><br>";
      });
      // Add your code above this line
      document.getElementsByClassName('message')[0].innerHTML = html;
    };
  };
}); */
/* //? 7 Render Images from Data Sources
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('getMessage').onclick = function(){
    const req=new XMLHttpRequest();
    req.open("GET",'/json/cats.json',true);
    req.send();
    req.onload = function(){
      const json = JSON.parse(req.responseText);
      let html = "";
      json.forEach(function(val) {
        html += "<div class = 'cat'>";
        // Add your code below this line
        html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>";

        // Add your code above this line
        html += "</div><br>";
      });
      document.getElementsByClassName('message')[0].innerHTML=html;
    };
   };
}); */
/* //? 8 Pre-filter JSON to Get the Data You Need
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('getMessage').onclick = function(){
    const req = new XMLHttpRequest();
    req.open("GET",'/json/cats.json', true);
    req.send();
    req.onload=function(){
      let json = JSON.parse(req.responseText);
      let html = "";
      // Add your code below this line
      json = json.filter(function(val){
        return (val.id !== 1);
      });

      // Add your code above this line
       json.forEach(function(val) {
         html += "<div class = 'cat'>"

         html += "<img src = '" + val.imageLink + "' " + "alt='" + val.altText + "'>"

         html += "</div>"
       });
       document.getElementsByClassName('message')[0].innerHTML = html;
     };
   };
}); */
/* //? 9 Get Geolocation Data to Find A User's GPS Coordinates
if (navigator.geolocation){
  navigator.geolocation.getCurrentPosition(function(position) {
    document.getElementById('data').innerHTML="latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
  });
} */
//? 10 Post Data with the JavaScript XMLHttpRequest Method
document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('sendMessage').onclick = function(){

    const userName = document.getElementById('name').value;
    const url = 'https://jsonplaceholder.typicode.com/posts';
    // Add your code below this line
    const xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 201){
        const serverResponse = JSON.parse(xhr.response);
        document.getElementsByClassName('message')[0].textContent = serverResponse.userName + serverResponse.suffix;
      }
    };
    const body = JSON.stringify({userName: userName, suffix: ' loves cats!'});
    xhr.send(body);
    // Add your code above this line
  };
});