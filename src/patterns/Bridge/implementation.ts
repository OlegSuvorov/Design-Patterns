export class Abstraction {
  protected implementation: Implementation;

  constructor(implementation: Implementation) {
    this.implementation = implementation;
  }

  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `Abstraction: Base operation with:\n${result}`;
  }
}

export class ExtendedAbstraction extends Abstraction {
  public operation(): string {
    const result = this.implementation.operationImplementation();
    return `ExtendedAbstraction: Extended operation with:\n${result}`;
  }
}

interface Implementation {
  operationImplementation(): string;
}

export class ConcreteImplementationA implements Implementation {
  public operationImplementation(): string {
    return 'ImplementationA: Here\'s the result on the platform A.';
  }
}

export class ConcreteImplementationB implements Implementation {
  public operationImplementation(): string {
    return 'ImplementationB: Here\'s the result on the platform B.';
  }
}
