var fs = require('../car');
var Car = fs.Car;

describe('Car', function() {

  describe('initialization', function() {

    it('it has mileage and gas of zero at initialization', function() {
      var car = new Car(20, 15);
      expect(car.mileage).toEqual(0);
      expect(car.gas).toEqual(0);
    });

  });

  describe('fill', function() {

    it('it adds gas to the car', function() {
      var car = new Car(20,15);
      car.fill(15);
      expect(car.gas).toEqual(15);
    });

  });

  describe('drive', function() {

    it('removes gas and adds mileage to the car', function() {
      var car = new Car(20,15);
      car.gas = 15;
      car.drive(200);
      expect(car.gas).toEqual(5);
      expect(car.mileage).toEqual(200);
    });
  });

  describe('range', function() {

    it('returns how far the car can currently drive', function(){
      var car = new Car(20,15);
      car.gas = 15;
      expect(car.range()).toEqual(300);
    });
  });

});
