class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "Beep";
    }
    toString() {
        return `The vehicle is a ${this.year} ${this.make} ${this.model}.`
    } 
};

//part 2

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make,model,year);
        this.numWheels = 4;
    }
}

//part 3
class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }
    revEngine() {
        return 'VROOM!!!';
    }
};

//part 4

class Garage {
    constructor(space) {
        this.space = space;
        this.vehicles = [];
    }

    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return 'Space Reserved for Vehicles'
        }

        if (this.vehicles.length >= this.space) {
            return 'Garage is Full';
        }

        this.vehicles.push(newVehicle);
        return `${this.year} ${this.make} ${this.model} has been parked!`
    }
}

