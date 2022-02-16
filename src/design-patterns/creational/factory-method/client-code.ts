// import { Car } from './vehicle/car';
//
// const fusca = new Car('Fusca');
// fusca.pickUp('Joana');
// fusca.stop();

import { CarFactory } from './car-factory';

const carFactory = new CarFactory();
const fusca = carFactory.getVehicle('fusca');
fusca.pickUp('Felipe');
fusca.stop();
