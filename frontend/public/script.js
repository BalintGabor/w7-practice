const menuButtonComponent = function () {
    return `
        <button id="menu-btn"></button>
    `
}

const beerSectionComponent = function (title, sub, text, id) {
    return `
        <section id="${id}">
            <h1 class="beerName">${title}</h1>
            <h1 class="beerCompany">${sub}</h1>
            <h1 class="beerType">${text}</h1>
        </section>
    `
}

const beerAnchorComponent = function (id, title) {
    return `
        <a href="#${id}">${title}</a>  
    `
}

const menuButtonClickEvent = function (event) {
 
    event.currentTarget.closest("#root").classList.toggle("menu-opened");
}

const loadEvent = function () {
    console.log(typeof beerSectionComponent); // csak a funkció fog megjelenni, nem fut le
    console.log(typeof beerSectionComponent()); // a zárójelek miatt a végén le is fut, emiatt string lesz

    /*(function () {
    console.log("blablabla")
    })(); - anonim function így fut le, ha a végén ott a zárójel */

    const rootElement = document.getElementById("root");

    rootElement.insertAdjacentHTML("beforeend", menuButtonComponent()); //kell a zárójel a végén, hogy lefusson - aminél kell hogy legyen return, amit meg tudunk jeleníteni/fel tud dolgozni NEM call back function

    const menuButtonElement = document.getElementById("menu-btn");

    menuButtonElement.addEventListener("click", menuButtonClickEvent)

    let beerSections = ""
    
    for (const beer of beers.cards) {
        beerSections += beerSectionComponent(beer.title, beer.sub, beer.text);
    }
    

    rootElement.insertAdjacentHTML("beforeend", beerSections);

}
window.addEventListener("load", loadEvent) // CALL back function - függvényre bízzuk rá, hogy mikor fusson le