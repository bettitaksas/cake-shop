import {CakeFlavor} from "./CakeFlavour";
import {CakeType} from "./CakeType";

export class Cake {
    private readonly type: CakeType;
    private readonly flavor: CakeFlavor;

    constructor(type: CakeType, flavor: CakeFlavor) {
        this.type = type;
        this.flavor = flavor;
    }

    getPrice(): number {
        return this.type === CakeType.Pancake ? 1 : 2;
    }

    getFlavor(): string {
        const flavorKeys = Object.keys(CakeFlavor) as Array<keyof typeof CakeFlavor>;
        return flavorKeys.find((key) => CakeFlavor[key] === this.flavor) || '';
    }
}
