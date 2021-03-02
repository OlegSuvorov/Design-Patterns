export const codeString =
`/**
 * Интерфейс Посредника предоставляет метод, используемый
 * компонентами для уведомления посредника о различных событиях.
 * Посредник может реагировать на эти события и передавать
 * исполнение другим компонентам.
 */
interface Mediator {
    notify(sender: object, event: string): void;
}

/**
 * Конкретные Посредники реализуют совместное поведение,
 * координируя отдельные компоненты.
 */
class ConcreteMediator implements Mediator {
    private component1: Component1;

    private component2: Component2;

    constructor(c1: Component1, c2: Component2) {
        this.component1 = c1;
        this.component1.setMediator(this);
        this.component2 = c2;
        this.component2.setMediator(this);
    }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            console.log(
            'Mediator reacts on A and triggers operations:'
            );
            this.component2.doC();
        }

        if (event === 'D') {
            console.log(
            'Mediator reacts on D and triggers operations:'
            );
            this.component1.doB();
            this.component2.doC();
        }
    }
}

/**
 * Базовый Компонент обеспечивает базовую функциональность хранения
 * экземпляра посредника внутри объектов компонентов.
 */
class BaseComponent {
    protected mediator: Mediator;

    constructor(mediator: Mediator = null) {
        this.mediator = mediator;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}

/**
 * Конкретные Компоненты реализуют различную функциональность. Они
 * не зависят от других компонентов. Они также не зависят от
 * каких-либо конкретных классов посредников.
 */
class Component1 extends BaseComponent {
    public doA(): void {
        console.log('Component 1 does A.');
        this.mediator.notify(this, 'A');
    }

    public doB(): void {
        console.log('Component 1 does B.');
        this.mediator.notify(this, 'B');
    }
}

class Component2 extends BaseComponent {
    public doC(): void {
        console.log('Component 2 does C.');
        this.mediator.notify(this, 'C');
    }

    public doD(): void {
        console.log('Component 2 does D.');
        this.mediator.notify(this, 'D');
    }
}
  `;

export const description = [
  `Посредник (англ. Mediator) — поведенческий шаблон проектирования, обеспечивающий взаимодействие множества объектов,
   формируя при этом слабую связанность и избавляя объекты от необходимости явно ссылаться друг на друга.`,
  `Посредник упрощает коммуникацию между компонентами системы и убирает прямые связи между отдельными компонентами,
   заставляя их общаться друг с другом через себя.`,
  `Проблема:`,
  `Обеспечить взаимодействие множества объектов, сформировав при этом слабую связанность и избавив объекты от
   необходимости явно ссылаться друг на друга.`,
  `Решение:`,
  `Создать объект, инкапсулирующий способ взаимодействия множества объектов.`,
  `Преимущества:`,
  `Устраняется связанность между "Коллегами", централизуется управление.`,
  `Описание:`,
  `"Посредник" определяет интерфейс для обмена информацией с объектами "Коллеги", "Конкретный посредник" координирует 
   действия объектов "Коллеги".`,
  `Каждый класс "Коллеги" знает о своем объекте "Посредник", все "Коллеги" обмениваются информацией только с посредником,
   при его отсутствии им пришлось бы обмениваться информацией напрямую.`,
  `"Коллеги" посылают запросы посреднику и получают запросы от него. "Посредник" реализует кооперативное поведение,
   пересылая каждый запрос одному или нескольким "Коллегам".`,
];
