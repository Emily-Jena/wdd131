// -------------------------------------------------
// Footer Dates
// Get the current year
const currentYear = new Date().getFullYear();

// Output the copyright year
const copyrightYear = document.getElementById('copyright-year');
copyrightYear.textContent = currentYear;

// Output the last modified date
const lastModified = document.getElementById('last-modified');
lastModified.textContent = document.lastModified;

// ------------------------------------------------------
// Navigation Button 
// hamburgerbutton on the  mobile navigation
const navLinks = document.querySelector('.nav-links');
const templeHamButton = document.querySelector('.hamburger-button');

//Event listener and toggle to hamburger button
templeHamButton.addEventListener('click', () => {
    templeHamButton.classList.toggle('open')
    navLinks.classList.toggle('show-nav');
});