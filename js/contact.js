const selectBtn = document.querySelectorAll(".select");
const selectionWrapper = document.querySelector(".selection");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const submit = document.querySelector("#submit");

const selectedItems = [];
let nameValue = "";
let emailValue = "";
let messageValue = "";

let selections = [
  { value: "Digital Strategy", selected: false },
  { value: "Content Creation", selected: false },
  { value: "Community Management", selected: false },
  { value: "Influencer Marketing", selected: false },
  { value: "Production", selected: false },
  { value: "Graphic Design", selected: false },
  { value: "Web Design", selected: false },
  { value: "Mobile App Design", selected: false },
  { value: "Press Distribution", selected: false },
  { value: "Media Buying", selected: true },
];

selectBtn.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("selected");
    if (
      selectedItems.indexOf(btn.textContent) < 0 &&
      btn.className.includes("selected")
    ) {
      selectedItems.push(btn.textContent);
      console.log("Yap");
      return;
    } else if (
      selectedItems.indexOf(btn.textContent) > 0 ||
      !btn.className.includes("selected")
    ) {
      selectedItems.splice(i, 1);
      console.log(btn.className.includes("selected"), "Nope");
      return;
    }
  });
});

// selections.forEach((item, i) => {
//   const button = document.createElement("button");

//   button.addEventListener("click", () => {
//     item.selected = !item.selected;
//   });

//   const text = document.createTextNode(item.value);
//   button.classList.add("btn");
//   item.selected ? button.classList.add("selected") : null;
//   button.appendChild(text);
//   selectionWrapper.appendChild(button);
// });

nameInput.addEventListener("input", (e) => {
  nameValue = e.target.value;
});

emailInput.addEventListener("input", (e) => {
  emailValue = e.target.value;
});

messageInput.addEventListener("input", (e) => {
  messageValue = e.target.value;
});

const validate = () => {};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  validate();
  // email handler
  console.log(selectedItems, nameValue, emailValue, messageValue);
});
