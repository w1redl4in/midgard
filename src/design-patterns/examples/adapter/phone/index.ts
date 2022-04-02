interface IOS {
  useLightning(): void;
}

interface Android {
  useMicroUSB(): void;
}

class LightningToMicroUSBAdapter implements Android {
  iphoneDevice: IOSDevice;

  constructor(iphone: IOSDevice) {
    this.iphoneDevice = iphone;
  }
  useMicroUSB(): void {
    console.log('Want to use micro USB, converting to Lightning');
    this.iphoneDevice.useLightning();
  }
}

class MicroUSBToLigthningAdapter implements IOS {
  androidDevice: AndroidDevice;

  constructor(xiaomi: AndroidDevice) {
    this.androidDevice = xiaomi;
  }
  useLightning(): void {
    console.log('Want to use lightning, converting to MicroUSB');
    this.androidDevice.useMicroUSB();
  }
}

class IOSDevice {
  useLightning() {
    console.log('Using lightning port');
  }
}

class AndroidDevice {
  useMicroUSB() {
    console.log('Using microusb port');
  }
}

const iphone = new IOSDevice();
const microUSBAdapter = new LightningToMicroUSBAdapter(iphone);

const xiaomi = new AndroidDevice();
const lightningAdapter = new MicroUSBToLigthningAdapter(xiaomi);

console.log(microUSBAdapter.useMicroUSB());
console.log(lightningAdapter.useLightning());
