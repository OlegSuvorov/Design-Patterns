export const codeString =
` /**
 * Базовый интерфейс Компонента определяет поведение, которое
 * изменяется декораторами.
 */
interface Component {
    operation(): string;
}

/**
 * Конкретные Компоненты предоставляют реализации поведения по
 * умолчанию. Может быть несколько вариаций этих классов.
 */
class ConcreteComponent implements Component {
    public operation(): string {
        return 'ConcreteComponent';
    }
}

/**
 * Базовый класс Декоратора следует тому же интерфейсу, что и
 * другие компоненты. Основная цель этого класса - определить
 * интерфейс обёртки для всех конкретных декораторов. Реализация
 * кода обёртки по умолчанию может включать в себя поле для
 * хранения завёрнутого компонента и средства его инициализации.
 */
class Decorator implements Component {
    protected component: Component;

    constructor(component: Component) {
        this.component = component;
    }

    /**
     * Декоратор делегирует всю работу обёрнутому компоненту.
     */
    public operation(): string {
        return this.component.operation();
    }
}

/**
 * Конкретные Декораторы вызывают обёрнутый объект и изменяют его
 * результат некоторым образом.
 */
class ConcreteDecoratorA extends Decorator {
    /**
     * Декораторы могут вызывать родительскую реализацию операции,
     * вместо того, чтобы вызвать обёрнутый объект напрямую. Такой
     * подход упрощает расширение классов декораторов.
     */
    public operation(): string {
        return \`DecoratorA($\{super.operation()})\`;
    }
}

/**
 * Декораторы могут выполнять своё поведение до или после вызова
 * обёрнутого объекта.
 */
class ConcreteDecoratorB extends Decorator {
    public operation(): string {
        return \`DecoratorB($\{super.operation()})\`;
    }
}
  `;

export const description = [
  `Декоратор (англ. Decorator) — структурный шаблон проектирования, предназначенный для динамического подключения
   дополнительного поведения к объекту.`,
  `Шаблон Декоратор предоставляет гибкую альтернативу практике создания подклассов с целью расширения функциональности.`,
  `Задача:`,
  `Объект, который предполагается использовать, выполняет основные функции. Однако может потребоваться добавить к нему 
  некоторую дополнительную функциональность, которая будет выполняться до, после или даже вместо основной функциональности объекта.`,
  `Способ решения:`,
  `Декоратор предусматривает расширение функциональности объекта без определения подклассов.`,
  `Участники:`,
  `Класс ConcreteComponent — класс, в который с помощью шаблона Декоратор добавляется новая функциональность.
   В некоторых случаях базовая функциональность предоставляется классами, производными от класса ConcreteComponent.
   В подобных случаях класс ConcreteComponent является уже не конкретным, а абстрактным. Абстрактный класс Component
   определяет интерфейс для использования всех этих классов.`,
  `Следствия:`,
  `- Добавляемая функциональность реализуется в небольших объектах. Преимущество состоит в возможности динамически добавлять 
   эту функциональность до или после основной функциональности объекта ConcreteComponent.`,
  `- Позволяет избегать перегрузки функциональными классами на верхних уровнях иерархии.`,
  `- Декоратор и его компоненты не являются идентичными.`,
  `Реализация:`,
  `Создаётся абстрактный класс, представляющий как исходный класс, так и новые, добавляемые в класс функции. 
  В классах-декораторах новые функции вызываются в требуемой последовательности — до или после вызова последующего объекта.
   При желании остаётся возможность использовать исходный класс (без расширения функциональности), если на его объект 
   сохранилась ссылка.`,
  `Замечания и комментарии:`,
  `- Хотя объект-декоратор может добавлять свою функциональность до или после функциональности основного объекта, цепочка 
   создаваемых объектов всегда должна заканчиваться объектом класса ConcreteComponent.`,
  `- И декоратор, и адаптер являются обёртками вокруг объекта — хранят в себе ссылку на оборачиваемый объект и часто
   передают в него вызовы методов. Отличие декоратора от адаптера в том, что адаптер имеет внешний интерфейс, отличный от
   интерфейса оборачиваемого объекта, и используется именно для стыковки разных интерфейсов. Декоратор же имеет точно
   такой же интерфейс, и используется для добавления функциональности.`,
  `- Для расширения функциональности класса возможно использовать как декораторы, так и стратегии.
   Декораторы оборачивают объект снаружи, стратегии же вставляются в него внутрь по неким интерфейсам.`,
  `- Недостаток стратегии: класс должен быть спроектирован с возможностью вставления стратегий, декоратор же не требует
   такой поддержки.`,
  `- Недостаток декоратора: он оборачивает ровно тот же интерфейс, что предназначен для внешнего мира, что вызывает смешение
   публичного интерфейса и интерфейса кастомизации, которое не всегда желательно.`,
];
