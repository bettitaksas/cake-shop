import {CakeType} from "../Cakes/CakeType";
import {Cake} from "../Cakes/Cake";
import {CakeFlavor} from "../Cakes/CakeFlavour";

export class Oven {
    private readonly type: CakeType;
    private oilAvailable: boolean;

    constructor(type: CakeType, oilAvailable: boolean) {
        this.type = type;
        this.oilAvailable = oilAvailable;
    }

    produceCake(flavor: CakeFlavor): Cake | null {
        if (this.type === CakeType.Pancake && this.oilAvailable) {
            this.oilAvailable = false;
            return new Cake(this.type, flavor);
        } else if (this.type === CakeType.ChimneyCake) {
            return new Cake(this.type, flavor);
        }
        return null;
    }

    refillOil(): void {
        if (this.type === CakeType.Pancake) {
            this.oilAvailable = true;
        }
    }
}
