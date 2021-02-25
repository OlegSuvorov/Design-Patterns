interface Subject {
  request(): void;
}

export class RealSubject implements Subject {
  public request(): string {
    return 'RealSubject: Handling request.';
  }
}

export class Proxy implements Subject {
  private realSubject: RealSubject;

  constructor(realSubject: RealSubject) {
    this.realSubject = realSubject;
  }

  public request(): void | string[] {
    if (this.checkAccess()) {
      return [
        this.realSubject.request(),
        this.logAccess(),
      ]
    }
  }

  private checkAccess(): string {
    return 'Proxy: Checking access prior to firing a real request.';
  }

  private logAccess(): string {
    return 'Proxy: Logging the time of request.';
  }
}