// Get the current year
const currentYear = new Date().getFullYear();

// Output the copyright year
const copyrightYear = document.getElementById('copyright-year');
copyrightYear.textContent = currentYear;

// Output the last modified date
const lastModified = document.getElementById('last-modified');
lastModified.textContent = document.lastModified;

//------------------------------------------
