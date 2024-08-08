import { expect } from 'chai';
import { deleteCar } from '../functions/deleteCar.js';

describe('deleteCar', () => {
    it('should delete a car from the array by reg_number', () => {
        const cars = [{ reg_number: 'CY 12345', make: 'Toyota' }];
        const result = deleteCar(cars, 'CY 12345');

        expect(result).to.deep.equal({ success: true, message: 'Car with reg_number CY 12345 deleted.' });
        expect(cars).to.have.lengthOf(0);
    });

    it('should return an error message if car not found', () => {
        const cars = [{ reg_number: 'CY 12345', make: 'Toyota' }];
        const result = deleteCar(cars, 'CY 67890');

        expect(result).to.deep.equal({ success: false, message: 'Car with reg_number CY 67890 not found.' });
        expect(cars).to.have.lengthOf(1);
    });
});
