(function() {
  // check and set global guard variable
  // if content script is injected into the same page again, it will do nothing
  if (window.hasRun) {
    return;
  }

  window.hasRun = true;

  function insertBeast(beastURL) {
    removeExistingBeasts();

    let beastImage = document.createElement('img');
    beastImage.setAttribute('src', beastURL);
    beastImage.style.height = '100vh';
    beastImage.className = 'beastify-image';
    document.body.appendChild(beastImage);
  }

  function removeExistingBeasts() {
    let existingBeasts = document.querySelectorAll('.beastify-image');
    for (let beast of existingBeasts) {
      beast.remove();
    }
  }

  browser.runtime.onMessage.addListener(message => {
    console.log(message)
    
    if (message.command === 'beastify') {
      insertBeast(message.beastURL);
    } else if (message.command === 'reset') {
      removeExistingBeasts();
    }
  });

})();