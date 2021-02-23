export class Flyweight {
  private sharedState: any;

  constructor(sharedState: any) {
    this.sharedState = sharedState;
  }

  public operation(uniqueState: any): string {
    const s = JSON.stringify(this.sharedState);
    const u = JSON.stringify(uniqueState);
    return `Flyweight: Displaying shared (${s}) and unique (${u}) state.`;
  }
}

export class FlyweightFactory {
  private flyweights: {[key: string]: Flyweight} = {};

  constructor(initialFlyweights: string[][]) {
    for (const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state);
    }
  }

  private getKey(state: string[]): string {
    return state.join('_');
  }

  public getFlyweight(sharedState: string[]): any[] {
    const key = this.getKey(sharedState);
    let message;
    if (!(key in this.flyweights)) {
      message = 'FlyweightFactory: Can\'t find a flyweight, creating new one.';
      this.flyweights[key] = new Flyweight(sharedState);
    } else {
      message = 'FlyweightFactory: Reusing existing flyweight.';
    }

    return [this.flyweights[key], message];
  }

  public listFlyweights(addMessage: Function): void {
    const count = Object.keys(this.flyweights).length;
    addMessage([
      `\nFlyweightFactory: I have ${count} flyweights:`,
      ...Object.keys(this.flyweights),
    ]);
  }
}