import { Either, left } from '../../../../core/logic/Either';
import { Cookie } from '../../domain/cookie';
import { ICookieRepository } from '../../repositories/ICookieRepository';
import { InvalidNameOrFlavorError } from './errors/invalid-name-or-flavor-error';
type CreateUserDTO = {
  name: string;
  flavor: string;
};
export class CreateCookie {
  constructor(private cookieRepository: ICookieRepository) {}
  async execute(
    props: CreateUserDTO,
  ): Promise<Either<InvalidNameOrFlavorError, Cookie>> {
    const { name, flavor } = props;

    const cookie = Cookie.create({ name, flavor });

    if (cookie.isLeft()) {
      return left(new InvalidNameOrFlavorError());
    }

    await this.cookieRepository.create(cookie.value);

    return cookie;
  }
}
