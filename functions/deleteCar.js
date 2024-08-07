export function deleteCar(cars, reg_number) {
    const initialLength = cars.length;
    const updatedCars = cars.filter(car => car.reg_number !== reg_number);
    if (updatedCars.length < initialLength) {
        return { success: true, message: `Car with reg_number ${reg_number} deleted.` };
    } else {
        return { success: false, message: `Car with reg_number ${reg_number} not found.` };
    }
}