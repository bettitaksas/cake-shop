import {CakeShop} from "../src/CakeShop";
import {Cake} from "../src/Cakes/Cake";
import {Oven} from "../src/Ovens/Oven";
import {CakeType} from "../src/Cakes/CakeType";
import {CakeFlavor} from "../src/Cakes/CakeFlavour";

describe('CakeShop methods', () => {
    let cakeShop: CakeShop;
    let pancake: Cake;
    let chimneyCake: Cake;

    beforeEach(() => {
        cakeShop = new CakeShop();

        const pancakeOven = new Oven(CakeType.Pancake, true);
        const chimneyCakeOven = new Oven(CakeType.ChimneyCake, false);

        pancake = pancakeOven.produceCake(CakeFlavor.Strawberry)!;
        chimneyCake = chimneyCakeOven.produceCake(CakeFlavor.Chocolate)!;

        if (pancake) {
            cakeShop.sellCake(pancake);
        }

        if (chimneyCake) {
            cakeShop.sellCake(chimneyCake);
        }
    });

    test('should add the price of the cake to the income', () => {
        expect(cakeShop.getIncome()).toBe(3); // 2 (chimney cake) + 1 (pancake)
    });

    test('should return the total income of the cake shop', () => {
        const totalIncome = cakeShop.getIncome();
        expect(totalIncome).toEqual(expect.any(Number));
    });
});
