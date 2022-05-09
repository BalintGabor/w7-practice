console.log(varVariable);
let globalVariable1 = 12;

let globalVariable2 = function () {
    let funVariable1 = "Hello";

    console.log("It's a" , globalVariable1);

    let funVariable2 = function () {
        console.log("funVariable2 belsejében levő szöveg")
        console.log(globalVariable1);
        console.log(funVariable1);
        
        let funInFunVariable1 = true;

        console.log(funInFunVariable1);
        
        let funInFunVariable2 = function () {
            console.log(funInFunVariable1);
        }

        funInFunVariable2();
    }

    funVariable2(); // function-ön kívül tudjuk lefuttatni/meghívni az adott function-t

    if (funVariable1 === "Hello") {
        var blockVariable1 = "Bye"
    } else {
        // console.log(blockVariable1);
    }
    console.log(blockVariable1);
}

globalVariable2()

//console.log (funVariable1);

var varVariable = 1;

let letVariable1;
console.log(letVariable1)

let letVariable2 = "variable 2";
console.log(letVariable2);

const constVariable = "Ciao";
// constVariable = "Hello"
console.log(constVariable)

const obj1 = {}; // {} = üres objektum, obj literal
//obj1.key = "value";
//obj1 = {key: "value"}
console.log(obj1);

const globalVariable3 = function (parameter1, parameter2, parameter3) {
    console.log(parameter1);
    console.log(parameter2);
    console.log(parameter3);
    console.log(parameter3()); // jelen esetben a console lognál hívjuk meg ezáltal bármilyen függvényt, amit parameter3-ba behívunk
}
const globalVariable4 = "apple"

const globalVariable5 = function () {
    return "pear"
}

const globalVariable6 = function () {
    return "shoes"
}

globalVariable3(globalVariable5(), globalVariable4, globalVariable6); // az itt beírt adatok az argumentumok, ha csak egy adatot adunk meg, akkor az a parameter1 lesz, a másik undefined


const loadEvent = function (parameter1) {
    const rootElement = document.getElementById("root");
    console.log(rootElement);
    //console.log(globalVariable1)
    console.log(parameter1);
    rootElement.addEventListener("click", function (event) {
        console.log(event.currentTarget);
        event.currentTarget.insertAdjacentHTML("beforeend", "Clicked,")
        event.currentTarget.classList.toggle("clicked")
    })
}

window.addEventListener("load", loadEvent)