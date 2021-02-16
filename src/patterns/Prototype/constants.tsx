export const codeString =
` /**
 * Пример класса, имеющего возможность клонирования. Мы посмотрим
 * как происходит клонирование значений полей разных типов.
 */
class Prototype {
    public primitive: any;
    public component: object;
    public circularReference: ComponentWithBackReference;

    public clone(): this {
        const clone = Object.create(this);

        clone.component = Object.create(this.component);

        // Клонирование объекта, который имеет вложенный объект с
        // обратной ссылкой, требует специального подхода. После
        // завершения клонирования вложенный объект должен
        // указывать на клонированный объект, а не на исходный
        // объект. Для данного случая хорошо подойдёт оператор
        // расширения (spread).
        clone.circularReference = {
            ...this.circularReference,
            prototype: { ...this },
        };

        return clone;
    }
}

class ComponentWithBackReference {
    public prototype;

    constructor(prototype: Prototype) {
        this.prototype = prototype;
    }
}
  `;

export const description = [
  `Прототип, (англ. Prototype) — порождающий шаблон проектирования.`,
  `Задаёт виды создаваемых объектов с помощью экземпляра-прототипа и создаёт новые объекты путём копирования этого
   прототипа. Он позволяет уйти от реализации и позволяет следовать принципу «программирование через интерфейсы».`,
  `В качестве возвращающего типа указывается интерфейс/абстрактный класс на вершине иерархии, а классы-наследники 
  могут подставить туда наследника, реализующего этот тип.`,
  `Проще говоря, это паттерн создания объекта через клонирование другого объекта вместо создания через конструктор.`,
  `Все классы—Прототипы имеют общий интерфейс. Поэтому вы можете копировать объекты, не обращая внимания на их 
  конкретные типы и всегда быть уверены, что получите точную копию.`,
  `Клонирование совершается самим объектом-прототипом, что позволяет ему скопировать значения всех полей, даже приватных.`,
  `Паттерн используется чтобы:`,
  ` - избежать дополнительных усилий по созданию объекта стандартным путём (имеется в виду использование конструктора, 
      так как в этом случае также будут вызваны конструкторы всей иерархии предков объекта), когда это непозволительно дорого для приложения;`,
  ` - избежать наследования создателя объекта (object creator) в клиентском приложении, как это делает паттерн abstract factory;`,
  `Используйте этот шаблон проектирования, когда системe безразлично как именно в ней создаются, компонуются и
   представляются продукты:`,
  ` - инстанцируемые классы определяются во время выполнения, например с помощью динамической загрузки;`,
  ` - избежать построения иерархий классов или фабрик, параллельных иерархии классов продуктов;`,
  ` - экземпляры класса могут находиться в одном из нескольких различных состояний. Может оказаться удобнее установить 
  соответствующее число прототипов и клонировать их, а не инстанцировать каждый раз класс вручную в подходящем состоянии;`,
];
