export function mostPopularCar(cars) {
    const makeCount = {};
    cars.forEach(car => {
        const make = car.make;
        makeCount[make] = (makeCount[make] || 0) + 1;
    });

    let mostPopularMake = '';
    let maxCount = 0;
    for (const make in makeCount) {
        if (makeCount[make] > maxCount) {
            mostPopularMake = make;
            maxCount = makeCount[make];
        }
    }
    return mostPopularMake;
}
