import * as cacheservice from '../services/cache_service';
import SinglePage from './singlepage';

export default class Preview {

  constructor(data, html, classname) {
    this.title = data.name;
    this.owner = (data.owner) ? data.owner.login : '';
    this.ownerAvatar = (data.owner) ? data.owner.avatar_url : "";
    this.caption = data.description;
    this.stars = data.stargazers_count || "";
    this.language = data.language || "";
    this.data = data;
    this.el = document.createElement("div");
    this.el.className =  classname; 
    this.el.innerHTML = this.render();  
    this.el.addEventListener("click", (e) => { this.onClick(e); });
    this.el.data = data;
    this.el.data.objType = (data.type == 'file') ? 'article' : 'project';
    
  }

  async onClick(evt) {
    if(window.location.hash.substring(window.location.hash.length - 3, window.location.hash.length) == '.md')return;
    let objType = evt.currentTarget.data.objType;
    let id = evt.currentTarget.data.name;
    let data = evt.currentTarget.data;
    let mainwrapper = document.getElementsByClassName('main-wrapper')[0];
    mainwrapper.innerHTML = '';
    history.pushState('single-'+objType, '', '#'+objType+'id=' + id);
    try {
      let single = await cacheservice.returnCache('single-'+objType+'='+ id);
      mainwrapper.appendChild(new SinglePage(data, single, 'single-page').el)
    } catch(error) {
      mainwrapper.appendChild(new SinglePage(data, '', 'single-page').el)
    } 
    window.scrollTo(0,0);
  }

  render() {
    return `
          <div class="preview-title" id="article-title">${this.title}</div>     
          <div class="preview-body">${this.caption}</div> 
          <div class="preview-stats">
              <div class="stars-wrapper"><img class="stars" />${this.stars}</div>
              <div class="language-wrapper"><img class="language" />${this.language}</div>
          </div>     
    `;
   }
}