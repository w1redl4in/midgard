import { Entity } from '../../../core/domain/Entity';
import { Either, right, left } from '../../../core/logic/Either';
import { InvalidFlavorError, InvalidNameError } from './errors';

interface ICookieProps {
  name: string;
  flavor: string;
}

export class Cookie extends Entity<ICookieProps> {
  get name() {
    return this.props.name;
  }

  get flavor() {
    return this.props.flavor;
  }

  private constructor(props: ICookieProps, id?: string) {
    super(props, id);
  }

  static validateName(name: string): Either<InvalidNameError, string> {
    if (!name) {
      return left(new InvalidNameError(name));
    }
    return right(name);
  }

  static validateFlavor(flavor: string): Either<InvalidFlavorError, string> {
    if (!flavor) {
      return left(new InvalidFlavorError(flavor));
    }
    return right(flavor);
  }

  static create(
    props: ICookieProps,
    id?: string,
  ): Either<InvalidNameError | InvalidFlavorError, Cookie> {
    const { name, flavor } = props;

    const nameOrError: Either<InvalidNameError, string> =
      this.validateName(name);

    if (nameOrError.isLeft()) {
      return left(nameOrError.value);
    }

    const flavorOrError: Either<InvalidFlavorError, string> =
      this.validateFlavor(flavor);

    if (flavorOrError.isLeft()) {
      return left(flavorOrError.value);
    }

    return right(new Cookie({ name, flavor }, id));
  }
}
