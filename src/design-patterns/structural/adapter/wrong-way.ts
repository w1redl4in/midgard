import isEmail from 'validator/lib/isEmail';

const email = 'felipe1180@hotmail.com';

if (isEmail(email)) {
  console.log('email é válido');
} else {
  console.log('email é inválido');
}
