let page = document.getElementById('buttonDiv');
const buttonColors = ['#3aa757', '#e8453c', '#f9bb28', '#4688f1'];

function constructOptions(colors) {
  for (let color of colors) {
    let button = document.createElement('button');
    button.style.backgroundColor = color;
    button.addEventListener('click', function() {
      chrome.storage.sync.set({ color }, function() {
        console.log('color is ' + color);
      });
    });
    page.appendChild(button);
  }
}

constructOptions(buttonColors);