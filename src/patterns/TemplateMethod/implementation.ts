abstract class AbstractClass {
  public templateMethod(): string[] {
    return [
      this.baseOperation1(),
      this.requiredOperations1(),
      this.baseOperation2(),
      this.hook1(),
      this.requiredOperation2(),
      this.baseOperation3(),
      this.hook2(),
    ]
  }

  protected baseOperation1(): string {
   return 'AbstractClass says: I am doing the bulk of the work';
  }

  protected baseOperation2(): string {
    return 'AbstractClass says: But I let subclasses override some operations';
  }

  protected baseOperation3(): string {
    return 'AbstractClass says: But I am doing the bulk of the work anyway';
  }

  protected abstract requiredOperations1(): string;

  protected abstract requiredOperation2(): string;

  protected hook1(): string { return '' }

  protected hook2(): string { return '' }
}

export class ConcreteClass1 extends AbstractClass {
  protected requiredOperations1(): string {
    return 'ConcreteClass1 says: Implemented Operation1';
  }

  protected requiredOperation2(): string {
    return 'ConcreteClass1 says: Implemented Operation2';
  }
}

export class ConcreteClass2 extends AbstractClass {
  protected requiredOperations1(): string {
    return 'ConcreteClass2 says: Implemented Operation1';
  }

  protected requiredOperation2(): string {
    return 'ConcreteClass2 says: Implemented Operation2';
  }

  protected hook1(): string {
    return 'ConcreteClass2 says: Overridden Hook1';
  }
}
