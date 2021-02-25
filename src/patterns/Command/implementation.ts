interface Command {
  execute(): string[];
}

export class SimpleCommand implements Command {
  private payload: string;

  constructor(payload: string) {
    this.payload = payload;
  }

  public execute(): string[] {
    return [`SimpleCommand: See, I can do simple things like printing (${this.payload})`];
  }
}

export class ComplexCommand implements Command {
  private receiver: Receiver;

  private a: string;

  private b: string;

  constructor(receiver: Receiver, a: string, b: string) {
    this.receiver = receiver;
    this.a = a;
    this.b = b;
  }

  public execute(): string[] {
    return [
      'ComplexCommand: Complex stuff should be done by a receiver object.',
      this.receiver.doSomething(this.a),
      this.receiver.doSomethingElse(this.b),
    ];
  }
}

export class Receiver {
  public doSomething(a: string): string {
    return `Receiver: Working on (${a}.)`;
  }

  public doSomethingElse(b: string): string {
    return `Receiver: Also working on (${b}.)`;
  }
}

export class Invoker {
  private onStart: Command;

  private onFinish: Command;

  public setOnStart(command: Command): void {
    this.onStart = command;
  }

  public setOnFinish(command: Command): void {
    this.onFinish = command;
  }

  public doSomethingImportant(): string[] {
    let result = ['Invoker: Does anybody want something done before I begin?'];
    if (this.isCommand(this.onStart)) {
      result = [
        ...result,
        ...this.onStart.execute(),
      ];
    }

    result.push('Invoker: ...doing something really important...');

    result.push('Invoker: Does anybody want something done after I finish?');

    if (this.isCommand(this.onFinish)) {
      result = [
        ...result,
        ...this.onFinish.execute(),
      ];
    }

    return result;
  }

  private isCommand(object: any): object is Command {
    return !!object.execute;
  }
}
