const menuButtonComponent = function () {
    return `
        <button id="menu-btn"></button>
    `
}

const loadEvent = function () {
    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent()); //kell a zárójel a végén, hogy lefusson

    const menuButtonElement = document.getElementById("menu-btn");

    menuButtonElement.addEventListener("click", function (event) {
        //event.currentTarget.classList.toggle("clicked");
        //console.log(rootElement);
        //console.log(event.currentTarget.parentElement);
        //console.log(event.currentTarget.closest("#root"));
        console.log(menuButtonElement === event.currentTarget)
        event.currentTarget.closest("#root").classList.toggle("menu-opened");
    })
}
window.addEventListener("load", loadEvent)