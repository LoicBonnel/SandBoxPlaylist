const playlist = document.getElementById("playlist");

const config = {
    urlCover : "/assets/pictures/",
    urlMusique : "/uploads/musics/"
}

const lecteur = document.querySelector("#lecteur"); // équivalent de getElementById

const music = [
    {
        id : 1,
        cover : config.urlCover + "pokemonJohny.jpg",
        sound : config.urlMusique + "johnnyHallydayPokemon.mp3",
        title : "Pokemon Generic",
        category : "anime",
    },

    {
        id : 2,
        cover : config.urlCover + "bo1.png",
        sound : config.urlMusique + "blackOpsZombies.mp3",
        title : "115 Black Ops Zombie",
        category : "video game",
    },

    {
        id : 3,
        cover : config.urlCover + "streetFighterIIZangief.png",
        sound : config.urlMusique + "streetFighterII.mp3",
        title : "Street Fighter 2",
        category : "video game",
    },

    {
        id : 4,
        cover : config.urlCover + "monsterAndCie.jpg",
        sound : config.urlMusique + "monstresEtCompagnie.mp3",
        title : "Monstre And Cie Generic",
        category : "Disney",
    }
];

music.forEach((music) => playlist.innerHTML += 

// const urlImage1 = "ddd";

`<li ID='${music.id}'><h2>${music.title}</h2><img src='${music.cover}' alt="${music.title}"/><div><small>${music.category}</small></div></li>`
);

const allLi = document.querySelectorAll("li");

allLi.forEach((li)=> {
    li.addEventListener('click', function(elem){
        const id = parseInt(li.id);
        const searchById = music.find((element) => element.id == id)
        console.log(searchById)
        // alert(`Voulez vous écouter : ${searchById.title}`);
        lecteur.src = `${searchById.sound}`;
        lecteur.play();
    });
})