import { VehicleFactory } from './factories/vehicle-factory';
import { Car } from './vehicle/car';
import { Vehicle } from './vehicle/vehicle';

export class CarFactory extends VehicleFactory {
  // eslint-disable-next-line class-methods-use-this
  getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
