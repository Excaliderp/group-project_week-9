
function Animals(animalName, group, food, smallImage, largeImage, height, weight, lifeSpan, livingArea, description) {
	this.animalName = animalName;
	this.group = group;
	this.food = food;
	this.smallImage = smallImage;
	this.largeImage = largeImage;
	this.height = height;
	this.weight = weight;
	this.lifeSpan = lifeSpan;
	this.livingArea = livingArea;
	this.description = description;
}

let platypus = new Animals("latypus", "Mammal", "worms, insect larvae, shrimp, crayfish", 
"platypuss-small.jpg", "platypuss-large.png", "43-50 cm", "0,7-2,4 kg", "ca 20 years", 
"Eastern Australia", 
"The platypus, together with the four species of echidna, it is one of the five extant species of monotremes, mammals that lay eggs instead of giving birth to live young. Like other monotremes, it senses prey through electrolocation. It is one of the few species of venomous mammals, as the male platypus has a spur on the hind foot that delivers a venom, capable of causing severe pain to humans.")

let kangaroo = new Animals("Kangaroo", "Mammal", "herbivores", "kangaroo-small.jfif", 
"kangaroo-large.jpg", "45-200 cm, depending on what type", "18-90 kg, dependnig on what type", 
"up to 25 years", "Australia and New Guinea", 
"Kangaroos are four marsupials from the family Macropodidae (macropods, meaning 'large foot'). In common use the term is used to describe the largest species from this family, the red kangaroo, as well as the antilopine kangaroo, eastern grey kangaroo, and western grey kangaroo.[1] Kangaroos are indigenous to Australia and New Guinea. The Australian government estimates that 42.8 million kangaroos lived within the commercial harvest areas of Australia in 2019, down from 53.2 million in 2013.")

let tasmanianDevil = new Animals("Tasmanian Devil", "mammals", 
"Basically what they can get their hands on", "tasmaninandevil-small.jpg", 
"tasmaniandevil-large.jpg", "Up to 90 cm", "Up to 8 kg", "5-7 years", "Tasmania, Australia", 
"The Tasmanian devil (Sarcophilus harrisii) (palawa kani: purinina)[3] is a carnivorous marsupial of the family Dasyuridae. Until recently, it was only found on the island state of Tasmania, but it has been reintroduced to New South Wales in mainland Australia, with a small breeding population. The size of a small dog, the Tasmanian devil became the largest carnivorous marsupial in the world following the extinction of the thylacine in 1936.")

document.getElementById("show-platypus").onclick = function() {
	showAnimal(platypus)
};

document.getElementById("show-kangaroo").onclick = function() {
	showAnimal(kangaroo)
};

document.getElementById("show-tasmaniandevil").onclick = function() {
	showAnimal(tasmanianDevil)
};

function showAnimal(animal) {
	document.getElementById("animal-info").innerHTML = "<img src='../img/" + animal.largeImage + "' height='300' width='400'><h2>" + animal.animalName + " Info</h2><p>Group: " + animal.group + "</p><p>Eats " + animal.food + " and lives in " + animal.livingArea + ".</p><p>The " + animal.animalName.toLowerCase() + " is about " + animal.height + " tall and weighs around " + animal.weight + ". It lives to be around " + animal.lifeSpan + ".</p><p>" + animal.description + "</p>";
}