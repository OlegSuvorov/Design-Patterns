export const codeString =
` /**
 * Легковес хранит общую часть состояния (также называемую
 * внутренним состоянием), которая принадлежит нескольким
 * реальным бизнес-объектам. Легковес принимает оставшуюся
 * часть состояния (внешнее состояние, уникальное для каждого
 * объекта) через его параметры метода.
 */
class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState): void {
        const s = JSON.stringify(this.sharedState);
        const u = JSON.stringify(uniqueState);
        console.log(
        \`Flyweight: Displaying shared ($\{s})
         and unique ($\{u}) state.\`
        );
    }
}

/**
 * Фабрика Легковесов создает объекты-Легковесы и управляет ими.
 * Она обеспечивает правильное разделение легковесов. Когда
 * клиент запрашивает легковес, фабрика либо возвращает
 * существующий экземпляр, либо создает новый, если он ещё не
 * существует.
 */
class FlyweightFactory {
    private flyweights: {[key: string]: Flyweight} = {};

    constructor(initialFlyweights: string[][]) {
        for (const state of initialFlyweights) {
            const key = this.getKey(state);
            this.flyweights[key] = new Flyweight(state);
        }
    }

    /**
     * Возвращает хеш строки Легковеса для данного состояния.
     */
    private getKey(state: string[]): string {
        return state.join('_');
    }

    /**
     * Возвращает существующий Легковес с заданным состоянием
     * или создает новый.
     */
    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log(
                'FlyweightFactory: Can\\'t find a flyweight, 
                creating new one.'
            );
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log(
                'FlyweightFactory: Reusing existing flyweight.'
            );
        }

        return this.flyweights[key];
    }

    public listFlyweights(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(
        \`\\nFlyweightFactory: I have $\{count} flyweights:\`
        );
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}
  `;

export const description = [
  `Приспособленец (англ. flyweight, «легковесный (элемент)») — структурный шаблон проектирования, при котором объект,
   представляющий себя как уникальный экземпляр в разных местах программы, по факту не является таковым.`,
  `Цель:`,
  `Оптимизация работы с памятью путём предотвращения создания экземпляров элементов, имеющих общую сущность.`,
  `Описание:`,
  `Flyweight используется для уменьшения затрат при работе с большим количеством мелких объектов. При проектировании 
   приспособленца необходимо разделить его свойства на внешние и внутренние. `,
  `Внутренние свойства всегда неизменны, тогда как внешние могут отличаться в зависимости от места и контекста
   применения и должны быть вынесены за пределы приспособленца.`,
  `Flyweight дополняет шаблон Factory Method таким образом, что при обращении клиента к Factory Method для создания
   нового объекта ищет уже созданный объект с такими же параметрами, что и у требуемого, и возвращает его клиенту.
   Если такого объекта нет, то фабрика создаст новый.`,
  `Легковес экономит память, благодаря разделению общего состояния, вынесенного в один объект, между множеством объектов,
   кешируя одинаковые данные, используемые в разных объектах.`,
];
