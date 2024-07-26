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
    // Retrieving data
    var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phoneNo = document.getElementById("phone").value;
    var pass = document.getElementById("password").value;
    var confirmPass = document.getElementById("confirm-password").value;

    // Validation
    var isValid = true;
    var validationText = '';

    // Validate first name
    if (fname.trim() === '') {
        isValid = false;
        validationText += 'Please enter your first name.\n';
    }

    // Validate last name
    if (lname.trim() === '') {
        isValid = false;
        validationText += 'Please enter your last name.\n';
    }

    // Validate email
    if (email.trim() === '' || !isValidEmail(email)) {
        isValid = false;
        validationText += 'Please enter a valid email address.\n';
    }

    // Validate phone number
    if (phoneNo.trim() === '' || !isValidPhone(phoneNo)) {
        isValid = false;
        validationText += 'Please enter a valid phone number.\n';
    }

    // Validate password
    if (pass.trim() === '') {
        isValid = false;
        validationText += 'Please enter a password.\n';
    } else if (pass !== confirmPass) {
        isValid = false;
        validationText += 'Passwords do not match.\n';
    }

    // Display validation text if there are errors
    if (!isValid) {
        alert(validationText);
        return;
    }

    // Storing data
    var firstN = localStorage.setItem("fname", fname);
    var lastN = localStorage.setItem("lname", lname);
    var emAddress = localStorage.setItem("email", email);
    var telPhone = localStorage.setItem("phoneNo", phoneNo);
    var pWord = localStorage.setItem("pass", pass);

    // Retrieving stored data & Use Calculation
    var firstN = localStorage.getItem("fname", fname);
    var lastN = localStorage.getItem("lname", lname);
    var emAddress = localStorage.getItem("email", email);
    var telPhone = localStorage.getItem("phoneNo", phoneNo);
    var pWord = localStorage.getItem("pass", pass);

    let thanksMessage = `Thank you, ${fname} ${lname}. Your details have saved successfully!`;

}

function isValidEmail(email) {
    // Add your email validation logic here
    return email.includes('@') && email.includes('.');
}

function isValidPhone(phone) {
    // Add your phone number validation logic here
    return /^\d{10}$/.test(phone);
}