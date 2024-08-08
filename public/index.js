document.addEventListener("alpine:init", () => {
    Alpine.data('data', () => {
        return {
            newCar: {
                color: '',
                make: '',
                model: '',
                reg_number: ''
            },

            updateCar: {
                color: '',
                make: '',
                model: '',
                reg_number: ''
            },
    
            async addCar() {
                try {
                    const response = await axios.post('http://localhost:3011/api/Khanyie/car', this.newCar);
                    alert('Car added: ' + JSON.stringify(response.data));
                    this.newCar = { color: '', make: '', model: '', reg_number: '' };
                } catch (error) {
                    alert('Error adding car: ' + error.message);
                }
            },

            async updateCar() {
                try {
                    const carData = { 
                        color: this.updateCar.color, 
                        make: this.updateCar.make, 
                        model: this.updateCar.model, 
                        reg_number: this.updateCar.reg_number 
                    };
            
                    const response = await axios.post('http://localhost:3011/api/Khanyie/car/update', carData);
                    alert('Car updated: ' + JSON.stringify(response.data));

                    this.updateCar = { color: '', make: '', model: '', reg_number: '' };
                } catch (error) {
                    alert('Error updating car: ' + error.message);
                }
            },
            
            deleteRegNumber: '',
    
            async deleteCar() {
                try {
                    const response = await axios.post('http://localhost:3011/api/Khanyie/car/delete', { reg_number: this.deleteRegNumber });
                    alert('Car deleted: ' + JSON.stringify(response.data));
                    this.deleteRegNumber = '';
                } catch (error) {
                    alert('Error deleting car: ' + error.message);
                }
            },
            
            mostPopularCar: '',

            async getMostPopularCar() {
                try {
                    const response = await axios.get('http://localhost:3011/api/Khanyie/mostPopularCar');
                    this.mostPopularCar = response.data.popularCar;
                    setTimeout(() => {
                        this.mostPopularCar = ''
                    }, 5000)
                } catch (error) {
                    alert('Error fetching most popular car: ' + error.message);
                }
            }
        }
    })
})