// Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

function buttonPlay() {

    let chooseDifficult = document.getElementById("difficult").value;

    const grid = document.getElementById("grid");
    console.log(grid);

    grid.innerHTML = "";

    function createBox() {

        const item = document.createElement("div");

        if (chooseDifficult == 100) {
            item.classList.add("square");
        } else if (chooseDifficult == 81) {
            item.classList.add("squareNormal");
        } else if (chooseDifficult == 49) {
            item.classList.add("squareHard")
        }
        return item;
    }
    console.log(createBox());

    let arrayBomb = []; 

    for (let x = 1; x <= 16; x++) { 

        let numberRandom = Math.floor(Math.random(1) * chooseDifficult); 
        if (arrayBomb.includes(numberRandom) == true) { 

            x = x - 1;

        } else if (numberRandom > chooseDifficult == false) { 

            arrayBomb.push(numberRandom);

        }
    }
    console.log(arrayBomb);


    for ( let i = 0; i < chooseDifficult; i++ ) { 

        let elementCurrent = createBox(); 
        
         let innerNumber = i + 1;

         elementCurrent.innerText = innerNumber;

         console.log( elementCurrent )
         console.log(innerNumber);

         let classToggle = 'active'; 
        
        if (arrayBomb.includes(innerNumber)) { 
            classToggle = 'error'; 
        }
        var counter = 0;
         elementCurrent.addEventListener('click', function(){ 
            console.log(this);
            this.classList.toggle(classToggle);
            if (classToggle == "active"){ 
                
                counter += 1;
                this.style.pointerEvents = 'none';
                document.getElementById('counter').innerHTML = `Il tuo punteggio è : ${counter}`
                console.log(counter)
                
            } else { 
                
                alert('HAI PERSO');
                document.getElementById('counter').innerHTML = `Il tuo punteggio finale è : ${counter}`
                
            }
        })        
        grid.append ( elementCurrent ); 
    }
 
}



















