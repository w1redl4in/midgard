import { left } from '../../../core/logic/Either';
import { Cookie } from './cookie';
import { InvalidFlavorError, InvalidNameError } from './errors';
describe('Cookie Domain', () => {
  it('should be able to create a Cookie instance when data is valid', () => {
    const cookieOrError = Cookie.create(
      { name: 'Trakinas', flavor: 'Chocolate' },
      '3213231',
    );
    expect(cookieOrError.isRight()).toBeTruthy();
  });
  it('shouldnt able to create a Cookie without a name', () => {
    const cookieOrError = Cookie.create({ name: '', flavor: 'Chocolate' });
    expect(cookieOrError.isLeft()).toBeTruthy();
    expect(cookieOrError).toEqual(left(new InvalidNameError('')));
  });
  it('shouldnt able to create a Cookie without a flavor', () => {
    const cookieOrError = Cookie.create({ name: 'Trakinas', flavor: '' });
    expect(cookieOrError.isLeft()).toBeTruthy();
    expect(cookieOrError).toEqual(left(new InvalidFlavorError('')));
  });
});
