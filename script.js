
//Nav Scroll//

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 185 || document.documentElement.scrollTop > 185) {
document.getElementById("navbar").style.padding = "20px 0px 0px 0px";
document.getElementById("navbar").style.background="rgba(0, 0, 0, 0.2)";
// rgba(246, 192, 178, 0.6)

} else {
document.getElementById("navbar").style.padding = "0px 0px 0px 0px";
document.getElementById("navbar").style.background="transparent";
}
}

// Nav Highlight Selected//

var header = document.getElementById("navLinks");

var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


// Type Effect //
const texts = ['Software Engineer', 'Salesperson'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
  if (count === texts.length){
    count = 0;
  }
  currentText = texts[count];
  letter = currentText.slice(0, ++index);

  document.querySelector('.typing').textContent = letter;
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 300);
}());
