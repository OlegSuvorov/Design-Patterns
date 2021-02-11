export const codeString =
` /**
 * Интерфейс Строителя объявляет создающие методы для различных
 * частей объектовПродуктов.
 */
interface Builder {
    producePartA(): void;
    producePartB(): void;
    producePartC(): void;
}

/**
 * Классы Конкретного Строителя следуют интерфейсу Строителя 
 * и предоставляют конкретные реализации шагов построения. 
 * Ваша программа может иметь несколько вариантов Строителей, 
 * реализованных по-разному.
 */
class ConcreteBuilder1 implements Builder {
    private product: Product1;

    /**
     * Новый экземпляр строителя должен содержать пустой объект
     * продукта, который используется в дальнейшей сборке.
     */
    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product1();
    }

    /**
     * Все этапы производства работают с одним и тем же
     * экземпляром продукта.
     */
    public producePartA(): void {
        this.product.parts.push('PartA1');
    }

    public producePartB(): void {
        this.product.parts.push('PartB1');
    }

    public producePartC(): void {
        this.product.parts.push('PartC1');
    }

    /**
     * Конкретные Строители должны предоставить свои собственные
     * методы получения результатов. Это связано с тем, что
     * различные типы строителей могут создавать совершенно разные 
     * продукты с разными интерфейсами.
     * Поэтому такие методы не могут быть объявлены в базовом 
     * интерфейсе Строителя (по крайней мере, в статически 
     * типизированном языке программирования).
     *
     * Как правило, после возвращения конечного результата клиенту,
     * экземпляр строителя должен быть готов к началу производства
     * следующего продукта.
     * Поэтому обычной практикой является вызов метода сброса
     * в конце тела метода getProduct. Однако такое поведение
     * не является  обязательным, вы можете заставить своих 
     * строителей ждать явного запроса на сброс из кода клиента,
     *  прежде чем избавиться от предыдущего результата.
     */
    public getProduct(): Product1 {
        const result = this.product;
        this.reset();
        return result;
    }
}

/**
 * Имеет смысл использовать паттерн Строитель только тогда, когда
 * ваши продукты достаточно сложны и требуют обширной конфигурации.
 *
 * В отличие от других порождающих паттернов, различные конкретные
 * строители могут производить несвязанные продукты. 
 * Другими словами, результаты различных строителей могут
 * не всегда следовать одному и тому же интерфейсу.
 */
class Product1 {
    public parts: string[] = [];

    public listParts(): void {
        console.log(\`Product parts: $\{this.parts.join(', ')}\\n\`);
    }
}

/**
 * Директор отвечает только за выполнение шагов построения
 * в определённой последовательности. Это полезно при производстве 
 * продуктов в определённом порядке или особой конфигурации.
 * Строго говоря, класс Директор необязателен,так как клиент может
 * напрямую управлять строителями.
 */
class Director {
    private builder: Builder;

    /**
     * Директор работает с любым экземпляром строителя, который 
     * передаётся ему клиентским кодом. Таким образом, клиентский
     * код может изменить конечный тип вновь собираемого продукта.
     */
    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    /**
     * Директор может строить несколько вариаций продукта, 
     * используя одинаковые шаги построения.
     */
    public buildMinimalViableProduct(): void {
        this.builder.producePartA();
    }

    public buildFullFeaturedProduct(): void {
        this.builder.producePartA();
        this.builder.producePartB();
        this.builder.producePartC();
    }
}
  `;

export const description = [
  `Строитель (англ. Builder) — порождающий шаблон проектирования предоставляет способ создания составного объекта пошагово.
   В отличие от других порождающих паттернов, Строитель позволяет производить различные продукты, используя один и тот
   же процесс строительства.`,
  `Цель:`,
  `Отделяет конструирование сложного объекта от его представления так, что в результате одного и того же процесса 
  конструирования могут получаться разные представления.`,
  `Плюсы:`,
  ` - позволяет изменять внутреннее представление продукта;`,
  ` - изолирует код, реализующий конструирование и представление;`,
  ` - дает более тонкий контроль над процессом конструирования.`,
  `Применение:`,
  ` - алгоритм создания сложного объекта не должен зависеть от того, из каких частей состоит объект и как они стыкуются между собой;`,
  ` - процесс конструирования должен обеспечивать различные представления конструируемого объекта.`,
];