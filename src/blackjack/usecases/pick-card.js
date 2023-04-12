/**
 * 
 * @param {array[string]} deck - pila de cartas 
 * @returns {string} carta - carta al azar del deck
 */
export const pedirCarta = (deck) => {

    if ( deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}