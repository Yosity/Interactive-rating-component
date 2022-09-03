let submitBtn = document.querySelector("#submit");
let rateCircles =  document.querySelectorAll(".circle");
let ratingCard = document.querySelector(".rating-card");
let thanksCard = document.querySelector(".thanks-card");
let thankMessage = document.querySelector("span");
let rateValue;
let selectedCircle = [];

rateCircles.forEach(circle => {
    circle.onclick = () => {
        if(selectedCircle.length == 1)
        {
            selectedCircle[0].style.backgroundColor = "hsl(213, 16%, 22%)";
            selectedCircle[0].style.color = "hsl(217, 12%, 63%)";
            selectedCircle[0].style.fontWeight = "normal";
            selectedCircle.splice(selectedCircle.indexOf(selectedCircle[0]));
        }
        circle.style.backgroundColor = "hsl(25, 97%, 53%)";
        circle.style.color = "white"
        circle.style.fontWeight = "bold"
        selectedCircle.push(circle);
        rateValue = circle.innerText;
    }
})

submitBtn.addEventListener("click", showThanksMessage);


function showThanksMessage() {
    thankMessage.innerText = rateValue;
    ratingCard.style.top = "-100%";
    thanksCard.style.zIndex = "0";
}
