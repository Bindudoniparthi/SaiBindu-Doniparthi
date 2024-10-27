// Display a greeting based on the time of day
function displayGreeting() {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    
    alert(greeting + " Welcome to Delicious Delights!");
}

// JavaScript to show an alert when the form is submitted
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    alert("Thank you for contacting us! We'll get back to you soon.");
    document.getElementById("contactForm").reset(); // Reset the form
});
