import { EmailValidatorClassAdapter } from './email-validator-class-adapter';
import { emailValidatorFnAdapter } from './email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './email-validator-protocol';

function validaEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
) {
  if (emailValidator.isEmail(email)) {
    console.log('email válido');
  } else {
    console.log('email inválido');
  }
}

function validaEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
) {
  if (emailValidator(email)) {
    console.log('email válido');
  } else {
    console.log('email inválido');
  }
}

console.log('---------------CLASS-------------------');
validaEmailClass(new EmailValidatorClassAdapter(), 'felipe1180@hotmail.com');
validaEmailClass(new EmailValidatorClassAdapter(), 'felipe1180@hotmailcom');
console.log('---------------------------------------');

console.log('-----------------FN--------------------');
validaEmailFn(emailValidatorFnAdapter, 'felipe1180@hotmail.com');
validaEmailFn(emailValidatorFnAdapter, 'felipe1180@hotmaicom');
console.log('---------------------------------------');
