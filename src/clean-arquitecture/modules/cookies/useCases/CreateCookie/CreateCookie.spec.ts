import { CreateCookie } from './CreateCookie';
import { InMemoryCookieRepository } from '../../repositories/in-memory/InMemoryCookieRepository';
import { ICookieRepository } from '../../repositories/ICookieRepository';

let cookieRepository: ICookieRepository;
let createCookie: CreateCookie;
describe('CreateCookie - UseCase', () => {
  beforeEach(() => {
    cookieRepository = new InMemoryCookieRepository();
    createCookie = new CreateCookie(cookieRepository);
  });
  it('should be able to create a new cookie', async () => {
    const response = await createCookie.execute({
      name: 'Trakinas',
      flavor: 'Chocolate',
    });

    expect(response.isRight()).toBeTruthy();
  });
});
