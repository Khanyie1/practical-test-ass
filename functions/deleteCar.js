export function deleteCar(cars, reg_number) {
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].reg_number === reg_number) {
            cars.splice(i, 1);
            return { success: true, message: `Car with reg_number ${reg_number} deleted.` };
        }
    }
    return { success: false, message: `Car with reg_number ${reg_number} not found.` };
}
