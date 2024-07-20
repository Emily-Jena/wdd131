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
// -------------------------------------------------
// Product Name Array
const products = [
  {
    id: "fc - 1888",
    name: "flux capacitor",
    "averagerating": 4.5
  },
  {
    id: "fc - 2050",
    name: "power laces",
    "averagerating": 4.7
  },
  {
    id: "fs - 1987",
    name: "time circuits",
    "averagerating": 3.5
  },
  {
    id: "ac - 2000",
    name: "low voltage reactor",
    "averagerating": 3.9
  },
  {
    id: "jj - 1969",
    name: "warp equalizer",
    "averagerating": 5.0
  }
];

const productNameSelect = document.getElementById('product-name');

// Populating options for product name
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.text = product.name;
  productNameSelect.add(option);
});

//-----------------------------------------------------
const reviewDisplay = document.querySelector("review-count");

// Review count from localStorage & Increment
let reviewCount = Number(window.localStorage.getItem('reviewCount')) || 0;

if (reviewCount !== 0) {
  reviewDisplay.textContent = reviewCount; 
} 

reviewCount++;
localStorage.setItem('reviewCount', reviewCount);

// Display result
document.getElementById('review-count').textContent = reviewCount;
//----------------------------------------------------

