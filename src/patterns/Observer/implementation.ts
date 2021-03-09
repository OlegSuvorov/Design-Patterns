interface Subject {
  attach(observer: Observer): string;

  detach(observer: Observer): string;

  notify(): void;
}

export class ConcreteSubject implements Subject {
  public state: number;

  private observers: Observer[] = [];

  public attach(observer: Observer): string {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return 'Subject: Observer has been attached already.';
    }

    this.observers.push(observer);
    return 'Subject: Attached an observer.'
  }

  public detach(observer: Observer): string {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return 'Subject: Nonexistent observer.';
    }

    this.observers.splice(observerIndex, 1);
    return 'Subject: Detached an observer.';
  }

  public notify(): string[] {
    const result = ['Subject: Notifying observers...'];
    for (const observer of this.observers) {
      result.push(observer.update(this));
    }
    return result;
  }

  public someBusinessLogic(): string[] {
    const result = ['\nSubject: I\'m doing something important.'];
    this.state = Math.floor(Math.random() * (10 + 1));

    result.push(`Subject: My state has just changed to: ${this.state}`);
    return [
      ...result,
      ...this.notify(),
    ];
  }
}

interface Observer {
  update(subject: Subject): string;
}

export class ConcreteObserverA implements Observer {
  public update(subject: Subject): string {
    if (subject instanceof ConcreteSubject && subject.state < 3) {
      return 'ConcreteObserverA: Reacted to the event.';
    }
    return '';
  }
}

export class ConcreteObserverB implements Observer {
  public update(subject: Subject): string {
    if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
     return 'ConcreteObserverB: Reacted to the event.';
    }
    return '';
  }
}
