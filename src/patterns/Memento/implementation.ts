export class Originator {
  private state: string;

  constructor(state: string, addMessage: Function) {
    this.state = state;
    addMessage(`Originator: My initial state is: ${state}`);
  }

  public doSomething(): string[] {
    this.state = this.generateRandomString(30);
    return [
      'Originator: I\'m doing something important.',
      `Originator: and my state has changed to: ${this.state}`
    ];
  }

  public getState(): string {
    return this.state;
  }

  private generateRandomString(length: number = 10): string {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return Array
      .apply(null, { length } as string[])
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join('');
  }

  public save(): Memento {
    return new ConcreteMemento(this.state);
  }

  public restore(memento: Memento): string {
    this.state = memento.getState();
    return `Originator: My state has changed to: ${this.state}`;
  }
}

interface Memento {
  getState(): string;

  getName(): string;

  getDate(): string;
}

export class ConcreteMemento implements Memento {
  private state: string;

  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  public getState(): string {
    return this.state;
  }

  public getName(): string {
    return `${this.date} / (${this.state.substr(0, 9)}...)`;
  }

  public getDate(): string {
    return this.date;
  }
}

export class Caretaker {
  private mementos: Memento[] = [];

  private originator: Originator;

  constructor(originator: Originator) {
    this.originator = originator;
  }

  public backup(): string {
    this.mementos.push(this.originator.save());
    return 'Caretaker: Saving Originator\'s state...';
  }

  public undo(): string[] {
    if (!this.mementos.length) {
      return ['No previous value'];
    }

    const memento = this.mementos.pop();

    return [
      `Caretaker: Restoring state to: ${memento && memento.getName()}`,
      this.originator.restore(memento as Memento),
    ];
  }

  public showHistory(): string[] {
    const history = ['Caretaker: Here\'s the list of mementos:'];
    for (const memento of this.mementos) {
      history.push(memento.getName());
    }
    return history;
  }
}
