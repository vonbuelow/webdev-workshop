// To make a button run code when clicked:
// 1. Give the button an id in HTML: <button id="hello-btn">Say hello</button>
// 2. Get the element and add a click listener.
// This is connected to the first button we saw in project.html

(function () {
  var helloBtn = document.getElementById('hello-btn');
  if (helloBtn) {
    helloBtn.addEventListener('click', function () {
      alert('Hello');
    });
  }

  // --- Team page (team.html) — Step 3: wire up the "Say hi" button ---
  // Step 1 & 2 are in team.html (add team cards, add button with id="say-hi-btn").
  // Here: get the button by id, then add a click listener. Uncomment the block below or write your own.
  // var sayHiBtn = document.getElementById('say-hi-btn');
  // if (sayHiBtn) {
  //   sayHiBtn.addEventListener('click', function () {
  //     alert('Hi!');
  //     // or: console.log('Hi!');  (then open DevTools F12 to see it)
  //   });
  // }
})();
