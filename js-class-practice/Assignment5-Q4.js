
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Prototype method
Car.prototype.getDetails = function() {
    console.log(this.brand + " " + this.model);
};

// Create objects
const car1 = new Car("Tata", "Nexon");
const car2 = new Car("Mahindra", "Thar");

car1.getDetails();
car2.getDetails();
