
let tabs = Array.from(document.getElementsByClassName("tab"));

tabs.forEach(function(tab) {
  tab.addEventListener("mouseenter", displayAnimal);
  tab.addEventListener("mouseleave", hideAnimal);
})

let animals = Array.from(document.getElementsByClassName("animal"));

function displayAnimal() {
  let animalName = this.classList[1] ;
  this.classList.add("active");

  animals.forEach(function(animal) {
    if (animal.classList.contains(animalName)) {
      animal.classList.add("show");
    } else {
      animal.classList.remove("show");
    }
  })
}

function hideAnimal() {
  this.classList.remove("active");

  animals.forEach(function (animal) {
    animal.classList.remove("show");
  });
};

let search = document.getElementById("animal-search");

search.addEventListener("input", function () {
  let searchTerm = search.value.toLowerCase();

  tabs.forEach(function(tab) {
    if (tab.textContent.toLowerCase().includes(searchTerm) && searchTerm !== "") {
      tab.classList.add("active");
    } else {
      tab.classList.remove("active");
    }
  })
})