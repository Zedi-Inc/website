const selectBtn = document.querySelectorAll(".select");
const selectionWrapper = document.querySelector(".selection");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submit = document.querySelector("#submit");
const form = document.querySelector("form");
const error = document.querySelector("#error");

const selectedItems = [];
let nameValue = "";
let emailValue = "";
let messageValue = "";
let selections;
let errorMsg;

selectBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    let selectedData = btn.dataset.selected;
    if (selectedData === "true") {
      btn.dataset.selected = "false";
    } else {
      btn.dataset.selected = "true";
    }
  });
});

nameInput.addEventListener("input", (e) => {
  nameValue = e.target.value;
});

emailInput.addEventListener("input", (e) => {
  emailValue = e.target.value;
});

messageInput.addEventListener("input", (e) => {
  messageValue = e.target.value;
});

const getSelections = () => {
  const arr = Array.from(selectBtn);
  selections = arr
    .filter((item) => item.dataset.selected === "true")
    .map((sel) => sel.textContent.trim());
};

const sendEmail = () => {
  console.log(selections.toString(), nameValue, emailValue, messageValue);
};

const validate = () => {
  if (nameValue.trim().length < 5) {
    errorMsg = "Please input valid fullname";
    return;
  } else if (
    !emailValue
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    errorMsg = "Please input valid email";
    return;
  } else if (selections.length < 1) {
    errorMsg = "Please select at least one service";
    return;
  } else {
    errorMsg = "";
    sendEmail();
  }
};

const reset = () => {
  errorMsg = "";
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getSelections();
  validate();
  errorMsg.length && (error.innerHTML = errorMsg);
  reset();
  form.reset();
});
