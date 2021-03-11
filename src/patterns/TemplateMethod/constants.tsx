export const codeString =
`/**
 * Абстрактный Класс определяет шаблонный метод, содержащий скелет
 * некоторого алгоритма, состоящего из вызовов (обычно) абстрактных
 * примитивных операций.
 *
 * Конкретные подклассы должны реализовать эти операции, но
 * оставить сам шаблонный метод без изменений.
 */
abstract class AbstractClass {
    /**
     * Шаблонный метод определяет скелет алгоритма.
     */
    public templateMethod(): void {
        this.baseOperation1();
        this.requiredOperations1();
        this.baseOperation2();
        this.hook1();
        this.requiredOperation2();
        this.baseOperation3();
        this.hook2();
    }

    /**
     * Эти операции уже имеют реализации.
     */
    protected baseOperation1(): void {
        console.log(
        'AbstractClass says: I am doing the bulk of the work'
        );
    }

    protected baseOperation2(): void {
        console.log(
          'AbstractClass says: 
           But I let subclasses override some operations'
        );
    }

    protected baseOperation3(): void {
        console.log(
          'AbstractClass says:
           But I am doing the bulk of the work anyway'
        );
    }

    /**
     * А эти операции должны быть реализованы в подклассах.
     */
    protected abstract requiredOperations1(): void;

    protected abstract requiredOperation2(): void;

    /**
     * Это «хуки». Подклассы могут переопределять их, но это не
     * обязательно, поскольку у хуков уже есть стандартная
     * (но пустая) реализация. Хуки предоставляют дополнительные
     * точки расширения в некоторых критических местах алгоритма.
     */
    protected hook1(): void { }

    protected hook2(): void { }
}

/**
 * Конкретные классы должны реализовать все абстрактные операции
 * базового класса. Они также могут переопределить некоторые
 * операции с реализацией по умолчанию.
 */
class ConcreteClass1 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass1 says: Implemented Operation1');
    }

    protected requiredOperation2(): void {
        console.log('ConcreteClass1 says: Implemented Operation2');
    }
}

/**
 * Обычно конкретные классы переопределяют только часть операций
 * базового класса.
 */
class ConcreteClass2 extends AbstractClass {
    protected requiredOperations1(): void {
        console.log('ConcreteClass2 says: Implemented Operation1');
    }

    protected requiredOperation2(): void {
        console.log('ConcreteClass2 says: Implemented Operation2');
    }

    protected hook1(): void {
        console.log('ConcreteClass2 says: Overridden Hook1');
    }
}
  `;

export const description = [
  `Шаблонный метод (англ. Template method) — поведенческий шаблон проектирования, определяющий основу алгоритма
   и позволяющий наследникам переопределять некоторые шаги алгоритма, не изменяя его структуру в целом.`,
  `Шаблонные методы можно встретить во многих библиотечных классах TypeScript. Разработчики создают их, чтобы позволить
   клиентам легко и быстро расширять стандартный код при помощи наследования.`,
  `Класс заставляет своих потомков реализовать методы-шаги, но самостоятельно реализует структуру алгоритма.`,
  `Применимость:`,
  ` - Однократное использование инвариантной части алгоритма, с оставлением изменяющейся части на усмотрение наследникам.`,
  ` - Локализация и вычленение общего для нескольких классов кода для избегания дублирования.`,
  ` - Разрешение расширения кода наследниками только в определенных местах.`,
  `Участники:`,
  ` - Abstract class (абстрактный класс) - определяет абстрактные операции, замещаемые в наследниках для реализации шагов
    алгоритма; реализует шаблонный метод, определяющий скелет алгоритма. Шаблонный метод вызывает замещаемые и другие, определенные в Abstract class, операции;`,
  ` - Concrete class (конкретный класс) - реализует замещаемые операции необходимым для данной реализации способом.
    Concrete class предполагает, что инвариантные шаги алгоритма будут выполнены в AbstractClass.`,
];
