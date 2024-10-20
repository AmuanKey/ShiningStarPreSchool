document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the usual way

    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        // Here you would typically send the form data to a server
        // For now, we're just showing an alert
        this.reset(); // Reset the form fields
    } else {
        alert('Please fill in all fields.');
    }
});
