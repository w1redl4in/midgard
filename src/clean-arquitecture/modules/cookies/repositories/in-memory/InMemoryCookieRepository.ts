import { Cookie } from '../../domain/cookie';
import { ICookieRepository } from '../ICookieRepository';

export class InMemoryCookieRepository implements ICookieRepository {
  constructor(public items: Cookie[] = []) {}
  async create(cookie: Cookie): Promise<void> {
    this.items.push(cookie);
  }

  listAllCookies(): Promise<Cookie[]> {
    throw new Error('Method not implemented.');
  }
}
