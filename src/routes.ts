import Singleton from './patterns/Singleton';
import AbstractFactory from './patterns/AbstractFactory';
import Adapter from './patterns/Adapter';
import Builder from './patterns/Builder';
import Bridge from './patterns/Bridge';
import ChainOfResponsibility from './patterns/ChainOfResponsibility';
import FactoryMethod from './patterns/FactoryMethod';
import Prototype from './patterns/Prototype';

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
];

export const behavioralPatterns = [
  {
    name: 'Chain Of Responsibility',
    path: '/chainOfResponsibility',
    component: ChainOfResponsibility,
  },
];