export const codeString =
` /**
 * Интерфейс Обработчика объявляет метод построения цепочки 
 * обработчиков. Он также объявляет метод для выполнения запроса.
 */
interface Handler {
    setNext(handler: Handler): Handler;

    handle(request: string): string;
}

/**
 * Поведение цепочки по умолчанию может быть реализовано внутри 
 * базового класса обработчика.
 */
abstract class AbstractHandler implements Handler
{
    private nextHandler: Handler;

    public setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        // Возврат обработчика отсюда позволит связать обработчики 
        // простым способом, вот так:
        // monkey.setNext(squirrel).setNext(dog);
        return handler;
    }

    public handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }

        return null;
    }
}

/**
 * Все Конкретные Обработчики либо обрабатывают запрос, либо 
 * передают его следующему обработчику в цепочке.
 */
class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Banana') {
            return \`Monkey: I'll eat the $\{request}.\`;
        }
        return super.handle(request);

    }
}

class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'Nut') {
            return \`Squirrel: I'll eat the $\{request}.\`;
        }
        return super.handle(request);
    }
}

class DogHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === 'MeatBall') {
            return \`Dog: I'll eat the $\{request}.\`;
        }
        return super.handle(request);
    }
}
  `;

export const description = [
  `Цепочка обязанностей (англ. Chain of responsibility) — поведенческий шаблон проектирования, предназначенный 
  для организации в системе уровней ответственности.`,
  `Избавляет от жёсткой привязки отправителя запроса к его получателю, позволяя выстраивать цепь из различных
   обработчиков динамически.`,
  `Цепочку обязанностей можно определить по спискам обработчиков или проверок, через которые пропускаются запросы. 
  Особенно если порядок следования обработчиков важен.`,
  `Шаблон рекомендован для использования в условиях:`,
  ` - в разрабатываемой системе имеется группа объектов, которые могут обрабатывать сообщения определенного типа;`,
  ` - все сообщения должны быть обработаны хотя бы одним объектом системы;`,
  ` - сообщения в системе обрабатываются по схеме «обработай сам либо перешли другому», то есть одни сообщения 
  обрабатываются на том уровне, где они получены, а другие пересылаются объектам иного уровня;`,
];
