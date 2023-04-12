import _ from 'underscore'

/**
 * crea deck co los tipos de cartas basado en Números y tipos de cartas
 * @param {array<string>} cardTypes 
 * @param {array<string>} cardSpecials 
 * @returns {array<string>} deck
 */
export const crearDeck = (cardTypes, cardSpecials) => {

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of cardTypes ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of cardTypes ) {
        for( let esp of cardSpecials ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}