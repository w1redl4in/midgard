import { UseCaseError } from '../../../../../core/domain/errors/UseCaseError';

export class InvalidNameOrFlavorError extends Error implements UseCaseError {
  constructor() {
    super(`Invalid name/flavor combination.`);
    this.name = 'InvalidNameOrFlavorError';
  }
}
