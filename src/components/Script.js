function EasterEgg1(){
    document.addEventListener('DOMContentLoaded', function(){
        var header = document.querySelector('header');
    
        header.addEventListener('click', function(){
          var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
          header.style.backgroundColor = randomColor;
        });
      });
}

export default EasterEgg1;
