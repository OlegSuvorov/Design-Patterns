export class Context {
  private state: State;

  constructor(state: State, addMessage: Function) {
    this.transitionTo(state, addMessage);
  }

  public transitionTo(state: State, addMessage?: Function): string {
    this.state = state;
    this.state.setContext(this);
    if (addMessage) {
      addMessage(`Context: Transition to ${state.constructor.name}.`);
    }
    return `Context: Transition to ${state.constructor.name}.`;
  }

  public request1(): string[] {
    return this.state.handle1();
  }

  public request2(): string[] {
    return this.state.handle2();
  }
}

abstract class State {
  protected context: Context;

  public setContext(context: Context) {
    this.context = context;
  }

  public abstract handle1(): string[];

  public abstract handle2(): string[];
}

export class ConcreteStateA extends State {
  public handle1(): string[] {
    return [
      'ConcreteStateA handles request1.',
      'ConcreteStateA wants to change the state of the context.',
      this.context.transitionTo(new ConcreteStateB()),
    ]
  }

  public handle2(): string[] {
    return ['ConcreteStateA handles request2.'];
  }
}

export class ConcreteStateB extends State {
  public handle1(): string[] {
    return ['ConcreteStateB handles request1.'];
  }

  public handle2(): string[] {
    return [
      'ConcreteStateB handles request2.',
      'ConcreteStateB wants to change the state of the context.',
      this.context.transitionTo(new ConcreteStateA()),
    ];
  }
}
