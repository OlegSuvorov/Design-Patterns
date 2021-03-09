export const codeString =
`/**
 * Создатель содержит некоторое важное состояние, которое может со
 * временем меняться. Он также объявляет метод сохранения состояния
 * внутри Хранителя и метод восстановления состояния из него.
 */
class Originator {
    /**
     * Для удобства состояние создателя хранится внутри одной
     * переменной.
     */
    private state: string;

    constructor(state: string) {
        this.state = state;
        console.log(
        \`Originator: My initial state is: $\{state}\`
        );
    }

    /**
     * Бизнес-логика Создателя может повлиять на его внутреннее
     * состояние. Поэтому клиент должен выполнить резервное
     * копирование состояния с помощью метода save перед запуском
     * методов бизнес-логики.
     */
    public doSomething(): void {
        console.log(
        'Originator: I\\'m doing something important.'
        );
        this.state = this.generateRandomString(30);
        console.log(
        \`Originator: and my state has changed to: $\{this.state}\`
        );
    }

    private generateRandomString(length: number = 10): string {
        const charSet = 
          'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

        return Array
            .apply(null, { length })
            .map(() => 
              charSet.charAt(Math.floor(Math.random() 
              * charSet.length)))
            .join('');
    }

    /**
     * Сохраняет текущее состояние внутри Хранителя.
     */
    public save(): Memento {
        return new ConcreteMemento(this.state);
    }

    /**
     * Восстанавливает состояние Создателя из объекта Хранителя.
     */
    public restore(memento: Memento): void {
        this.state = memento.getState();
        console.log(
        \`Originator: My state has changed to: $\{this.state}\`
        );
    }
}

/**
 * Интерфейс Хранителя предоставляет способ извлечения метаданных
 * Хранителя, таких как дата создания или название. Однако он не
 * раскрывает состояние Создателя.
 */
interface Memento {
    getState(): string;

    getName(): string;

    getDate(): string;
}

/**
 * Конкретный Хранитель содержит инфраструктуру для хранения
 * состояния Создателя.
 */
class ConcreteMemento implements Memento {
    private state: string;

    private date: string;

    constructor(state: string) {
        this.state = state;
        this.date = 
          new Date()
          .toISOString()
          .slice(0, 19)
          .replace('T', ' ');
    }

    /**
     * Создатель использует этот метод, когда восстанавливает
     * своё состояние.
     */
    public getState(): string {
        return this.state;
    }

    /**
     * Остальные методы используются Опекуном для отображения
     * метаданных.
     */
    public getName(): string {
        return \`$\{this.date} / ($\{this.state.substr(0, 9)}...)\`;
    }

    public getDate(): string {
        return this.date;
    }
}

/**
 * Опекун не зависит от Конкретного Хранителя. Таким образом,
 * он не имеет доступа к состоянию создателя, хранящемуся внутри
 * Хранителя. Он работает со всеми Хранителями через базовый
 * интерфейс Хранителя.
 */
class Caretaker {
    private mementos: Memento[] = [];

    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
    }

    public backup(): void {
        console.log('\\nCaretaker: Saving Originator\\'s state...');
        this.mementos.push(this.originator.save());
    }

    public undo(): void {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();

        console.log(
        \`Caretaker: Restoring state to: $\{memento.getName()}\`
        );
        this.originator.restore(memento);
    }

    public showHistory(): void {
        console.log('Caretaker: Here\\'s the list of mementos:');
        for (const memento of this.mementos) {
            console.log(memento.getName());
        }
    }
}
`;

export const description = [
  `Хранитель (англ. Memento) — поведенческий шаблон проектирования, позволяющий, не нарушая инкапсуляцию, 
   зафиксировать и сохранить внутреннее состояние объекта так, чтобы позднее восстановить его в это состояние.`,
  `Существует два возможных варианта реализации данного шаблона: классический, описанный в книге Design Patterns,
   и реже встречающийся нестандартный вариант.`,
  `Шаблон Хранитель используется, когда:`,
  ` - необходимо сохранить снимок состояния объекта (или его части) для последующего восстановления;`,
  ` - прямой интерфейс получения состояния объекта раскрывает детали реализации и нарушает инкапсуляцию объекта;`,
  `Классический вариант:`,
  `Шаблон Хранитель используется двумя объектами: «Создателем» (originator) и «Опекуном» (caretaker).
   «Создатель» — это объект, у которого есть внутреннее состояние. `,
  `Объект «Опекун» может производить некоторые действия с «Создателем», но при этом необходимо иметь возможность
   откатить изменения. Для этого «Опекун» запрашивает у «Создателя» объект «Хранителя». `,
  `Затем выполняет запланированное действие (или последовательность действий). Для выполнения отката «Создателя»
   к состоянию, которое предшествовало изменениям, «Опекун» возвращает объект «Хранителя» его «Создателю».`,
  `«Хранитель» является непрозрачным (то есть таким, который не может или не должен изменяться «Опекуном»).`,
  `Нестандартный вариант:`,
  `Отличие данного варианта от классического заключено в более жёстком ограничении на доступ «Опекуна» к внутреннему
   состоянию «Создателя».`,
  `В классическом варианте у «Опекуна» есть потенциальная возможность получить доступ к внутренним данным «Создателя»
   через «Хранителя», изменить состояние и установить его обратно «Создателю».`,
  `В данном варианте «Опекун» обладает возможностью лишь восстановить состояние «Хранителя», вызвав Restore. Кроме
   всего прочего, «Опекуну» не требуется владеть связью на «Хранителя», чтобы восстановить его состояние.`,
  ` Это позволяет сохранять и восстанавливать состояние сложных иерархических или сетевых структур (состояния объектов
   и всех связей между ними) путём сбора снимков всех зарегистрированных объектов системы.`,
];
