//Movement animation items
const card = document.querySelector(".card");
const container = document.querySelector(".container");

//Items
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase button"); 
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes"); 

//Moving animation event 
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 75;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 75;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`; 
});

//Return to default position / animate in
container.addEventListener("mouseenter", e => {
    card.style.transition = "none"; 
    //popout for the title
    title.style.transform = "translateZ(75px)";
    sneaker.style.transform = "translateZ(200px) rotateZ(-25deg)";
    description.style.transform = "translateZ(45px)";
    purchase.style.transform = "translateZ(40px)";
});

//Animate out
container.addEventListener("mouseleave", e => {
    card.style.transition = "all 0.3s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)";
    sneaker.style.transform = "translateZ(0px) rotateZ(0deg)";
    description.style.transform = "translateZ(0px)";
    purchase.style.transform = "translateZ(0px)";
});

