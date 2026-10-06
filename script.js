// MOBILE MENU

function toggleMenu() {

    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("show");
    }

}


// ENQUIRY MODAL

function openEnquiry() {

    const modal = document.getElementById("enquiryModal");

    if (modal) {
        modal.style.display = "flex";
    }

}


function closeEnquiry() {

    const modal = document.getElementById("enquiryModal");

    if (modal) {
        modal.style.display = "none";
    }

}


// ENQUIRY SUBMIT

function submitEnquiry(event) {

    event.preventDefault();

    alert(
        "Thank you! Your enquiry has been submitted. Our dealer will contact you soon."
    );

    closeEnquiry();

    event.target.reset();

}


// PROPERTY SEARCH

function searchProperty() {

    const location =
        document.getElementById("location").value;

    const propertyType =
        document.getElementById("propertyType").value;

    const budget =
        document.getElementById("budget").value;


    if (
        location === "" &&
        propertyType === "" &&
        budget === ""
    ) {

        alert("Please select or enter a property requirement.");

        return;
    }


    alert(
        "Searching properties...\n\n" +
        "Location: " + (location || "Any") +
        "\nProperty Type: " + (propertyType || "Any") +
        "\nBudget: " + (budget || "Any")
    );

}


// CONTACT FORM

function submitContact(event) {

    event.preventDefault();

    alert(
        "Thank you for contacting Sri Mangalam Property Dealer!"
    );

    event.target.reset();

}