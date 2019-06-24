class BeveragesChecker {
  constructor() {
    console.log("Hello from the constructor");
    const beverageList = document.querySelector("ul");

    this.checkList();
    this.addBeverage(beverageList);
    this.deleteBeverage(beverageList);
  }

  checkList() {
    const veganChecker = document.querySelector(".vegan_checker");
    const carnivoreChecker = document.querySelector(".carnivore_checker");
    const veganDrinks = document.querySelectorAll(".vegan");
    const carnivoreDrinks = document.querySelectorAll(".carnivore");

    veganChecker.addEventListener("click", () => {
      switch (veganChecker.checked) {
        case true:
          veganDrinks.forEach(element => {
            element.style.fontWeight = "bold";
            element.style.color = "darkgreen";
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
            element.style.color = "darkmagenta";
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

  addBeverage(beverageList) {
    const form = document.querySelector("form");
    const input = form.querySelector("#new");

    form.addEventListener("submit", e => {
      e.preventDefault();

      const newItem = document.createElement("li");
      const choice = this.getRadioVal(form);

      newItem.classList.add(choice);

      const text = input.value.trim();

      newItem.innerHTML = ` ${text} <i class="fas fa-minus-square"></i> `;

      beverageList.appendChild(newItem);

      input.value = "";

      this.checkList();
    });
  }

  getRadioVal(form) {
    let val = "";

    // get list of radio buttons with specified name
    const radios = form.elements.choice;

    for (let i = 0; i < radios.length; i++) {
      if (radios[i].checked) {
        val = radios[i].value; 
        break; // Break out of for loop!
      }
    }
    return val;
  }

  deleteBeverage(beverageList) {
    console.log("deleteBeverage");
    beverageList.addEventListener("click", e => {
      if (e.target.classList.contains("fa-minus-square")) {
        const beverage = e.target.closest("li");

        console.log("Removed", beverage.innerText);

        beverageList.removeChild(beverage);
      }
    });
  }
}

const checker = new BeveragesChecker();
