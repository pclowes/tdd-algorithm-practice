class Car
  attr_accessor :mpg, :tanksize, :mileage, :gas
  def initialize(mpg, tanksize)
    @mpg = mpg
    @tanksize = tanksize
    @mileage = 0
    @gas = 0
  end

  def fill(gallons)
    @gas = gallons
  end

  def drive(miles)
    @gas -= (miles/@mpg)
    @mileage += miles
  end

  def range
    @gas*@mpg
  end
end

# ------ code above this line ------

require 'rspec/autorun'

RSpec.describe 'Car' do
  it 'tests initialization' do
    chevy = Car.new(10, 30)
    expect(chevy.mpg).to eq(10)
    expect(chevy.tanksize).to eq(30)
    expect(chevy.mileage).to eq(0)
    expect(chevy.gas).to eq(0)
  end

  it 'tests fill' do
    chevy = Car.new(10, 30)
    chevy.fill(30)
    expect(chevy.mileage).to eq(0)
    expect(chevy.gas).to eq(30)
  end

  it 'tests drive' do
    chevy = Car.new(10, 30)
    chevy.fill(30)
    chevy.drive(30)
    expect(chevy.mileage).to eq(30)
    expect(chevy.gas).to eq(27)
  end

  it 'tests range' do
    chevy = Car.new(10, 30)
    chevy.fill(30)
    expect(chevy.range).to eq(300)
  end

end
