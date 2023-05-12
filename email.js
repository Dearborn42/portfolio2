const form = document.querySelector("form");
// gets form's data, encodes it and sends it to the server
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const fd = new FormData(form);

  const urlEncoded = new URLSearchParams(fd).toString();

  fetch('http://localhost:3000/email', {
    method: "POST",
    body: urlEncoded,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })


});