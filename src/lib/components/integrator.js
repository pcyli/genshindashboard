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
            case 'material':
                return genshin.weaponmaterialtypes;
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
        let genshinOption;

        switch (options) {
            case 'all':
                genshinOption = {matchCategories: true};
                break;
            default:
                break;
        }
        return this.getQueryHandler(type)(query, genshinOption);
    }

    getRarityData = (query) =>
        this.getData(
            'rarity',
            this.convertQuery('rarity', query)
        );

    getRarityImage = query => this.getRarityData(query).image;
}