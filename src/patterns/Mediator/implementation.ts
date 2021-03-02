interface Mediator {
  notify(sender: object, event: string): string[];
}

export class ConcreteMediator implements Mediator {
  private component1: Component1;

  private component2: Component2;

  constructor(c1: Component1, c2: Component2) {
    this.component1 = c1;
    this.component1.setMediator(this);
    this.component2 = c2;
    this.component2.setMediator(this);
  }

  public notify(sender: object, event: string): string[] {
    if (event === 'A') {
      return [
        'Mediator reacts on A and triggers following operations:',
        ...this.component2.doC(),
      ];
    }

    if (event === 'D') {
      return [
        'Mediator reacts on D and triggers following operations:',
        ...this.component1.doB(),
        ...this.component2.doC(),
      ];
    }

    return [''];
  }
}

export class BaseComponent {
  protected mediator: Mediator | null;

  constructor(mediator: (Mediator | null) = null) {
    this.mediator = mediator;
  }

  public setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

export class Component1 extends BaseComponent {
  public doA(): string[] {
    if (!this.mediator) {
      return [''];
    }

    return [
      'Component 1 does A.',
      ...this.mediator.notify(this, 'A'),
    ];
  }

  public doB(): string[] {
    if (!this.mediator) {
      return [''];
    }

    return [
      'Component 1 does B.',
      ...this.mediator.notify(this, 'B'),
    ];
  }
}

export class Component2 extends BaseComponent {
  public doC(): string[] {
    if (!this.mediator) {
      return [''];
    }

    return [
      'Component 2 does C.',
      ...this.mediator.notify(this, 'C'),
    ];
  }

  public doD(): string[] {
    if (!this.mediator) {
      return [''];
    }

    return [
      'Component 2 does D.',
      ...this.mediator.notify(this, 'D'),
    ];
  }
}
