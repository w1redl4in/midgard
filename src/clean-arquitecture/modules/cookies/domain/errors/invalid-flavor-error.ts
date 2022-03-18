import { DomainError } from './domain-error';

export class InvalidFlavorError extends Error implements DomainError {
  constructor(flavor: string) {
    super(`Invalid flavor: ${flavor}`);
    this.name = 'InvalidFlavorError';
  }
}
