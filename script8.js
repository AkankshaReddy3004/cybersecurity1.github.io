document.getElementById('supportForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get form data
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Simulate sending the data (replace this with actual backend logic)
  setTimeout(function() {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = <p>Thank you, ${name}! Your message has been received. We'll get back to you at ${email} as soon as possible.</p>;
  }, 1000);
});