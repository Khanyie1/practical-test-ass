import { expect } from "chai"
import { addCar } from "../functions/addCar.js";

describe('addCar', () => {
    it('should add a new car to the array', () => {
        const cars = [];
        const newCar = { color: 'blue', make: 'Toyota', model: 'Corolla', reg_number: 'CY 12345' };
        const addedCar = addCar(cars, newCar);

        expect(cars).to.have.lengthOf(1);
        expect(cars[0]).to.deep.equal(newCar);
        expect(addedCar).to.deep.equal(newCar);
    });
});