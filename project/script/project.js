// -------------------------------------------------
// Footer Dates - Get the current year
const currentYear = new Date().getFullYear();

// Output the copyright year
const copyrightYear = document.getElementById('copyright-year');
copyrightYear.textContent = currentYear;

// --------------------------------------------------
// Hamburger menu

const hamButton = document.querySelector('.toggle-button');
const navigation = document.querySelector('.navbar-links');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('active');
});

// ----------------------------------------------------------
// View Button - hide & open

$(document).ready(function(){
    $(".invisible-content").hide();
    // Once clicked add view less make it visible
    $(document).on('click',"#view-button",function(){
        var moreLessButton = $(".invisible-content").is(":visible")?'View More':'View Less';
        // toggle the hidden content and allow the text to increase and decrease 
        $(this).text(moreLessButton);
        $(this).parent(".box").find(".invisible-content").toggle();
        $(this).parent(".box").find(".visible-content").toggle();
    });
});