// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

function buttonPlay () {

    let chooseDifficult = document.getElementById("difficult").value; 
    
    const grid = document.getElementById("grid"); 
    console.log(grid);

    grid.innerHTML ="";

    function createBox(){ 

        const item = document.createElement("div"); 

        if (chooseDifficult == 100){
            item.classList.add("square"); 
        } else if (chooseDifficult == 81){
            item.classList.add("squareNormal"); 
        } else if (chooseDifficult == 49) {
            item.classList.add("squareHard")
        } 
        return item;
    }
        console.log( createBox() );

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
            
    
            elementCurrent.addEventListener('click', function(){ 
                console.log(this);
                this.classList.toggle('active');
                
            })
    
                elementCurrent.innerText = i + 1;
    
                console.log( elementCurrent )
    
    
                grid.append ( elementCurrent ); 
            
        }







}
