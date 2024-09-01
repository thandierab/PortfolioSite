document.addEventListener("DOMContentLoaded", function () {
  // Select the form element
  form = document.querySelector("form");

  if (form) {
    // Add event listener to the form
    form.addEventListener("submit", function (event) {
      // Prevent the default form submission
      event.preventDefault();

      // Get the value from the message field
      message = document.getElementById("message").value;

      // Create the mailto link
      mailtoLink = `mailto:thandierabasimane@gmail.com?subject=Work%20Equiry&body=${encodeURIComponent(
        message
      )}`;

      // Redirect to mailto link
      window.location.href = mailtoLink;
    });
  } else {
    console.error("Form element not found.");
  }
});
