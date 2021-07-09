import integrationConfig from '../data/integrationConfig.json';
import genshin from "genshin-db";

export default class Integrator {
    constructor() {
        this.config = integrationConfig;
    }

    getQueryHandler = (type) => {
        switch (type) {
            case 'talent':
                return genshin.talents;
            case 'talentMaterial':
                return genshin.talentmaterialtypes;
            case 'character':
                return genshin.characters;
            case 'weapon':
                return genshin.weapons;
            case 'weaponMaterial':
                return genshin.weaponmaterialtypes;
            case 'rarity':
                return genshin.rarity;
            default:
                throw (new Error('getQueryHandler: Unexpected Type'));
        }
    }

    getEntitiesListByMaterial = (type, material) => {
        switch (type) {
            case 'character':
                return this.getData('talent', material, 'all');
            case 'weapon':
                return this.getData('weapon', material, 'all');
            default:
                throw (new Error('getEntitiesListByMaterial: Unexpected Type'))
        }
    }

    getEntityMaterial = (type, entity) => {
        switch (type) {
            case 'character':
                const talentMaterialTypes = this.getData('talentMaterial', 'names', 'all'),
                      characterTalentCosts = this.getData('talent', entity.name).costs,
                      characterTalentMaterialName = characterTalentCosts.lvl2[1].name; //extreme hack

                for (const talentMaterial of talentMaterialTypes) {
                    if (characterTalentMaterialName.includes(talentMaterial)) {
                        return this.getData('talentMaterial' , talentMaterial);
                    }
                }
                throw (new Error('getEntitiesListByMaterial: Unexpected Talent Material ' + characterTalentMaterialName));
            case 'weapon':
                return this.getData('weaponMaterial', entity.weaponmaterialtype);
            default:
                throw (new Error('getEntitiesListByMaterial: Unexpected Type'))
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