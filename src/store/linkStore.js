import { makeObservable, observable } from "mobx";

export class LinkStore {

  links = []

  constructor() {
    makeObservable(this, {
      links: observable,
    });
  }

}

export const linkStore = new LinkStore();
