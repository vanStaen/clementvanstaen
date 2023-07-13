import { makeObservable, observable, action } from "mobx";

export class CubeSliderStore {

  pageShown = 0;

  constructor() {
    makeObservable(this, {
      pageShown: observable,
      setPageShown: action,
    });
  }

  setPageShown = (pageShown) => {
    this.pageShown = pageShown;
  };

}

export const cubeSliderStore = new CubeSliderStore();
