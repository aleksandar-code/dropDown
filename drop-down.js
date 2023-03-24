const dropDownBtn = document.getElementsByClassName("drop-down-btn");

for (let i = 0; i < dropDownBtn.length; i += 1) {
  dropDownBtn[i].addEventListener("click", () => {
    const dropDown = document.getElementsByClassName("drop-down")[0];
    if (dropDown.classList.contains("open")) {
      console.log("close");
      dropDown.classList.remove("open");
    } else {
      console.log("open");
      dropDown.classList.add("open");
    }
  });
}
