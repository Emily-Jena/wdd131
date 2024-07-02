//Act 1
        // declare three (3) variables that hold references to the input, button, and list elements.

        const input = document.querySelector('#favchap');
        const button = document.querySelector('button');
        const list = document.querySelector('list');

//Act2
//Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function () {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        
        //-----------------------------------------
        //Act1
        // Create a li element that will hold each entries chapter title and an associated delete button.
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        //Populate the li element variable's textContent or innerHTML with the input value.
        li.textContent = input.value;

        //Populate the button textContent with a ❌.
        deleteButton.textContent = '❌';

        //Append the li element variable with the delete button.
        li.appendChild(deleteButton)

        //Append the li element variable to the unordered list in your HTML.
        list.appendChild(li);
        // -----------------------------------------------------
    
//Add an event listener to the delete button that removes the li element when clicked.
deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

    //Change the input value to nothing or the empty string to clean up the interface for the user.
    input.value = '';
}

    //Regardless if a list item was created or not, the focus (active cursor) should be sent to the input element.
    input.focus();
});