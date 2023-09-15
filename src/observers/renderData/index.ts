import { IRenderDataObserver, subscriber } from '@appTypes/index';

export class Observer implements IRenderDataObserver {
  private static instance: Observer | null = null;
  private subscribers: subscriber[] = [];

  static getInstance(): Observer {
    if (!Observer.instance) {
      Observer.instance = new Observer();
    }
    return Observer.instance;
  }

  public subscribe(sub: subscriber) {
    this.subscribers.push(sub);
  }

  public unsubscribe(sub: subscriber) {
    this.subscribers.filter((subscriber) => subscriber !== sub);
  }

  public notify() {
    this.subscribers.forEach((sub) => sub());
  }
}

export const renderDataObserver = Observer.getInstance();
