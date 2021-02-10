import Singleton from './patterns/Singleton';
import AbstractFactory from './patterns/AbstractFactory';
import Adapter from './patterns/Adapter';
import Builder from './patterns/Builder';
import Bridge from './patterns/Bridge';

export const routes = [
  {
    name: 'Adapter',
    path: '/adapter',
    component: Adapter,
  },
  {
    name: 'Singleton',
    path: '/singleton',
    component: Singleton
  },
  {
    name: 'Abstract Factory',
    path: '/abstract-factory',
    component: AbstractFactory,
  },
  {
    name: 'Builder',
    path: '/builder',
    component: Builder,
  },
  {
    name: 'Bridge',
    path: '/bridge',
    component: Bridge,
  }
];
