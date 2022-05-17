(() => {
    const navButton = document.querySelector("#nav-button");
    const navList = document.querySelector("#nav-list");
  

    console.log("Test")
    
    navButton.addEventListener("click", (evt) => {
      evt.preventDefault();
      navList.classList.toggle("nav-list--showed");
      navButton.classList.toggle("crossed");

      console.log("Click")
    });
  })();