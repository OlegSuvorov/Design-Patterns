export class Context {
  private strategy: Strategy;

  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): string[] {
    const result = this.strategy.doAlgorithm(['a', 'b', 'c', 'd', 'e']);
    return [
      'Context: Sorting data using the strategy (not sure how it\'ll do it)',
      result.join(','),
    ];
  }
}

interface Strategy {
  doAlgorithm(data: string[]): string[];
}

export class ConcreteStrategyA implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

export class ConcreteStrategyB implements Strategy {
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}
