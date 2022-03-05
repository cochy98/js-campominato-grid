/**
 * Consegna
    L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco di quadrati, in cui ogni cella contiene un numero tra quelli compresi in un range:
        con difficoltà 1 => tra 1 e 100
        con difficoltà 2 => tra 1 e 81
        con difficoltà 3 => tra 1 e 49
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 */


// Vado a richiamare tramite ID il div 'grid'
const grid = document.getElementById('grid');
console.log(grid);

// Ciclo per 100 volte e aggiungo ogni volta una nuova 'cell' alla 'grid'
for (let i = 0; i < 100; i++){
    grid.appendChild(createNewCell());
    console.log(this);
}



/* ****************************FUNCTIONS************************************* */

/**
 * Questa funzione permette di creare un elemento 'div' ed aggiunge la classe 'cell'.
 * @returns     Restituisce l'elemento appena creato.
 */
function createNewCell (){
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    return newCell;
}