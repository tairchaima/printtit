/* --------------------------------------------------------------------------------- */
// Images du carrousel
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

/* ------------------------------------------------------------------------------------------ */
// Récupération des éléments pour l'intéraction
let buttonPrevious = document.querySelector(".arrow_left") ;
let buttonNext = document.querySelector(".arrow_right") ;
let dots = document.querySelector(".dots") ;
let bannerParagraphe = document.querySelector("#banner p");
let bannerImage = document.querySelector('#banner .banner-img');


// Création des bullets points
for(let i = 0; i < slides.length; i++) {
	let span = document.createElement("span");
	span.classList.add("dot");
	dots.appendChild(span);
}


// Etat initial - Premier dot sélectionné
let slideIndex = 0;

let listeDotSpan = document.querySelectorAll(".dot");
listeDotSpan[slideIndex].classList.add("dot_selected");


// Changement d'image au clic sur le bouton gauche
buttonPrevious.addEventListener("click", () => {
	listeDotSpan[slideIndex].classList.remove("dot_selected");

	slideIndex-- ;

	if(slideIndex < 0) {
		slideIndex = slides.length - 1 ;
	}

	// On change le bullet point actif au suivant	 
	listeDotSpan[slideIndex].classList.add("dot_selected");

	// Mise à jour de l'image et du texte du carrousel
	let slidesTextContent = slides[slideIndex].tagLine ;
	
	bannerParagraphe.innerHTML = slidesTextContent ;
	bannerImage.src = `./assets/images/slideshow/${slides[slideIndex].image}` ;
})


// Changement d'image au clic sur le bouton droit
buttonNext.addEventListener("click", () => {
	listeDotSpan[slideIndex].classList.remove("dot_selected");
		
	slideIndex++ ;		

	if(slideIndex > slides.length - 1) {
		slideIndex = 0;
	}
	
	// On change le bullet point actif au suivant	 
	listeDotSpan[slideIndex].classList.add("dot_selected");

	// Mise à jour de l'image et du texte du slider
	let slidesTextContent = slides[slideIndex].tagLine ;
	
	bannerParagraphe.innerHTML = slidesTextContent ;
	bannerImage.src = `./assets/images/slideshow/${slides[slideIndex].image}` ;
})