export const codeString =
`/**
 * Абстракция устанавливает интерфейс для «управляющей» части двух
 * иерархий классов. Она содержит ссылку на объект из иерархии 
 * Реализации и делегирует ему всю настоящую работу.
 */
class Abstraction {
    protected implementation: Implementation;

    constructor(implementation: Implementation) {
        this.implementation = implementation;
    }

    public operation(): string {
        const result = 
        this.implementation.operationImplementation();
        return \`Abstraction: Base operation with:\\n$\{result}\`;
    }
}

/**
 * Можно расширить Абстракцию без изменения классов Реализации.
 */
class ExtendedAbstraction extends Abstraction {
    public operation(): string {
        const result = 
        this.implementation.operationImplementation();
        return 
        \`ExtendedAbstraction: Extended operation with:\\n$\{result}\`;
    }
}

/**
 * Реализация устанавливает интерфейс для всех классов реализации.
 * Он не должен соответствовать интерфейсу Абстракции. На практике
 * оба интерфейса могут быть совершенно разными. 
 * Как правило, интерфейс Реализации предоставляет примитивные
 * операции, в то время как Абстракция определяет операции более
 * высокого уровня, основанные на этих примитивах.
 */
interface Implementation {
    operationImplementation(): string;
}

/**
 * Каждая Конкретная Реализация соответствует определённой 
 * платформе и реализует интерфейс Реализации с использованием 
 * API этой платформы.
 */
class ConcreteImplementationA implements Implementation {
    public operationImplementation(): string {
        return 
        'ImplementationA: Here\\'s the result on the platform A.';
    }
}

class ConcreteImplementationB implements Implementation {
    public operationImplementation(): string {
        return 
        'ImplementationB: Here\\'s the result on the platform B.';
    }
}
  `;

export const description = [
  `Шаблон мост (англ. Bridge) — структурный шаблон проектирования, используемый в проектировании программного
   обеспечения чтобы «разделять абстракцию и реализацию так, чтобы они могли изменяться независимо». 
   Шаблон мост использует инкапсуляцию, агрегирование и может использовать наследование для того, 
   чтобы разделить ответственность между классами.`,
  `Когда абстракция и реализация разделены, они могут изменяться независимо. Другими словами, при реализации через
   шаблон мост, изменение структуры интерфейса не мешает изменению структуры реализации.`,
  `Рассмотрим такую абстракцию как фигура. Существует множество типов фигур, каждая со своими свойствами и методами. 
  Однако есть что-то, что объединяет все фигуры. Например, каждая фигура должна уметь рисовать себя,
   масштабироваться и т. п. В то же время рисование графики может отличаться в зависимости от типа ОС, 
   или графической библиотеки.`,
  `Фигуры должны иметь возможность рисовать себя в различных графических средах, но реализовывать в каждой фигуре все 
  способы рисования или модифицировать фигуру каждый раз при изменении способа рисования непрактично.`,
  ` В этом случае помогает шаблон мост, позволяя создавать новые классы, которые будут реализовывать рисование в 
  различных графических средах. При использовании такого подхода очень легко можно добавлять как новые фигуры, так и
   способы их рисования.`,
  `Паттерн Мост особенно полезен когда вам приходится делать кросс-платформенные приложения, поддерживать несколько 
  типов баз данных или работать с разными поставщиками похожего API (например, cloud-сервисы, социальные сети и т. д.)`,
  `Если в программе чётко выделены классы «управления» и несколько видов классов «платформ», причём управляющие объекты
   делегируют выполнение платформам, то можно сказать, что у вас используется Мост.ейсы, но не реализацию;`,
];
