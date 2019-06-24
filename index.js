class BeveragesChecker {
  constructor() {
    console.log("Hello from the constructor");
    this.registerEvents();
  }

  registerEvents() {
    const veganChecker = document.querySelector(".vegan_checker");
    const carnivoreChecker = document.querySelector(".carnivore_checker");
    const veganDrinks = document.querySelectorAll(".vegan");
    const carnivoreDrinks = document.querySelectorAll(".carnivore");

    veganChecker.addEventListener("click", () => {
      switch (veganChecker.checked) {
        case true:
          veganDrinks.forEach(element => {
            element.style.fontWeight = "bold";
            element.style.color = "green";
            element.style.textAlign = "left";
          });
          break;
        case false:
          veganDrinks.forEach(element => {
            element.style.fontWeight = "";
            element.style.color = "";
            element.style.textAlign = "";
          });
          break;
      }
    });

    carnivoreChecker.addEventListener("click", () => {
      switch (carnivoreChecker.checked) {
        case true:
          carnivoreDrinks.forEach(element => {
            element.style.fontWeight = "bold";
            element.style.color = "red";
            element.style.textAlign = "left";
          });
          break;
        case false:
          carnivoreDrinks.forEach(element => {
            element.style.fontWeight = "";
            element.style.color = "";
            element.style.textAlign = "";
          });
          break;
      }
    });
  }
}

const checker = new BeveragesChecker();
