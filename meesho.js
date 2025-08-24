import WomenEthnic from "./data/WomenEthnic.js"
import WomenWestern from "./data/WomenWestern.js"
import Men from "./data/Men.js"
import Kids from "./data/Kids.js"
import HomeAndKitchen from "./data/HomeAndKitchen.js"
import JewelleryAccessories from "./data/JewelleryAccessories.js"
import Electronics from "./data/Electronics.js"
import CarAndMotorbike from "./data/CarAndMotobike.js"
import BeautyHealth from "./data/BeautyHealth.js"
import BagsAndFootwear from "./data/BagsAndFootwear.js"
import SportsAndFitness from "./data/SportsAndFitness.js"



let inputSearchEl = document.querySelector(".inputSearch");
let recentInput = [];
let formInputEl = document.getElementById("inputForm");
const listofrecentEl = document.querySelector(".listofrecent");

let listofrecentHTMLEl = "";

inputSearchEl.addEventListener("keydown", () => {
    if (inputSearchEl.value) {
        console.log(inputSearchEl.value);
        document.getElementById("closeSearch").style.display = "block";
    } else {
        document.getElementById("closeSearch").style.display = "none";
    }
});

formInputEl.addEventListener("submit", (e) => {
    e.preventDefault();
let listofrecentHTMLEl = "";
    recentInput.push(inputSearchEl.value);
    console.log(recentInput);

    if (recentInput.length > 0) {
        listofrecentHTMLEl = ""; 

        for (let i = 0; i < recentInput.length; i++) {
            listofrecentHTMLEl += `
                <div class="recentItem">
                    <div class="recenticon">
                        <img src="img/recent.png">
                    </div>
                    <p>${recentInput[i]}</p>
                </div>
            `;
        }

        listofrecentEl.innerHTML = listofrecentHTMLEl;
    }
});

 const brands = document.querySelector(".Brands");
    const leftBtn = document.querySelector(".left-button");
    const rightBtn = document.querySelector(".right-button");

    const scrollAmount = 250; 

    leftBtn.addEventListener("click", () => {
        brands.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", () => {
        brands.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });


/*function reuble*****/
function renderSubMenu(id, data) {
    let temp = document.getElementById(id)
    function TempFunc() {
        return data.map(el => {
            let list = "";
            list = el.data.map(element => `<p>${element}</p>`).join(" ")
            return `
        <div class="column">
            <h4>${el.heading}</h4>
            ${list}
        </div>
       `
        }).join("")
    }
    temp.innerHTML = TempFunc()
}


    /****womenEthic */
renderSubMenu("womenEthic", WomenEthnic)

/****WomenWestern */
renderSubMenu("womenWestern", WomenWestern)

//Men 
renderSubMenu("men", Men)

/***kids */
renderSubMenu("kids", Kids)

/**home % kitchen */
renderSubMenu("HomeAndKitchen", HomeAndKitchen)

/**beauty and health */
renderSubMenu("beautyAndHealth", BeautyHealth)

// Jewellery & Accessories
renderSubMenu("JewelleryAndAccessories", JewelleryAccessories)

// Bags & Footwear
renderSubMenu("BagsFootWearId", BagsAndFootwear)

// Electronics
renderSubMenu("ElectronicsId", Electronics)

// Sports and fitness
renderSubMenu("SportsFitnessId", SportsAndFitness)

// Car and Motorbike
renderSubMenu("CarMotorbikeId",CarAndMotorbike)











