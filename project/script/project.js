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

$(document).ready(function () {
    $(".invisible-content").hide();
    // Once clicked add view less make it visible
    $(document).on('click', "#view-button", function () {
        var moreLessButton = $(".invisible-content").is(":visible") ? 'View More' : 'View Less';
        // toggle the hidden content and allow the text to increase and decrease 
        $(this).text(moreLessButton);
        $(this).parent(".box").find(".invisible-content").toggle();
        $(this).parent(".box").find(".visible-content").toggle();
    });
});

// ----------------------------------------------------------------------
const states = [
    {
        id: "EC",
        name: "Eastern Cape"
    },
    {
        id: "FS",
        name: "Free State"
    },
    {
        id: "GP",
        name: "Gauteng"
    },
    {
        id: "KZN",
        name: "Kwa-Zulu Natal"
    },
    {
        id: "LP",
        name: "Limpopo"
    },
    {
        id: "MP",
        name: "Mpumalanga"
    },
    {
        id: "NW",
        name: "North West"
    },
    {
        id: "NC",
        name: "Northern Cape"
    },
    {
        id: "WC",
        name: "Western Cape"
    }
];

const stateSelect = document.getElementById('province');

states.forEach(state => {
    const option = document.createElement('option');
    option.value = state.id;
    option.text = state.name;
    stateSelect.add(option);
});
//-----------------------------------------------------------------------------
//local Storage with bead-em-account

function saveDetails() {

    //Retrieving data
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNo = document.getElementById("phone").value;
    var pass = document.getElementById("password").value;

    // check retrieving data 
    // alert(fname + lname + email + phoneNo + pass );

    //storing data
    var firstN = localStorage.setItem("fname", fname);
    var lastN = localStorage.setItem("lname", lname);
    var emAddress = localStorage.setItem("email", email);
    var telPhone = localStorage.setItem("phoneNo", phoneNo);
    var pWord = localStorage.setItem("pass", pass);

}