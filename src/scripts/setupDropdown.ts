/* Desplegar menu */


document.addEventListener("DOMContentLoaded", ()=>{

  const setupDropdown = function (toggleElement:HTMLElement, dropdownElement:HTMLElement) {
  
    if (!toggleElement || !dropdownElement) {
      console.warn("Elementos del DOM no encontrados");
      return;
    }
  
    toggleElement.addEventListener("click", (event) => {
      event.stopPropagation();
      dropdownElement.classList.toggle("hidden");
    });
  
    document.addEventListener("click", (event) => {
      if (
        !toggleElement.contains(event.target as Node) &&
        !dropdownElement.contains(event.target as Node)
      ) {
        dropdownElement.classList.add("hidden");
      }
    });
  
    dropdownElement.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  };
  
  const menuDropdown = document.querySelector("#menu-dropdown");
  const menuClose = document.querySelectorAll(".menu-close");

  if(menuClose && menuDropdown){
    menuClose.forEach(element =>{
      element.addEventListener("click", (event)=>{
        menuDropdown.classList.add("hidden");
      });
    });
  }
  
  
  const dropdownContainers = document.querySelectorAll(".dropdown-container");

  dropdownContainers.forEach(element => {
    const toggleElement = element.querySelector(".toggle-element") as HTMLElement;
    const dropdownElement = element.querySelector(".dropdown-element") as HTMLElement;
    if(dropdownElement && toggleElement){
      setupDropdown(toggleElement, dropdownElement);
    }
  });

  
  const toggleElement = document.querySelector("#menu-toggle") as HTMLElement;
  const dropdownElement = document.querySelector("#menu-dropdown") as HTMLElement;
  setupDropdown(toggleElement, dropdownElement);
});


