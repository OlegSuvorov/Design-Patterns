
export const codeString =
`/**
 * Паттерн Итератор
 *
 * Назначение: Даёт возможность последовательно обходить элементы
 * составных объектов, не раскрывая их внутреннего представления.
 */

interface Iterator<T> {
    // Возврат текущего элемента.
    current(): T;

    // Возврат текущего элемента и переход к следующему элементу.
    next(): T;

    // Возврат ключа текущего элемента.
    key(): number;

    // Проверяет корректность текущей позиции.
    valid(): boolean;

    // Перемотка Итератора к первому элементу.
    rewind(): void;
}

interface Aggregator {
    // Получить внешний итератор.
    getIterator(): Iterator<string>;
}

/**
 * Конкретные Итераторы реализуют различные алгоритмы обхода. Эти
 * классы постоянно хранят текущее положение обхода.
 */

class AlphabeticalOrderIterator implements Iterator<string> {
    private collection: WordsCollection;

    /**
     * Хранит текущее положение обхода. У итератора может быть
     * множество других полей для хранения состояния итерации,
     * особенно когда он должен работать с определённым типом
     * коллекции.
     */
    private position: number = 0;

    /**
     * Эта переменная указывает направление обхода.
     */
    private reverse: boolean = false;

    constructor(
      collection: WordsCollection, reverse: boolean = false,
    ) {
        this.collection = collection;
        this.reverse = reverse;

        if (reverse) {
            this.position = collection.getCount() - 1;
        }
    }

    public rewind() {
        this.position = this.reverse ?
            this.collection.getCount() - 1 :
            0;
    }

    public current(): string {
        return this.collection.getItems()[this.position];
    }

    public key(): number {
        return this.position;
    }

    public next(): string {
        const item = this.collection.getItems()[this.position];
        this.position += this.reverse ? -1 : 1;
        return item;
    }

    public valid(): boolean {
        if (this.reverse) {
            return this.position >= 0;
        }

        return this.position < this.collection.getCount();
    }
}

/**
 * Конкретные Коллекции предоставляют один или несколько методов
 * для получения новых экземпляров итератора, совместимых с
 * классом коллекции.
 */
class WordsCollection implements Aggregator {
    private items: string[] = [];

    public getItems(): string[] {
        return this.items;
    }

    public getCount(): number {
        return this.items.length;
    }

    public addItem(item: string): void {
        this.items.push(item);
    }

    public getIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this);
    }

    public getReverseIterator(): Iterator<string> {
        return new AlphabeticalOrderIterator(this, true);
    }
}
  `;

export const description = [
  `Итератор (англ. Iterator) — поведенческий шаблон проектирования, представляющий собой объект, позволяющий получить
   последовательный доступ к элементам объекта-агрегата без использования описаний каждого из агрегированных объектов.`,
  `Например, такие элементы как дерево, связанный список, хеш-таблица и массив могут быть пролистаны (и модифицированы)
   с помощью объекта Итератор.`,
  `Перебор элементов выполняется объектом итератора, а не самой коллекцией. Это упрощает интерфейс и реализацию коллекции,
   а также способствует более логичному разделению обязанностей.`,
  `Особенностью полноценно реализованного итератора является то, что код, использующий итератор, может ничего не 
   знать о типе итерируемого агрегата.`,
  `Итераторы позволяют абстрагироваться от типа и признака окончания агрегата, используя полиморфный Next 
  (часто реализованный как operator++ в С++) и полиморфный aggregate.end(), возвращающий значение «конец агрегата».`,
  `Таким образом, появляется возможность работы с диапазонами итераторов, при отсутствии знания о типе итерируемого агрегата.`,
  `Благодаря Итератору, клиент может обходить разные коллекции одним и тем же способом, используя единый интерфейс итераторов.`,
];
