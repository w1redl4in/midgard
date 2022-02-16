import { VehicleFactory } from './factories/vehicle-factory';
import { Bicycle } from './vehicle/bicycle';
import { Vehicle } from './vehicle/vehicle';

export class BicycleFactory extends VehicleFactory {
  // eslint-disable-next-line class-methods-use-this
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}
