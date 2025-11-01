const toggleButton = document.querySelector('#toggle-button');
const pageBody = document.querySelector('#page-body');

// 2. Tell the button to listen for a click
toggleButton.addEventListener('click', function() {
    // 3a. Toggle the 'dark-mode' class on the body
    pageBody.classList.toggle('dark-mode');
  
    if (pageBody.classList.contains('dark-mode')) {
        toggleButton.textContent = "Turn On The Light";
    } else {
        toggleButton.textContent = "Turn Off The Light";
    }

});


