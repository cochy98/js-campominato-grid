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

    // Quando clicco sul bottone seleziono il livello di difficoltà associato
    const levelDifficult = document.getElementById('level-difficult').value;
    // E ne visualizzo il valore in console
    console.log(`Livello di difficoltà selezionato: ${levelDifficult}`);
    
    // Vado a richiamare tramite ID il div 'grid'
    const grid = document.getElementById('grid');

    // Se il livello di difficoltà è uguale a 'easy'
    if(levelDifficult === 'easy'){
        // Ciclo per 100 volte e aggiungo ogni volta una nuova 'cell' alla 'grid'
        for (let i = 1; i <= 100; i++){
            grid.appendChild(createNewCell(i));
        }
    } else if(levelDifficult === 'medium'){
        // Ciclo per 81 volte e aggiungo ogni volta una nuova 'cell' alla 'grid'
        for (let i = 1; i <= 81; i++){
            grid.appendChild(createNewCell(i));
        }
    } else if(levelDifficult === 'strong'){
        // Ciclo per 49 volte e aggiungo ogni volta una nuova 'cell' alla 'grid'
        for (let i = 1; i <= 49; i++){
            grid.appendChild(createNewCell(i));
        }
    }
});






/* ****************************FUNCTIONS************************************* */

/**
 * Questa funzione permette di creare un elemento 'div' ed aggiunge la classe 'cell'.
 * @param {*} number    Numero che verrà inserito dentro l'html del div.cell.
 * @returns             Restituisce l'elemento appena creato.
 */
function createNewCell (number){
    const newCell = document.createElement('div');
    newCell.classList.add('cell');
    newCell.innerHTML = `${number}`;
    return newCell;
}