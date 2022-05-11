const menuButtonComponent = function () {
    return `
        <button id="menu-btn"></button>
    `
}

const beerSectionComponent = function (title, sub, text, id) {
    return `
        <section id="${id}">
            <h1 class="beerName">${title}</h1>
            <h2 class="beerCompany">${sub}</h2>
            <h3 class="beerType">${text}</h3>
        </section>
    `
}

const beerAnchorComponent = function (title, id) {
    return `
        <a href="#${id}">${title}</a>  
    `
}

const menuButtonClickEvent = function (event) {
 
    event.currentTarget.closest("#root").classList.toggle("menu-opened");
}

const beerNavComponent = function (inner) {
    return `
        <nav>${inner}</nav>
    `
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

    let beerSections = "";
    
    for (const beer of beers.cards) {
        beerSections += beerSectionComponent(beer.title, beer.sub, beer.text);
    }
    

    rootElement.insertAdjacentHTML("beforeend", beerSections);

    let beerAnchors = "";

    for (const beer of beers.cards) {
        beerAnchors += beerAnchorComponent(beer.title)
    }

    rootElement.insertAdjacentHTML("beforeend", beerNavComponent(beerAnchors));

}
window.addEventListener("load", loadEvent) // CALL back function - függvényre bízzuk rá, hogy mikor fusson le