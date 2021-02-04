export class Singleton {
  private static instance: Singleton;
  private constructor() {}

  public static getInstance(addMessage: Function): Singleton {
    const message = Singleton.instance
      ? 'Объект уже существует!'
      : 'Создан экземпляр объекта!';

    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }

    addMessage(message);
    return Singleton.instance;
  }
}
