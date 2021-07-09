import Tracker from "./tracker";

export default class WeaponTracker extends Tracker {
    render () {
        return this.createMenu(
                    'Weapon Tracker',
                    this.generateItems(
                        'weapon',
                        'weapon'
                    )
                );
    }
}