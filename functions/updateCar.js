export function updateCar(cars, reg_number, updatedCar) {
    if (!Array.isArray(cars)) {
        //console.error('Error: cars is not an array');
        return { success: false, message: 'Internal server error' };
    }
    
    //console.log('Current cars:', cars);
    const index = cars.findIndex(car => car.reg_number.trim() === reg_number.trim());
    if (index !== -1) {
        updatedCar.reg_number = reg_number;
        cars[index] = updatedCar;
        return { success: true, message: 'Car updated successfully.', car: updatedCar };
    } else {
        return { success: false, message: `Car with reg_number ${reg_number} not found.` };
    }
}