import integrationConfig from '../data/integrationConfig.json';
import genshin from "genshin-db";

export default class Integrator {
    config = integrationConfig;
    rarityDict = {
        2 : '2starname',
        3 : '3starname',
        4 : '4starname',
        5 : '5starname'
    }

    #sanitizeString = (input) => {
        return input.replace(/"/g, '');
    }

    #getQueryHandler = (type) => {
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
            case 'material':
                return genshin.materials;
            default:
                throw (new Error('getQueryHandler: Unexpected Type'));
        }
    }

    getMaterialsListByDay = (type, day, rarity) => {
        let materialObjects = [];
        switch (type) {
            case 'character':
                materialObjects = this.getData('material', 'talent material', 'objects')
                break;
            case 'weapon':
                materialObjects = this.getData('material', 'weapon material', 'objects')
                break;
            default:
                throw (new Error('getMaterialsListByDay: Unexpected Type'));
        }

        let dayObjects = materialObjects.filter(material => material.daysofweek && material.daysofweek.includes(day));

        return rarity
                ? dayObjects.filter(material => material.rarity === rarity)
                : dayObjects;
    }

    getMaterialData = (name) => {
        return this.getData('material',  this.#sanitizeString(name), 'objects');
    }

    getMaterialLocation = (typeOrMaterial, name) => {
        let material = [];

        switch (typeof typeOrMaterial) {
            case 'string': {
                const matches = name.match(/("([^"]*))|([^ ]*)$/),
                    shortName = matches ? (matches[1] || matches[matches.length - 1]) : name;

                switch (typeOrMaterial) {
                    case 'character':
                        material = this.getData('talentMaterial', shortName, 'all');
                        break;
                    case 'weapon':
                        material = this.getData('weaponMaterial', shortName, 'all');
                        break;
                    default:
                        throw (new Error('getMaterialData: Unexpected Type'));
                }
                break;
            }
            case 'object': {
                material = typeOrMaterial;
                break;
            }
            default:
                throw (new Error('getMaterialsData: Unexpected input'))
        }

        return material
                ? (material.domainofforgery || material.domainofmastery)
                : this.getData('material', name).dropdomain;
    }

    getEntitiesListByMaterial = (type, material) => {
        let list = [];
        switch (type) {
            case 'character':
                list = this.getData('talent', material.name, 'all');
                break;
            case 'weapon':
                list = this.getData('weapon', material.name, 'all');
                break;
            default:
                throw (new Error('getEntitiesListByMaterial: Unexpected Type'));
        }

        //Return array of Entity names
        return list;
    }

    getEntityAscendMaterial = (type, entity) => {
        switch (type) {
            case 'character':
                const characterTalentCosts = this.getData('talent', entity.name).costs,
                      characterTalentMaterialName = characterTalentCosts.lvl10[1].name; //extreme hack

                return this.getData('material', characterTalentMaterialName);
            case 'weapon':
                const weaponMaterialType = entity.costs,
                    weaponMaterialName = weaponMaterialType.ascend6[1].name; //extreme hack

                return this.getData('material', weaponMaterialName);
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
            case 'objects':
                genshinOption = {matchCategories: true, verboseCategories: true};
                break;
            default:
                break;
        }
        return this.#getQueryHandler(type)(query, genshinOption);
    }

    getRarityData = (query) =>
        this.getData(
            'rarity',
            this.convertQuery('rarity', query)
        );

    getRarityImage = query => this.getRarityData(query).image;
}