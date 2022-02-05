import { CarBuilder } from './car-builder';

const carroApenasComPinturaRosa = new CarBuilder();

carroApenasComPinturaRosa.paintCar('rosa');

console.log(carroApenasComPinturaRosa.getBuildedCar());

const carroCompleto = new CarBuilder();

carroCompleto
  .makeCarBody('Fusca')
  .makeCarDoor('2 Portas')
  .makeCarSeats('Bancos de couro')
  .makeCarSteringWheel('Direção hidráulica')
  .makeCarWheels('Rodas cromadas')
  .makeCarAirBag('100% Algodão')
  .paintCar('Preto');

console.log(carroCompleto.getBuildedCar());
