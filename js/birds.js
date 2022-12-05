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

let emu = new Animals("emu", "Is it a bird?", "seeds, tubers, corms, fruit, flowers and insects", "cockatoo-small.png", "cockatoo-large.png", "30-60 cm", "300-1,200 g", "30 to 70 years", "tree hollows in forests in subalpine regions to mangroves", "Large, terrifying up close and flightless, emu's are not one of the most popular animals of Australia. Surprising then that they appear on the Australian Coat of Arms alongside the kangaroo. Possibly even more surprising is that they were allowed to remain on the Coat of Arms after they beat the Australian army in the unbelievable, but very real, Great Emu War. Emu's are endemic to Australia and are it's largest bird.");

document.getElementById("show-animal").onclick = function() {
	showAnimal(cockatoo)
};

document.getElementById("show-emu").onclick = function() {
	showAnimal(emu)
};

function showAnimal(animal) {
	document.getElementById("animal-info").innerHTML = "<h2>" + animal.animalName + " Info</h2><p>Group: " + animal.group + "</p><p>Eats " + animal.food + " and lives in " + animal.livingArea + ".</p>";
}

