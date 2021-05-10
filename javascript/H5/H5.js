
run();

// Deze functie start de applicatie en zorgt ervoor dat alle functies worden aangeroepen
// om de pagina op te bouwen
function run() {
    createPictureHolders();
    addPictures();
}

// Maak div-elementen waarin de afbeeldingen en hartjes kunnen worden weergegeven
function createPictureHolders() {
    var pics = document.getElementById("pics");
    for(var i = 1; i <= 9; i++) {
        var pictureHolder = document.createElement("div");
        pictureHolder.className = "aappicture";
        pictureHolder.id = "aap_pic_" + i;
        var favHolder = document.createElement("div");
        favHolder.id = "aap_fav_" + i;
        favHolder.className = "aapfavorite";
        favHolder.style.height = "150px";
        pictureHolder.appendChild(favHolder);
        pics.appendChild(pictureHolder);
    }
    return pics;
}

// Voeg de afbeeldingen toe aan de div-elementen
function addPictures(pics) {
    aapPictures = document.getElementsByClassName("aappicture");
    for(var i = 0; i < aapPictures.length; i++) {
        var aapPicture = aapPictures[i];
        var picture = createImage(i+1);
        aapPicture.appendChild(picture);
    };
}


// Maak een afbeeldingen en zorg er voor dat er een hartje wordt getoond
// als er op een afbeelding wordt geklikt
function createImage(i) {
    var picture = document.createElement("img");
    picture.src = "char" + i + ".jpg";
    picture.addEventListener("click", function() {
        addHeart(i);
    })
    return picture;
}

// Voeg het hartje toe als er op een afbeelding wordt geklikt.
function addHeart(i) {
    notYourFavoriteMonkies = document.getElementsByClassName("aapfavorite");
    for(var x = 0; x <  notYourFavoriteMonkies.length; x++) {
        notYourFavoriteMonkies[x].style.backgroundImage = "none";
    }
    var favoriteMonkey = document.getElementById("aap_fav_" + i);
    favoriteMonkey.style.backgroundImage = 'url("img/heart.png")';
    favoriteMonkey.style.backgroundRepeat = 'no-repeat';
    favoriteMonkey.style.backgroundPosition = 'center';
}