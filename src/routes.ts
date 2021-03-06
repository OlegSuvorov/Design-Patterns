import Singleton from './patterns/Singleton';
import AbstractFactory from './patterns/AbstractFactory';
import Adapter from './patterns/Adapter';
import Builder from './patterns/Builder';
import Bridge from './patterns/Bridge';
import ChainOfResponsibility from './patterns/ChainOfResponsibility';
import FactoryMethod from './patterns/FactoryMethod';
import Prototype from './patterns/Prototype';
import Composite from './patterns/Composite';
import Decorator from './patterns/Decorator';
import Facade from './patterns/Facade';
import Flyweight from './patterns/Flyweight';
import Proxy from './patterns/Proxy';
import Command from './patterns/Command';
import Iterator from './patterns/Iterator';
import Mediator from './patterns/Mediator';
import Memento from './patterns/Memento';
import Observer from './patterns/Observer';
import State from './patterns/State';
import Strategy from './patterns/Strategy';
import TemplateMethod from './patterns/TemplateMethod';
import Visitor from './patterns/Visitor';

export const creationalPatterns = [
  {
    name: 'Abstract Factory',
    path: '/abstractFactory',
    component: AbstractFactory,
  },
  {
    name: 'Builder',
    path: '/builder',
    component: Builder,
  },
  {
    name: 'Factory Method',
    path: '/factoryMethod',
    component: FactoryMethod,
  },
  {
    name: 'Prototype',
    path: '/prototype',
    component: Prototype,
  },
  {
    name: 'Singleton',
    path: '/singleton',
    component: Singleton
  },
];

export const structuralPatterns = [
  {
    name: 'Adapter',
    path: '/adapter',
    component: Adapter,
  },
  {
    name: 'Bridge',
    path: '/bridge',
    component: Bridge,
  },
  {
    name: 'Composite',
    path: '/composite',
    component: Composite,
  },
  {
    name: 'Decorator',
    path: '/decorator',
    component: Decorator,
  },
  {
    name: 'Facade',
    path: '/facade',
    component: Facade,
  },
  {
    name: 'Flyweight',
    path: '/flyweight',
    component: Flyweight,
  },
  {
    name: 'Proxy',
    path: '/proxy',
    component: Proxy,
  },
];

export const behavioralPatterns = [
  {
    name: 'Chain Of Responsibility',
    path: '/chainOfResponsibility',
    component: ChainOfResponsibility,
  },
  {
    name: 'Command',
    path: '/command',
    component: Command,
  },
  {
    name: 'Iterator',
    path: '/iterator',
    component: Iterator,
  },
  {
    name: 'Mediator',
    path: '/mediator',
    component: Mediator,
  },
  {
    name: 'Memento',
    path: '/memento',
    component: Memento,
  },
  {
    name: 'Observer',
    path: '/observer',
    component: Observer,
  },
  {
    name: 'State',
    path: '/state',
    component: State,
  },
  {
    name: 'Strategy',
    path: '/strategy',
    component: Strategy,
  },
  {
    name: 'Template Method',
    path: '/templateMethod',
    component: TemplateMethod,
  },
  {
    name: 'Visitor',
    path: '/visitor',
    component: Visitor,
  },
];
