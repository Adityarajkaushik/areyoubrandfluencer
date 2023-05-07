const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  sendEmail();
});

function sendEmail() {
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;
  
  // Send email using email service or backend API
  
  
  // Clear form inputs
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';
  
  // Show success message to user
  alert('Thank you for your message!');
}
