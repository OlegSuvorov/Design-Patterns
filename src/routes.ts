import Singleton from './patterns/Singleton';
import AbstractFactory from './patterns/AbstractFactory';
import Adapter from './patterns/Adapter';
import Builder from './patterns/Builder';
import Bridge from './patterns/Bridge';
import ChainOfResponsibility from './patterns/ChainOfResponsibility';

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
    name: 'ChainOfResponsibility',
    path: '/chainOfResponsibility',
    component: ChainOfResponsibility,
  },
];