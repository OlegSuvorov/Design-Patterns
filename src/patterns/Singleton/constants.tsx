export const codeString =
` class Singleton {
  private static instance: Singleton;

  /**
   * Конструктор Одиночки всегда должен быть
   * скрытым, чтобы предотвратить
   * создание объекта через оператор new.
   */
  private constructor() { }

  /**
   * Статический метод, управляющий доступом к
   * экземпляру одиночки.
   * Эта реализация позволяет вам расширять
   * класс Одиночки, сохраняя повсюду
   * только один экземпляр каждого подкласса.
   */
  public static getInstance(): Singleton {
      const message = Singleton.instance
      ? 'Объект уже существует!'
      : 'Создан экземпляр объекта!';
      
      if (!Singleton.instance) {
          Singleton.instance = new Singleton();
      }
      
      console.log(message);
      
      return Singleton.instance;
  }
}
  `;

export const description = [
  `Одиночка (англ. Singleton) — порождающий шаблон проектирования, гарантирующий, что в однопоточном приложении будет
   единственный экземпляр некоторого класса, и предоставляющий глобальную точку доступа к этому экземпляру.`,
  `У класса есть только один экземпляр, и он предоставляет к нему глобальную точку доступа. 
   При попытке создания данного объекта он создаётся только в том случае, если ещё не существует, в противном случае 
   возвращается ссылка на уже существующий экземпляр и нового выделения памяти не происходит.`,
  `Существенно то, что можно пользоваться именно экземпляром класса, так как при этом во многих случаях становится
   доступной более широкая функциональность. Например, к описанным компонентам класса можно обращаться через интерфейс,
   если такая возможность поддерживается языком.`,
  `Глобальный «одинокий» объект бывает нужен:`,
  ` - если используется существующая объектно-ориентированная библиотека и ей нужен объект, унаследованный от 
    определённого класса/интерфейса;`,
  ` - если есть шансы, что один объект когда-нибудь превратится в несколько;`,
  ` - если интерфейс объекта (например, игрового мира) слишком сложен и не стоит засорять основное пространство имён 
  большим количеством функций;`,
  ` - если, в зависимости от каких-нибудь условий и настроек, создаётся один из нескольких объектов. Например, 
  в зависимости от того, ведётся лог или нет, создаётся настоящий объект, пишущий в файл, или «заглушка», ничего не делающая.`,
];
