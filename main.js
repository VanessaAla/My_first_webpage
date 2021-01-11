var animal = document.getElementById("animal");
var hobby = document.getElementById("hobby");
var hooman = document.getElementById("hooman");
var beverage = document.getElementById("beverage");

animal.addEventListener("mouseenter", function( event ) {
    event.target.style.fontStyle = "italic";
    event.target.style.fontWeight = "normal";
    event.target.style.fontFamily = "sans-serif";
    event.target.textContent = "I love dogs. Like, a lot. They're my favorite animal. Ever!";
    console.log("enter");
}, false);

animal.addEventListener("mouseleave", function( event ) {
    event.target.style.fontStyle = "normal";
    event.target.style.fontWeight = "bold";
    event.target.style.fontFamily = "Krona One";
    event.target.textContent = "Favorite animal?"
    console.log("leave");
}, false);

hobby.addEventListener("mouseenter", function( event ) {
    event.target.style.fontStyle = "italic";
    event.target.style.fontWeight = "normal";
    event.target.style.fontFamily = "sans-serif";
    event.target.textContent = "Zumba! When the Zombie Apocalypse comes...all i need to remember is my zumba moves. The single, single, double should confuse them.";
}, false);

hobby.addEventListener("mouseleave", function( event ) {
    event.target.style.fontStyle = "normal";
    event.target.style.fontWeight = "bold";
    event.target.style.fontFamily = "Krona One";
    event.target.textContent = "Favorite activity?";
}, false);

hooman.addEventListener("mouseenter", function( event ) {
    event.target.style.fontStyle = "italic";
    event.target.style.fontWeight = "normal";
    event.target.style.fontFamily ="sans-serif";
    event.target.textContent = "My husband is one of my greatest decisions in life. If i could have anyone in the world it would still be him.";
}, false);

hooman.addEventListener("mouseleave", function( event ) {
    event.target.style.fontStyle = "normal";
    event.target.style.fontWeight = "bold";
    event.target.style.fontFamily = "Krona One";
    event.target.textContent = "Favorite hooman?";
}, false);

beverage.addEventListener("mouseenter", function( event ) {
    event.target.style.fontStyle = "italic";
    event.target.style.fontWeight = "normal";
    event.target.style.fontFamily = "sans-serif";
    event.target.textContent = "Coffee. Because adulting is hard work.";
}, false);

beverage.addEventListener("mouseleave", function( event ) {
    event.target.style.fontStyle = "normal";
    event.target.style.fontWeight = "bold";
    event.target.style.fontFamily = "Krona One";
    event.target.textContent = "Favorite beverage?";
}, false);