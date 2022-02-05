import { Car } from './car';
import { CarBuilderProtocol } from './interfaces/car-builder-protocol';

export class CarBuilder implements CarBuilderProtocol {
  private car: Car = new Car();
  constructor() {
    this.reset();
  }
  reset(): void {
    this.car = new Car();
  }
  makeCarBody(carBody: string): this {
    this.car.carBody = carBody;
    return this;
  }
  makeCarSeats(carSeat: string): this {
    this.car.carSeats = carSeat;
    return this;
  }
  makeCarWheels(carWheel: string): this {
    this.car.carWheel = carWheel;
    return this;
  }
  makeCarDoor(carDoor: string): this {
    this.car.carDoor = carDoor;
    return this;
  }
  makeCarSteringWheel(carSteringWheel: string): this {
    this.car.carSteringWheel = carSteringWheel;
    return this;
  }
  makeCarAirBag(carAirBag: string): this {
    this.car.carAirBag = carAirBag;
    return this;
  }
  paintCar(color: string): this {
    this.car.paintCar = color;
    return this;
  }
  getBuildedCar() {
    // this.reset();
    return this.car;
  }
}
