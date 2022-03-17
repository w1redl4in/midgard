abstract class BeerComponent {
  abstract quantoTaABreja(): number;

  add(...beers: BeerComponent[]): void {}
}

class FardoDeBrahma extends BeerComponent {
  constructor(public price: number) {
    super();
  }
  quantoTaABreja(): number {
    return this.price;
  }
}

class FardoDeSkol extends BeerComponent {
  constructor(public price: number) {
    super();
  }
  quantoTaABreja(): number {
    return this.price;
  }
}

class BeerComposite extends BeerComponent {
  public readonly children: BeerComponent[] = [];

  add(...beers: BeerComponent[]): void {
    beers.forEach((beer) => this.children.push(beer));
  }

  quantoTaABreja(): number {
    return this.children.reduce(
      (sum, child) => sum + child.quantoTaABreja(),
      0,
    );
  }
}

const fardoDeBrahma = new FardoDeBrahma(35);
const fardoDeSkol = new FardoDeSkol(30);
const carrinhoDoMercadoComFardoDeBrahmaESkol = new BeerComposite();
carrinhoDoMercadoComFardoDeBrahmaESkol.add(fardoDeBrahma, fardoDeSkol);
console.log(
  'quanto vai sair as compras',
  carrinhoDoMercadoComFardoDeBrahmaESkol.quantoTaABreja(), // 65
);
