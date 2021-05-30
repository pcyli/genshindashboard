import integrationConfig from '../data/integrationConfig.json';
import genshin from "genshin-db";

export default class Integrator {
    constructor() {
        this.config = integrationConfig;
    }

    getQueryHandler = (type) => {
        switch (type) {
            case 'talent':
                return genshin.talentmaterialtypes;
            case 'character':
                return genshin.characters;
            case 'weapon':
                return genshin.weapons;
            case 'rarity':
                return genshin.rarity;
            default:
                throw (new Error('getQueryHandler: No type specified'));
        }
    }

    convertQuery = (type, initialQuery) => {
        try {
            return this.config[type][initialQuery];
        } catch (e) {
            return initialQuery;
        }
    }

    getData = (type, query, options) => {
        return this.getQueryHandler(type)(query, options);
    }

    getRarityData = (query) => {
        return this.getData(
            'rarity',
            this.convertQuery('rarity', query)
        );
    }
}