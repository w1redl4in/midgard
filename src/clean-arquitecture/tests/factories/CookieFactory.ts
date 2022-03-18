import { Cookie } from '../../modules/cookies/domain/cookie';

type CookieOverrides = {
  name: string;
  flavor: string;
};

export function createCookieFactory(overrides?: CookieOverrides) {
  const cookie = Cookie.create(
    {
      name: overrides?.name ?? 'Trakinas',
      flavor: overrides?.flavor ?? 'Morango',
    },
    'trakinas_id',
  );

  return cookie.value as Cookie;
}
