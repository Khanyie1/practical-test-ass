import { expect } from 'chai';
import { mostPopularCar } from '../functions/mostPopularCar.js';

describe('mostPopularCar', () => {
    it('should return the most popular car make', () => {
        const cars = [
            { make: 'Toyota' },
            { make: 'Toyota' },
            { make: 'Ford' }
        ];

        const result = mostPopularCar(cars);
        expect(result).to.equal('Toyota');
    });

    it('should return an empty string if there are no cars', () => {
        const cars = [];
        const result = mostPopularCar(cars);

        expect(result).to.equal('');
    });
});
