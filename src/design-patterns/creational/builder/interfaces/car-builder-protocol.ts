export interface CarBuilderProtocol {
  makeCarBody(carBody: string): this;
  makeCarSeats(carSeat: string): this;
  makeCarWheels(carWheel: string): this;
  makeCarDoor(carDoor: string): this;
  makeCarSteringWheel(carSteringWheel: string): this;
  makeCarAirBag(carAirBag: string): this;
  paintCar(color: string): this;
}
