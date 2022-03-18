import { Cookie } from '../domain/cookie';

export interface ICookieRepository {
  create(cookie: Cookie): Promise<void>;
  listAllCookies(): Promise<Cookie[]>;
}
