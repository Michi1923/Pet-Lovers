document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace recargue la página
    document.getElementById('about-card').classList.remove('hidden');
});

document.getElementById('close-card-btn').addEventListener('click', function() {
    document.getElementById('about-card').classList.add('hidden');
});
document.querySelector('form').addEventListener('submit', function(event) {
    var valid = true;
    var inputs = this.querySelectorAll('input, textarea');
    inputs.forEach(function(input) {
      if (!input.value) {
        valid = false;
        input.classList.add('is-invalid');
      } else {
        input.classList.remove('is-invalid');
      }
    });

    if (!valid) {
      event.preventDefault();
      alert('Por favor, complete todos los campos.');
    }
  });
  function showSuccessMessage(event) {
    event.preventDefault(); // Prevent the form from submitting the usual way
    document.getElementById('success-message').style.display = 'block';
    setTimeout(function() {
        event.target.submit(); // Submit the form after showing the message
    }, 2000); // Wait for 2 seconds before submitting the form
}

