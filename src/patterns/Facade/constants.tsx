export const codeString =
` /**
 * Класс Фасада предоставляет простой интерфейс для сложной логики
 * одной или нескольких подсистем. Фасад делегирует запросы
 * соответствующим объектам внутри подсистемы. Фасад также отвечает
 * за управление их жизненным циклом. Все это защищает клиента от
 * нежелательной сложности подсистемы.
 */
class Facade {
    protected subsystem1: Subsystem1;

    protected subsystem2: Subsystem2;

    /**
     * В зависимости от потребностей вашего приложения вы можете
     * предоставить Фасаду существующие объекты подсистемы или
     * заставить Фасад создать их самостоятельно.
     */
    constructor(
      subsystem1: Subsystem1 = null,
      subsystem2: Subsystem2 = null
    ) {
        this.subsystem1 = subsystem1 || new Subsystem1();
        this.subsystem2 = subsystem2 || new Subsystem2();
    }

    /**
     * Методы Фасада удобны для быстрого доступа к сложной
     * функциональности подсистем. Однако клиенты получают
     * только часть возможностей подсистемы.
     */
    public operation(): string {
        let result = 'Facade initializes subsystems:\\n';
        result += this.subsystem1.operation1();
        result += this.subsystem2.operation1();
        result += 'Facade orders to perform the action:\\n';
        result += this.subsystem1.operationN();
        result += this.subsystem2.operationZ();

        return result;
    }
}

/**
 * Подсистема может принимать запросы либо от фасада, либо от
 * клиента напрямую. В любом случае, для Подсистемы Фасад –
 * это еще один клиент, и он не является частью Подсистемы.
 */
class Subsystem1 {
    public operation1(): string {
        return 'Subsystem1: Ready!\\n';
    }

    // ...

    public operationN(): string {
        return 'Subsystem1: Go!\\n';
    }
}

/**
 * Некоторые фасады могут работать с разными подсистемами
 * одновременно.
 */
class Subsystem2 {
    public operation1(): string {
        return 'Subsystem2: Get ready!\\n';
    }

    public operationZ(): string {
        return 'Subsystem2: Fire!';
    }
}
  `;

export const description = [
  `Шаблон фасад (англ. Facade) — структурный шаблон проектирования, позволяющий скрыть сложность системы путём 
   сведения всех возможных внешних вызовов к одному объекту, делегирующему их соответствующим объектам системы.`,
  `Проблема:`,
  `Как обеспечить унифицированный интерфейс с набором разрозненных реализаций или интерфейсов, например, с 
   подсистемой, если нежелательно сильное связывание с этой подсистемой или реализация подсистемы может измениться?`,
  `Решение:`,
  `Определить одну точку взаимодействия с подсистемой — фасадный объект, обеспечивающий общий интерфейс с подсистемой,
   и возложить на него обязанность по взаимодействию с её компонентами.`,
  `Фасад — это внешний объект, обеспечивающий единственную точку входа для служб подсистемы. Реализация других 
   компонентов подсистемы закрыта и не видна внешним компонентам. Фасадный объект обеспечивает реализацию GRASP паттерна
   Устойчивый к изменениям (Protected Variations) с точки зрения защиты от изменений в реализации подсистемы.`,
  `Особенности применения:`,
  `Шаблон применяется для установки некоторого рода политики по отношению к другой группе объектов. Если политика должна
   быть яркой и заметной, следует воспользоваться услугами шаблона Фасад. Если же необходимо обеспечить скрытность и 
   аккуратность (прозрачность), более подходящим выбором является шаблон Заместитель (Proxy).`,
  `Это структурный паттерн, который предоставляет простой (но урезанный) интерфейс к сложной системе объектов, библиотеке
   или фреймворку.`,
  `Кроме того, что Фасад позволяет снизить общую сложность программы, он также помогает вынести код, зависимый от 
   внешней системы в единственное место.`,
];