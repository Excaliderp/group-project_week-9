window.onload = function() {
	document.getElementById("animal-info").innerHTML = welcomeBirds;
}

let welcomeBirds = "<h2>Learn more about our amazing birds</h2><p>Click to see more about any of our amazing birds.</p>";

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

let cockatoo = new Animals("Cockatoo", "bird", "seeds, tubers, corms, fruit, flowers and insects", "cockatoo-small.png", "cockatoo-large.png", "30-60 cm", "300-1,200 g", "30 to 70 years", "tree hollows in forests in subalpine regions to mangroves", "A cockatoo is any of the 21 parrot species belonging to the family Cacatuidae, the only family in the superfamily Cacatuoidea. Cockatoos are recognisable by the prominent crests and curved bills. Their plumage is generally less colourful than that of other parrots, being mainly white, grey or black and often with coloured features in the crest, cheeks or tail. On average they are larger than other parrots; however, the cockatiel, the smallest cockatoo species, is a small bird. The phylogenetic position of the cockatiel remains unresolved, other than that it is one of the earliest offshoots of the cockatoo lineage. The remaining species are in two main clades. The five large black-coloured cockatoos of the genus Calyptorhynchus form one branch. The second and larger branch is formed by the genus Cacatua, comprising 11 species of white-plumaged cockatoos and four monotypic genera that branched off earlier; namely the pink and white Major Mitchell's cockatoo, the pink and grey galah, the mainly grey gang-gang cockatoo and the large black-plumaged palm cockatoo. ");

let emu = new Animals("Emu", "bird", "a variety of native and introduced plant species", "LITEN-BILD", "STOR-BILD", "150 to 190 cm", "18 and 60 kg", "10 years", "various habitats across Australia ", "Large, terrifying up close and flightless, Emu's are not one of the most popular animals of Australia. Surprising then that they appear on the Australian Coat of Arms alongside the kangaroo. Possibly even more surprising is that they were allowed to remain on the Coat of Arms after they beat the Australian army in the unbelievable, but very real, Great Emu War. Emu's are endemic to Australia and are it's largest bird.");

let cassowary = new Animals("Cassowary", "bird", "fruit, grass seeds, fungi, invertibrates and small vertebrates", "LITEN-BILD", "STOR-BILD", "1.5 to 1.8 m", "58.5 kg", "40 to 50 years", "tropical rainforest", "Typically, all cassowaries are shy birds that are found in the deep forest. They are adept at disappearing long before a human knows they were there. The southern cassowary of the far north Queensland rain forests is not well studied, and the northern and dwarf cassowaries even less so. Females are larger and more brightly coloured than the males. All cassowaries' feathers consist of a shaft and loose barbules. They do not have rectrices (tail feathers) or a preen gland. Cassowaries have small wings with five or six large remiges. These are reduced to stiff, keratinous quills, resembling porcupine quills, with no barbs. The furcula and coracoid are degenerate, and their palatal bones and sphenoid bones touch each other. These, along with their wedge-shaped body, are thought to be adaptations to ward off vines, thorns, and saw-edged leaves, allowing them to run quickly through the rainforest. Cassowaries have three-toed feet with sharp claws. The second toe, the inner one in the medial position, sports a dagger-like claw that may be 125 mm (5 in) long. This claw is particularly fearsome, since cassowaries sometimes kick humans and other animals with their powerful legs. Cassowaries can run at up to 50 km/h (30 mph) through the dense forest and can jump up to 1.5 m (5 ft). They are good swimmers, crossing wide rivers and swimming in the sea");

document.getElementById("show-cockatoo").onclick = function() {
	//document.getElementById("animal-info").classList.add(cockatoo.animalName.toLowerCase());
	showAnimal(cockatoo)
};

document.getElementById("show-emu").onclick = function() {
	//document.getElementById("animal-info").classList.add(emu.animalName.toLowerCase());
	showAnimal(emu)
};

document.getElementById("show-cassowary").onclick = function() {
	//document.getElementById("animal-info").classList.add(emu.animalName.toLowerCase());
	showAnimal(cassowary)
};

function showAnimal(animal) {
	/*
	if (document.getElementById("animal-info").classList.contains(animal.animalName.toLowerCase())) {
		document.getElementById("animal-info").removeAttribute("class");
		document.getElementById("animal-info").innerHTML = welcomeBirds;
	} else {
		*/
	document.getElementById("animal-info").innerHTML = "<img src='../img/" + animal.largeImage + "' height='300' width='400'><h2>" + animal.animalName + " Info</h2><p>Group: " + animal.group + "</p><p>Eats " + animal.food + " and lives in " + animal.livingArea + ". The " + animal.animalName.toLowerCase() + " is about " + animal.height + " tall and weighs around " + animal.weight + ". It lives to be around " + animal.lifeSpan + ".</p><p>" + animal.description + "</p>";
	//}
}

