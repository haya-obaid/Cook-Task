import { BenefitsData } from "./data.js";
import { exploreData } from "./data.js";
const body = document.getElementsByTagName("body")[0];
const navbar = document.getElementById("navbar");
const modeImg = document.getElementById("modeImg");
const modeText = document.getElementById("modeText");
const barsIcon = document.getElementById("barsIcon");
const closeIcon = document.getElementById("closeIcon");
const mobileNav = document.querySelector(".mobile-nav");
const themeToggle = document.querySelector("#themeToggle");
const mobileThemeIcon = document.querySelector("#mobileThemeIcon");
// Dark & Light Mode
function ToggleTheme()
{
    body.classList.toggle("darktheme");
    navbar.classList.toggle("darktheme");
    if (body.classList.contains("darktheme")) {
      modeImg.src = "./assets/Images/sun.svg";
      modeText.innerText = "Light mode";
    } else {
      modeImg.src = "./assets/Images/moon.svg";
      modeText.innerText = "Dark mode";
  }
}
themeToggle.addEventListener("click", ToggleTheme);
mobileThemeIcon.addEventListener("click", ToggleTheme);
// Open & Close Mobile Navbar
closeIcon.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(100%)";
});
barsIcon.addEventListener("click", () => {
  mobileNav.style.transform = "translateX(0%)";
});

/// Map (Data)
document.querySelector(".benefits-content").innerHTML += BenefitsData.map(
  (item) => {
    return `
          <div class="card">
            <div class="card-icon flex-center">
              <img src="./assets/Images/icon-6.svg" alt="" />
            </div>
            <h1>Accessible Cooking</h1>
            <p>
              Start your culinary journey with ease. Our user-friendly platform
              makes navigation simple, letting you focus on learning and
              enjoying your online cooking classes.
            </p>
          </div>
          <div class="line"></div>
          `;
  }
).join("");

// Explore Show Data
document.querySelector(".explore-content").innerHTML += exploreData
  .map((item) => {
    return `
          <div class="card">
            <img
              src="./assets/Images/image 10.svg"
              alt=""
              class="explore-card-icon"
            />
            <div class="explore-card-text">
              <div>
                <h3>Bakery</h3>
                <img src="./assets/Images/arrow-up-right.svg" alt="" />
              </div>
              <p>Master baking: from rustic bread to delicate pastries</p>
            </div>
          </div>
          `;
  })
  .join("");
