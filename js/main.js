/**
 * Consegna
    L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco di quadrati, in cui ogni cella contiene un numero tra quelli compresi in un range:
        con difficoltà 1 => tra 1 e 100
        con difficoltà 2 => tra 1 e 81
        con difficoltà 3 => tra 1 e 49
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */

// Mi richiamo il bottone tramite 'querySelector'
const playBtn = document.querySelector('#play');

// Aggiungo un evento al click del bottone
playBtn.addEventListener('click', function(){
    newGame ();
});  



/* ****************************FUNCTIONS************************************* */

/**
 * Questa funzione permette di creare un elemento 'div' ed aggiunge la classe 'cell'.
 * @param {*} number    Numero che verrà inserito dentro l'html del div.cell.
 * @returns             Restituisce l'elemento appena creato.
 */
function createNewCell (number, gridRow){
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.style.width = `calc(100% / ${gridRow})`;
    newCell.style.height = newCell.style.width;
    newCell.innerHTML = `${number}`;
    return newCell;
}

function newGame (){
    let gridElements;
    let gridRow;

    // Quando clicco sul bottone seleziono il livello di difficoltà associato
    const levelDifficult = document.getElementById('level-difficult').value;
    // E ne visualizzo il valore in console
    console.log(`Livello di difficoltà selezionato: ${levelDifficult}`);
    
    // Vado a richiamare tramite ID il div 'grid'
    const grid = document.getElementById('grid');
    
    // Controllo il livello di difficoltà e imposto un limite di celle
    switch (levelDifficult){
        case 'easy':
        default:
            gridElements = 100;
            break;
        case 'medium':
        gridElements = 81;
        break;
        case 'hard':
        gridElements = 49;
        break;
    }

    gridRow = Math.sqrt(gridElements);

    // Ciclo per 'gridElements' volte e aggiungo ogni volta una nuova 'cell' alla 'grid'
    for (let i = 1; i <= gridElements; i++){
        const currentCell = createNewCell(i, gridRow);

        // aggiungo l'evento di click e i suoi effetti
        currentCell.addEventListener('click', function() {
            console.log(this); // this = currentCell;
            this.classList.toggle('active');
        });

        grid.appendChild(currentCell);
    }
}