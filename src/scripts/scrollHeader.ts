document.querySelectorAll(".scroll-to").forEach(element=>{
    element.addEventListener("click", event=>{
        event.preventDefault();
        const targetID = element.getAttribute("data-target");
        const targetElement = document.getElementById(targetID as string);
        if(targetElement){
            targetElement.scrollIntoView({
                behavior:'smooth',
                block: 'start',
            });
        }
    });
});