import '@babel/polyfill';
import * as cacheservice from '../services/cache_service';

export default class About {
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "about-wrapper";
    this.el.style.opacity = 0;
    this.showAbout(this.el);
  }

  async showAbout(element){
    let aboutCache = await cacheservice.returnCache('about');
    if(aboutCache) {
      element.innerHTML = aboutCache;
    }
    
  }
}