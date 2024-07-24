// -------------------------------------------------
// Footer Dates - Get the current year
const currentYear = new Date().getFullYear();

// Output the copyright year
const copyrightYear = document.getElementById('copyright-year');
copyrightYear.textContent = currentYear;

// --------------------------------------------------
// Hamburger menu

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.nav-links');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});
