const person = {
  name: 'Felipe',
  lastName: 'Austríaco',

  fullName() {
    return `${this.name} ${this.lastName}`;
  },
};

console.log('objeto original', person.fullName());

const person1 = Object.create(person);

console.log('objeto clonado', person1.fullName());
