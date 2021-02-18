interface Component {
  operation(): string;
}

export class ConcreteComponent implements Component {
  public operation(): string {
    return 'ConcreteComponent';
  }
}

export class Decorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public operation(): string {
    return this.component.operation();
  }
}

export class ConcreteDecoratorA extends Decorator {
  public operation(): string {
    return `DecoratorA(${super.operation()})`;
  }
}

export class ConcreteDecoratorB extends Decorator {
  public operation(): string {
    return `DecoratorB(${super.operation()})`;
  }
}
