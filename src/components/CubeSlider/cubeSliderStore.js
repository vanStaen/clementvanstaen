import { makeObservable, observable, action } from "mobx";

export class CubeSliderStore {

  pagesLength = null;
  pageShown = null;
  pagePrev = 0;
  pageNext = 2;

  constructor() {
    makeObservable(this, {
      pageShown: observable,
      setPageShown: action,
      pagesLength: observable,
      setPagesLength: action,
      pagePrev: observable,
      setPagePrev: action,
      pageNext: observable,
      setPageNext: action,
      showRight: action,
      showLeft: action,
    });
  }

  setPageShown = (pageShown) => {
    if (pageShown + 1 > this.pagesLength - 1 ) {
      console.log("end right")
      this.setPageNext(0)
      this.setPagePrev(pageShown - 1)
    } else if (pageShown - 1 < 0 ) {
      console.log("end left", this.pagesLength - 1)
      this.setPageNext(pageShown + 1)
      this.setPagePrev(this.pagesLength - 1)
    } else {
      console.log("middle")
      this.setPageNext(pageShown + 1)
      this.setPagePrev(pageShown - 1)      
    }    
    this.pageShown = pageShown;
  };

  setPagesLength = (pagesLength) => {
    this.pagesLength = pagesLength;
  };

  setPagePrev = (pagePrev) => {
    this.pagePrev = pagePrev;
  };

  setPageNext = (pageNext) => {
    this.pageNext = pageNext;
  };

  showRight = () => {
    const cube = document.querySelector(".cube");
    cube.style.transition = "transform 1s";
    cube.classList.add("show-right");
    setTimeout(() => {
      if (this.pageShown + 1 > this.pagesLength - 1) {
        this.setPageShown(0);
      } else {
        this.setPageShown(this.pageShown + 1);
      }
      cube.style.transition = "transform 0s";
      cube.classList.remove("show-right");
    }, 1000);
  }

  showLeft = () => {      
    const cube = document.querySelector(".cube");
    cube.style.transition = "transform 1s";
    cube.classList.add("show-left");
    setTimeout(() => {
      if (this.pageShown - 1 < 0) {
        this.setPageShown(this.pagesLength - 1);
      } else {
        this.setPageShown(this.pageShown - 1);
      }
      cube.style.transition = "transform 0s";
      cube.classList.remove("show-left");
    }, 1000);
  }
}

export const cubeSliderStore = new CubeSliderStore();
