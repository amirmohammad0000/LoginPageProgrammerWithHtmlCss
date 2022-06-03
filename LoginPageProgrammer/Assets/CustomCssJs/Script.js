"use strict";

let ButtonContinueEmail = document.querySelector(".button_continue_email");
let ButtonContinuePassword = document.querySelector(
  ".button_continue_password"
);
let ButtonLogin = document.querySelector(".button_login");

let SectionPasswordContentRegister = document.querySelector(
  ".section_password_content_register"
);
let SectionVerifyContentRegister = document.querySelector(
  ".section_verify_content_register"
);

let InputEmail = document.querySelector(".input_email");
let InputPassword = document.querySelector(".input_password");

let TextError = document.querySelector(".text_error");

let RegexEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/gm;

InputEmail.focus();

ButtonContinueEmail.addEventListener("click", () => {
  if (InputEmail.value.match(RegexEmail)) {
    SectionPasswordContentRegister.style.display = "flex";
    TextError.style.display = "none";
    InputPassword.focus();
  } else {
    TextError.innerHTML = "Email was not valid";
    TextError.style.display = "flex";
  }
});

ButtonContinuePassword.addEventListener("click", () => {
  if (InputPassword.value !== "" && InputPassword.value.length >= 8) {
    SectionVerifyContentRegister.style.display = "flex";
    TextError.style.display = "none";
    ButtonLogin.style.display = "block";
  } else {
    TextError.innerHTML = "Password was not valid";
    TextError.style.display = "flex";
  }
});

ButtonLogin.addEventListener("click", () => {});
