const images = [
    {

        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images);

let myContainer=document.querySelector('div.container-img');
let activeIndex = 0;


//effettuo un for each per array di oggetti//
images.forEach((element,index) => {
if (index == activeIndex){
myContainer.innerHTML += mySlidesGen(index, element.image,element.title,element.description,"active");
} else if (index !== activeIndex) {
myContainer.innerHTML += mySlidesGen(index, element.image,element.title,element.description,'');
}
})




//FUNCTIONS

//creo funzione che mi genera una slide//
function mySlidesGen(index,image, title ,description){
return `<div class="imageUp" img-index="${index}">
    <img src="${image}" alt="pic">
    <div class="description">
        <h2>${title}</h2>
        <p>${description}</p>
    </div>
</div>` 
}