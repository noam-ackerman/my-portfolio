let sendBtn = document.querySelector(".sendBtn");
let errorNote = document.querySelector(".error");

sendBtn.addEventListener("click", Validate);

function Validate(e) {
  let inputs = [
    document.getElementById("email"),
    document.getElementById("message"),
  ];

  inputs.map((input) => {
    if (input.value == "") {
      errorNote.innerHTML = "Please complete all fields!";
      e.preventDefault();
    }
  });
}
