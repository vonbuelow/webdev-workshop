// To make a button run code when clicked:
// 1. Give the button an id in HTML: <button id="hello-btn">Say hello</button>
// 2. Get the element and add a click listener:
// This is connected to the first button we saw in project.html 

(function () {
  var helloBtn = document.getElementById('hello-btn');
  if (helloBtn) {
    helloBtn.addEventListener('click', function () {
      alert('Hello');
    });
  }
})();
