fetch("./escape-game.json")
.then(res=>{
    return res.json()    
})
.then(rep=>{
    console.log(rep)
    hero(rep)
    missions(rep)
    avantages(rep)
    avis(rep)
})
/**
 * 
 * @param {object} datas 
 */
function hero(datas){
    let h1 = datas.entreprise.nomCommercial         //Je recupere mon titre dans le json et je lui affecte une variable
    let accroche = datas.entreprise.phraseAccroche      //Je recupere ma phrase d'accroche dans le json et je lui affecte une variable
    let cta = datas.entreprise.texteAppelAction     //Je recupere mon texte de boutton dans le json et je lui affecte une variable
    let herocontent = document.querySelector(".herocontent")        //Je recupere le contenu initial de mon hero
    
    //Je remplace mon contenu dans mon hero avec mes variables
    herocontent.innerHTML = `<div class="eyeimg"><img src="./images/Eye.png" alt="logo de Dehors!"></div>
                            <h1>${h1}</h1>
                            <p class="whitefont">
                                ${accroche}
                            </p>
                            <a href="" title ="Boutton pour reserver une partie">${cta}</a>`
}
/**
 * 
 * @param {object} datas 
 */
function missions(datas){
    //Je recupere le tableau des activités dans mon json
    let allactivite = datas.entreprise.activites
    //Je recupère mon template de cartes dans mon html
    let mission = document.querySelector(".missions")

    allactivite.forEach(e => {
        let nom = e.nom  //Pour chaque élément je declare une variable nom correspondant à tous les noms des activitées
        let img = e.image   //Pour chaque élément je declare une variable img correspondant à toutes les images des activitées
        let desc = e.description    //Pour chaque élément je declare une variable desc correspondant à toutes les description des activitées

        //Je remplace le contenu de mon template avec mes variables
        mission.innerHTML += `<article class="missioncard flexwrap justcenter">
                                <div class="missioncontent flexwrap">
                                    <div class="missionimg w100"><img src="./images/${img}" alt="Représentation de ${nom}" class="w100"></div>
                                    <h3>${nom}</h3>
                                    <p>
                                        ${desc}
                                    </p>
                                </div>
                                <a href="" title="Boutton pour reserver cette partie">Reservez cette salle</a>
                            </article> `
    });

}
/**
 * 
 * @param {object} datas 
 */
function avantages(datas){
    let allavantages = datas.entreprise.avantagesClients //Je vais chercher mes éléments d'avantages dans mon json
    let avantageclient = document.querySelector(".avantagescontent") // Je vais chercher mon template de div avantage

    allavantages.forEach(e => {  // Pour chaque element de tous mes avantages
        let picto = e.picto  //Je recupere le picto et je lui affecte une variable
        let texte = e.texte //Je recupere le texte et je lui affecte une variable

        //Je remplace le contenu de mon template avec mes variables
        avantageclient.innerHTML +=`<div class="avantagescard flexwrap justcenter textcenter">
                                        <img src="./images/${picto}" alt="Pictogramme">
                                        <p class="yellowfont">
                                            ${texte}                    
                                        </p>
                                    </div>`
    });
}
/**
 * 
 * @param {object} datas 
 */
function avis(datas){
    let allavis = datas.entreprise.temoignages      //Je recupère tous mes profils avec leurs données
    let cartes = document.querySelector(".containercardavis")       //Je vais chercher mon template de carte avis

    allavis.forEach(e => { //Pour chaque profil
        prenom = e.prenom  //Je vais récuperer le prénom et je lui affecte une variable
        photo = e.photo     //Je vais récuperer la photo de profil et je lui affecte une variable
        exp = e.typeExperience  //Je vais récuperer l'activité qu'elle a fait et je lui affecte une variable
        note = e.note           //Je vais récuperer sa note je lui affecte une variable
        com = e.commentaire     //Je vais récuperer son commentaire et je lui affecte une variable

        let star = ""           //Je definit une chaine de carctère "star" qui correspondra à l'affichage des étoiles selon la note du profil

        if(note === 1){ // Si une note est égale à 1 
            star = "★☆☆☆☆" // alors star affichera 1 étoile pleine et 4 vides
        }else if(note === 2){   //Sinon si la note est égale à 2.... Ainsi de suite jusqu'à la note de 5
            star = "★★☆☆☆"
        }else if(note === 3){
            star = "★★★☆☆"
        }else if(note === 4){
            star = "★★★★☆"
        }else{
            star = "★★★★★"
        }
        // Je remplace le contenu de mon template de carte avis avec mes variables
        cartes.innerHTML += `<div class="cardavis flexwrap">
                                <div class="w100 flexwrap spacebetween aligncenter">
                                    <div class="profilimg">
                                        <img src="./images/${photo}" alt="Photo de profil de ${prenom}">
                                    </div>
                                    <div class="prenom-note flexwrap">
                                        <p class="w100"><span class="prenom">${prenom}</span></p>
                                        <p>${exp}</p>
                                        <p class="note w100">${star}</p>
                                    </div>
                                </div>
                                
                                <p>
                                    ${com}
                                </p>
                            </div>`
    });
}