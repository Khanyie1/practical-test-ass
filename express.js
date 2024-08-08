import express from 'express'
import cors from 'cors'
import { cars } from './cars.js';
import { mostPopularCar } from './functions/mostPopularCar.js';
import { addCar } from './functions/addCar.js';
import { deleteCar } from './functions/deleteCar.js';
import { updateCar } from './functions/updateCar.js';

const app = express();

app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use(cors())
app.use(express.static('public'))


app.get('/api/Khanyie/mostPopularCar', function(req, res){
    const popularCar = mostPopularCar(cars);
    res.json({
        popularCar
    })
})

app.post('/api/Khanyie/car', function(req, res) {
    const addNewCar = req.body;
    const addedCar = addCar(cars, addNewCar);
    res.json(addedCar);
});

app.post('/api/Khanyie/car/delete', function (req, res) {
    const { reg_number } = req.body;
    if (!reg_number) {
        return res.status(400).json({ success: false, message: 'Registration number is required.' });
    }
    const result = deleteCar(cars, reg_number);
    res.json(result);
});

app.post('/api/Khanyie/car/update', function(req, res) {
    const { reg_number, ...updatedCar } = req.body;

    console.log('Incoming reg_number:', reg_number);
    console.log('Incoming updatedCar:', updatedCar);

    if (!reg_number) {
        return res.status(400).json({ success: false, message: 'Registration number is required.' });
    }

    const result = updateCar(cars, reg_number, updatedCar);
    console.log('Update result:', result);

    res.json(result);
});

const PORT = process.env.PORT || 3011

app.listen(PORT, function (){
    console.log(`App starting on port: ${PORT}`)
})