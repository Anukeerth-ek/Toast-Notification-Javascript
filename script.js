const successBtn = document.getElementById("sucessbtn");
const failBtn = document.getElementById("failbtn");
const invalidBtn = document.getElementById("invalidbtn");
const toastBox = document.getElementById("toast-box");

let successMsg = "Successfully Completed";
let errorMsg = "Wrong Input !!";
let invalidMsg = "Invalid entry try again !!";

successBtn.addEventListener("click", createSuccessNotification);
failBtn.addEventListener("click", createFailNotification);
invalidBtn.addEventListener("click", createInvalidNotification);

// =======================================
function createSuccessNotification() {
     let toast = document.createElement("div");

     toast.classList.add("toast");
     let successIcon = document.createElement("i");
     successIcon.classList.add("fa-solid", "fa-check");
     toast.innerHTML = successMsg;
     toastBox.appendChild(toast);
     toast.appendChild(successIcon);
     let a = 53,
          b = 252,
          c = 3;
     toast.style.backgroundColor = "rgb(6, 148, 75)";

     setTimeout(() => {
          toast.remove();
     }, 5000);
}

// =======================================
function createFailNotification() {
     let toast = document.createElement("div");

     toast.classList.add("toast");
     toast.innerText = errorMsg;
     toastBox.appendChild(toast);
     let failIcon = document.createElement("i");
     failIcon.classList.add("fa-solid", "fa-xmark");
     toast.appendChild(failIcon);
     toast.style.backgroundColor = "rgb(245, 22, 10)";

     setTimeout(() => {
          toast.remove();
     }, 5000);
}
// =======================================
function createInvalidNotification() {
     let toast = document.createElement("div");

     toast.classList.add("toast");

     toast.innerHTML = invalidMsg;
     toastBox.appendChild(toast);
     let invalidIcon = document.createElement("i");
     invalidIcon.classList.add("fa-solid", "fa-triangle-exclamation");
     toast.appendChild(invalidIcon);
     toast.style.backgroundColor = "rgb(208, 212, 13)";
     setTimeout(() => {
          toast.remove();
     }, 5000);
}
