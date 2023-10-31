import {Cake} from "./Cakes/Cake";
import {Oven} from "./Ovens/Oven";

export class CakeShop {
    private readonly ovens: Oven[];
    private income: number;

    constructor() {
        this.ovens = [];
        this.income = 0;
    }

    addOven(oven: Oven): void {
        this.ovens.push(oven);
    }

    sellCake(cake: Cake | null): void {
        if (cake) {
            this.income += cake.getPrice();
        }
    }

    getIncome(): number {
        return this.income;
    }
}
