export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

export class ValidateEmailLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateNumberLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'number';
  }
}

export class ValidateComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];
  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }
    return true;
  }

  add(...validations: ValidationComponent[]) {
    validations.forEach((validation) => this.children.push(validation));
  }
}

const validateEmail = new ValidateEmailLeaf();
const validateNumber = new ValidateNumberLeaf();

const validationComposite = new ValidateComposite();

validationComposite.add(validateEmail, validateNumber);

console.log(validationComposite.validate('1@1'));
