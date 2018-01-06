'use strict';
const ogmneo = require('./ogmneo');
const { isGuid } = require('./isGuid');

class Printer {
    
    static printCypherIfEnabled(cypher) {
        if(ogmneo.logCypherEnabled == true) {
            console.info(cypher);
        }
    }
}

module.exports = Printer;