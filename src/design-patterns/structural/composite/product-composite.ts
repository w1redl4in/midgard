/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable class-methods-use-this */
export abstract class ProductComponent {
  abstract getPrice(): number;

  add(product: ProductComponent): void {}
  remove(product: ProductComponent): void {}
}

export class ProductComposite extends ProductComponent {
  getPrice(): number {
    return this.children.reduce((sum, child) => sum + child.getPrice(), 0);
  }
  private children: ProductComponent[] = [];

  add(...products: ProductComponent[]): void {
    products.forEach((product) => this.children.push(product));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);

    if (productIndex !== -1) this.children.splice(productIndex, 1);
  }
}

export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }
  getPrice(): number {
    return this.price;
  }
}

const camiseta = new ProductLeaf('Camiseta', 300);
const shorts = new ProductLeaf('Shorts', 150);
const relogio = new ProductLeaf('Relogio', 300);
const productBox = new ProductComposite();
productBox.add(camiseta, shorts, relogio);

const kindle = new ProductLeaf('Kindle', 300);
const tablet = new ProductLeaf('Tablet', 600);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(kindle, tablet);

productBox.add(anotherProductBox);

console.log('produtos', productBox, 'soma de tudo', productBox.getPrice());
