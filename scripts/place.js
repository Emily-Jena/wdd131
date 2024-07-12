// Get the current year
const currentYear = new Date().getFullYear();

// Output the copyright year
const copyrightYear = document.getElementById('copyright-year');
copyrightYear.textContent = currentYear;

// Output the last modified date
const lastModified = document.getElementById('last-modified');
lastModified.textContent = document.lastModified;

//-----------------------------------------------------------
// The temperature and wind speed values (Degree Celsius & km/h)
const temp = 22;
const windSpeed = 11;

// Calculate the wind chill factor & Verify if conditions are true
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {

        // Wind Chill formula
        const windChill = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temp * Math.pow(windSpeed, 0.16));

        return Math.round(windChill);
    } else {
        return 'N/A';
    }
}

// Calculate and display the wind chill factor
const windChill = calculateWindChill(temp, windSpeed);
document.querySelector('.wind-chill').textContent = windChill !== 'N/A' ? `${windChill} °C` : windChill;

// ----------------------------------------------------------