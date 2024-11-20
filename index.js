document.querySelectorAll('.delete-btn').forEach((button, index) => {
    button.onclick = function () {
        // console.log(this.parentElement.previousElementSibling);
        const parentSibling = this.parentElement.previousElementSibling;
        if (parentSibling && parentSibling.tagName === 'P') {
            parentSibling.innerHTML = 'Player ' + (index + 1);
        }
    };
});


let currentIndex = 0; // Initialize the index to track the current <li>

document.querySelector('.addPlayer-btn').onclick = function() {
    // Get the input field
    const inputField = document.querySelector('.addPlayerInput input[type="text"]');
    const playerName = inputField.value.trim(); // Get the value from the input field

    // Select the first team player list items
    const playerItems = document.querySelectorAll('ul li p');
    
    // Check if the current index is within the range of player items
    if (currentIndex < playerItems.length) {
        playerItems[currentIndex].textContent = playerName; // Set the text to the input value
        currentIndex++; // Increment the index for the next input
    } else {
        alert('All player slots are filled!'); // Alert if all slots are filled
    }

    // Clear the input field after adding the player
    inputField.value = '';
};