import { expect } from 'chai';
import { updateCar } from '../functions/updateCar.js';

describe('updateCar', () => {
    it('should update an existing car by reg_number', () => {
        const cars = [{ reg_number: 'CY 12345', make: 'Toyota', color: 'red' }];
        const updatedCar = { make: 'Toyota', color: 'blue' };

        const result = updateCar(cars, 'CY 12345', updatedCar);
        
        expect(result.success).to.be.true;
        expect(result.message).to.equal('Car updated successfully.');
        expect(cars[0]).to.deep.equal({ reg_number: 'CY 12345', make: 'Toyota', color: 'blue' });
    });

    it('should return an error if car not found', () => {
        const cars = [{ reg_number: 'CY 12345', make: 'Toyota', color: 'red' }];
        const updatedCar = { make: 'Toyota', color: 'blue' };

        const result = updateCar(cars, 'CY 67890', updatedCar);

        expect(result.success).to.be.false;
        expect(result.message).to.equal('Car with reg_number CY 67890 not found.');
    });

    it('should handle non-array cars input accordingly', () => {
        const cars = null;
        const updatedCar = { make: 'Toyota', color: 'blue' };

        const result = updateCar(cars, 'CY 12345', updatedCar);

        expect(result.success).to.be.false;
        expect(result.message).to.equal('Internal server error');
    });
});
