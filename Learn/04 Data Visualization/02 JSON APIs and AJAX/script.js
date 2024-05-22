document.addEventListener('DOMContentLoaded', function(){
  //? 1 Add your code below this line
  document.getElementById('getMessage').onclick = function(){
    //? 2 Add your code below this line
    document.getElementsByClassName('message')[0].textContent = "Here is the message";
  };

});