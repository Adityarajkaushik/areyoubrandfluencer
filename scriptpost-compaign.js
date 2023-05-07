// Get the form element
const form = document.querySelector('.form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the form data as an object
  const formData = new FormData(form);

  // Convert the form data to a JSON object
  const jsonFormData = JSON.stringify(Object.fromEntries(formData.entries()));

  // Send the form data to the server using a fetch request
  fetch('/submit-form', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: jsonFormData
  })
  .then(response => response.json())
  .then(data => {
    // Handle the server response here
    console.log(data);
  })
  .catch(error => {
    // Handle any errors here
    console.error(error);
  });
});