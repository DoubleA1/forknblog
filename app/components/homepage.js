import '@babel/polyfill';
import Swiper from 'swiper';
import '../assets/css/vendor/swiper.css';
import Preview from './preview';
import * as cacheservice from '../services/cache_service';
import SinglePage from './singlepage';

export default class HomePage {
  constructor() {
    this.el = document.createElement("div");
    this.el.className = "home-wrapper";
    this.el.style.opacity = 0;
    this.el.innerHTML = this.render(); 
    this.showArticleSwiper(this.el);
    this.showProjectSwiper(this.el);
    this.showUserBar(this.el);
    this.showIntro(this.el);
  }


  async showArticleSwiper(element){
    let articleswiper = element.getElementsByClassName('swiper-wrapper-articles')[0];
    let articleCache = await cacheservice.returnCache('article');
    for (let i = 0;i < 3; i++) {
            let singlearticle = await cacheservice.returnCache('single-article='+ articleCache[i].name)
            articleswiper.appendChild(new SinglePage(articleCache[i],singlearticle, 'swiper-slide preview-swiper').el);
    } 
    new Swiper('.articles-container', {
      slidesPerView: 1.3,
      spaceBetween: 20,
      freeMode: true,
            pagination: {
                el: '.swiper-pagination-articles',
            },
    });    
  }

  
  async showProjectSwiper(element){
    let projectswiper = element.getElementsByClassName('swiper-wrapper-projects')[0];
    let projectCache = await cacheservice.returnCache('project', {per_page: 3});
    for (let pc of projectCache) {
            projectswiper.appendChild(new Preview(pc,'', 'swiper-slide preview-swiper').el);
    } 
    new Swiper('.projects-container', {
      slidesPerView: 1.3,
      spaceBetween: 20,
      freeMode: true,
            pagination: {
                el: '.swiper-pagination-projects',
            },
    });    
  }

  async showUserBar(element){
    let projectCache = await cacheservice.returnCache('project', {per_page: 3});
    if(projectCache) {
      let userbar = document.createElement("div");
      userbar.className = "userbar-wrapper";
      userbar.innerHTML = `<img src="${projectCache[0].owner.avatar_url}" class='userbar-image' />
              <div class="userbar-username">${projectCache[0].owner.login}</div>`
      let homeheader = element.getElementsByClassName('home-header')[0];
      homeheader.appendChild(userbar);
    }
    
  }

  async showIntro(element){
    let introCache = await cacheservice.returnCache('intro');
    if(introCache) {
      let homeintro = element.getElementsByClassName('home-intro')[0];
      homeintro.innerHTML = introCache;
    }
    
  }


  

  render() {
    return `
    <div class="home-header"></div>
    <div class="home-intro"></div>
    <div class="section-header">
        <h4 class="section-header-word">Articles</h4>
    </div>
    <div class="swiper-container articles-container">
        <div class="swiper-wrapper swiper-wrapper-articles"></div>
        <div class="swiper-pagination swiper-pagination-articles"></div>
    </div>
    
    <div class="section-header">
        <h4 class="section-header-word">OpenSource Projects</h4>
    </div>
    <div class="swiper-container projects-container">
        <div class="swiper-wrapper swiper-wrapper-projects"></div>
        <div class="swiper-pagination swiper-pagination-projects"></div>
    </div>
    <div style="margin-bottom:2em;">&nbsp;</div>
  `;}
}