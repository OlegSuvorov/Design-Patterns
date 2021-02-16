export abstract class Creator {
  public abstract factoryMethod(): Product;
  public someOperation(): string {
    const product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.operation()}`;
  }
}

export class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct1();
  }
}

export class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new ConcreteProduct2();
  }
}

interface Product {
  operation(): string;
}

export class ConcreteProduct1 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct1}';
  }
}

export class ConcreteProduct2 implements Product {
  public operation(): string {
    return '{Result of the ConcreteProduct2}';
  }
}
