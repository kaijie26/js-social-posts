// Descrizione
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
// Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.
// Non è necessario creare date casuali
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)
// Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.

// Creo l'array con gli eventuali elementi che li rappresentano
const posts = [
    {
        id: 1,
        name: 'Phil Mangione',
        photo: "https://unsplash.it/300/300?image=15",
        date: '10-26-2017',
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://unsplash.it/600/300?image=171',
        like: 80,

    },
    {
        id: 2,
        name: 'Sofia Perlari',
        photo: "https://unsplash.it/300/300?image=13",
        date: '11-14-2016',
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: 'https://unsplash.it/600/300?image=175',
        like: 120,

    },
    {
        id: 3,
        name: 'Mario Binachi',
        photo: "https://unsplash.it/300/300?image=11",
        date: '12-21-2014',
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: null,
        like: 190,

    },
    {
        id: 4,
        name: 'John Doe',
        photo: "https://unsplash.it/300/300?image=18",
        date: '12-31-2011' ,
        textPost: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        img: null,
        like: 299,

    },
]

// Faccio partire al inizio della pagina i posts
drawAllPosts(posts);

//************************************************************************** */
// FUNZIONI
//***************************************************************** */

function drawAllPosts (postsArray) {
    const postsContainer = document.querySelector('.posts-list');

    // Scorro gli elemnti con il ciclo for
    for(let i = 0; i < postsArray.length; i++) {
        const thisPosts = postsArray[i];
        const {id, name, photo, date, textPost, img, like} = thisPosts;

        // Stampo i posts in pagina
        const postsTemplate = `
        <div id="container" class="posts-list">
            <div class="post">
                    <div class="post__header">
                        <div class="post-meta"> 
                            <div class="post-meta__icon">
                                <img class="profile-pic" src="${photo}" alt="${name} ">                    
                            </div>

                            <div class="post-meta__data">
                                <div class="post-meta__author">${name}</div>
                                <div class="post-meta__time">${date}</div>
                            </div>    

                        </div>

                    </div>

                    <div>${textPost}</div>

                    ${img === null ? '' :  `
                                            <div class="post__image">
                                                <img src="${img}" alt="">
                                            </div>

                                            `
                    }

                    <div class="post__footer">
                        <div class="likes js-likes">

                            <div class="likes__cta">
                                <a class="like-button  js-like-button" href="#" data-postid="${id}">
                                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                                    <span class="like-button__label">Mi Piace</span>
                                </a>
                            </div>
 
                            <div class="likes__counter">
                                Piace a <b id="like-counter-${id}" class="js-likes-counter">${like}</b> persone
                            </div>
                        </div> 
                    </div>  
                            
                </div>
            </div>
        `;

        // Concateno i posts
        postsContainer.innerHTML += postsTemplate;     
        
        
    }

}

//-----------------------------------------------------
// EVENT LISTENERS
//-----------------------------------------------

const allLikeBtn = document.querySelectorAll('.js-like-button ');
const allLikeNumb = document.querySelectorAll('.js-likes-counter');
// Scorro i bottoni dei mi piace con il ciclo for
for(let i = 0; i < allLikeBtn.length; i++) {
    const thisLikeBtn = allLikeBtn[i];
    // Creo la funzione al click
    thisLikeBtn.addEventListener('click', function (event) {
        // Impedisco il comportamento di default dal browser
        event.preventDefault();
        // Incremento il like solo se il bottone non ha già la classe 'like-button--liked'
        // E faccio diventare verde il bottone 
        if (!this.classList.contains('like-button--liked')) {
            // Aggiungo la classe 'like-button--liked' al btn cliccato
            this.classList.add('like-button--liked');
            // Mi prendo l'elemnto del html che ha il numero relativo al btn
            const numLiketext = allLikeNumb[i];
            // Trasformo numLiketext in numero 
            let numLike = parseInt(numLiketext.innerHTML);
            // Incremento di 1 il like
            numLike++;
            // Riporto il numero al numLiketext
            numLiketext.innerHTML = numLike;
            
        }
        
    })

}









   
    






