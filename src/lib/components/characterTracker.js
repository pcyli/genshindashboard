import Tracker from "./tracker";

export default class CharacterTracker extends Tracker {
    render () {
        return this.createMenu(
                    'Character Tracker',
                    this.generateItems(
                        'character',
                        'trackedCharacters'
                    )
                );
    }
}