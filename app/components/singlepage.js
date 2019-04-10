import '@babel/polyfill';
import lscache from '../services/lscache';

export default class SinglePage {
  
  constructor(data, html, classname) {
    this.el = document.createElement("div");
    this.el.className = 'single-wrapper '+classname;
    this.el.innerHTML = html;
    if(this.el.firstElementChild.id == 'file') {
      if(data) {
      this.el.insertBefore(this.getTitle(data, html), this.el.firstChild);
      }
    }
    else if(this.el.firstElementChild.id == 'readme')  {
      this.el.insertBefore(this.addProjectDetails(data), this.el.firstChild)
    }
    
    this.el.data = data;
    this.objType = (data.type == 'file') ? 'article' : 'project';
    this.el.addEventListener("click", (e) => { this.onClick(e); });
    lscache.set('single-'+this.objType+'=' + data.name, this.el.innerHTML, 10);
  }

  onClick(evt) {
    if(window.location.hash.substring(1, 5) != 'menu')return;
    let x = window.location.pathname;
    let objType = evt.currentTarget.data.type == 'file' ? 'article': 'project';
    let id = evt.currentTarget.data.name;
    
    history.pushState('single-'+objType, '', '#'+objType+'id=' + id);

    if(this.el.classList.contains('preview-swiper')){
      this.el.classList.remove('preview-swiper');
    }
    if(this.el.classList.contains('swiper-slide')){
      this.el.classList.remove('swiper-slide');
    }
    if(this.el.classList.contains('swiper-slide-active')){
      this.el.classList.remove('swiper-slide-active');
    }
    if(this.el.classList.contains('preview')){
      this.el.classList.remove('preview');
    }


    this.el.classList.add('single-page');
    let mainwrapper = document.getElementsByClassName('main-wrapper')[0];
    mainwrapper.innerHTML = '';
    mainwrapper.appendChild(this.el);
    document.getElementById('site-wrapper').scrollTop = 0
    //lscache.set('single-'+objType+'=' + results.name, results, 10);

  }

  getTitle(data,html) {
    let title_array = data.name.split(" ");
    let title_array_html = ``;
    for(let e in title_array) {
      if(e == title_array.length - 1   ) {
        title_array[e] = title_array[e].substring(0,title_array[e].length - 3);
      }
      title_array_html += `<span class='article-preview-title-word'>${title_array[e]}</span>`
    }
    let title = document.createElement("div");
    title.className = 'article-preview-title';
    

    title.innerHTML = title_array_html;
    return title;
  }

  addProjectDetails(data) {

    let project_box_html = `
    <div class='project-box'><p class='project-box-key'>Name:</p><a href='${(data || {}).html_url}'>${(data || {}).name}</a></div>
    <div class='project-box'><p class='project-box-key'>License:</p><p>${((data || {}).license || {}).name}</p></div>
    <div class='project-box'><p class='project-box-key'>Language:</p><p>${(data || {}).language}</p></div>
    `;

    let projectBoxWrapper = document.createElement("div");
    projectBoxWrapper.className = 'project-box-wrapper';
    

    projectBoxWrapper.innerHTML = project_box_html;
    return projectBoxWrapper;
  }
}

