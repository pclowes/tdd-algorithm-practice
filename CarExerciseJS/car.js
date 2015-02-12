var Car = function (mpg, tanksize){
  this.mpg = mpg;
  this.tanksize = tanksize;
  this.mileage = 0;
  this.gas = 0
};


Car.prototype.fill = function(gallons) {
  this.gas = gallons
  return this.gas
};

Car.prototype.drive = function(miles) {
  this.mileage += miles
  this.gas -= (miles/this.mpg)
}

Car.prototype.range = function() {
  return this.gas * this.mpg
}

module.exports = {
  Car: Car
};
