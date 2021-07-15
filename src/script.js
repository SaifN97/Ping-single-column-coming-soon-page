const form = document.querySelector(".form");
const email = document.querySelector("#email");
const errorTxt = document.querySelector(".errorTxt");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const emailVal = email.value.trim();

  if (emailVal === "") {
    form.classList.add("error");
    errorTxt.innerText = "Email cannot be empty.";
  } else if (!isEmail(emailVal)) {
    form.classList.add("error");
    errorTxt.innerText = "Please enter a valid email.";
  } else return;
});

function isEmail(email) {
  return /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);
}
