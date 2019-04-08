import Preview from './preview';
import * as cacheservice from '../services/cache_service';
import SinglePage from './singlepage';


export default class MultPage {
  constructor(objType) {
    this.el = document.createElement("div");
    this.objType = objType;
    this.articleChunk = 0;
    this.el.className = "multpage-wrapper";
    this.el.style.opacity = 0;
    this.sortedArticles = null;
    this.showPreview(this.el);
  }

  async showPreview(element){
    let previewCache= await cacheservice.returnCache(this.objType, {per_page: 8});
    if(this.objType == 'article') {
      this.sortedArticles = previewCache.chunk(8);
      this.processArticles(this.sortedArticles, element);
    }
    else {
      this.processProjects(previewCache, element);
    }
    
  }

  async processArticles(data, element) {
    //Currently cannot restrict
    //number of articles from api
    
    for (let d of data[this.articleChunk]) {
      let single = await cacheservice.returnCache('single-'+this.objType+'='+ d.name);
      element.appendChild(new SinglePage(d,single, 'preview').el); 
    }

    let b = document.createElement('button');
    b.type = 'button';
    b.innerText = 'Show More';
    b.className = 'moreButton';
    b.addEventListener("click", (e) => { this.moreArticles(e); });

    element.appendChild(b);
    window.scrollTo(0,0);
  

  }

  async moreArticles(e) {
    let y  = document.getElementsByClassName('more-button')[0];
    this.articleChunk++;
    if(this.sortedArticles[this.articleChunk]) {
      for (let sa of this.sortedArticles[this.articleChunk]) {
        let single = await cacheservice.returnCache('single-'+this.objType+'='+ sa.name);
        this.el.insertBefore(y,new SinglePage(d,single, 'preview').el); 
      }
    }
    
  }

  async processProjects(data, element) {

    for (let d of data) {    
      element.appendChild(new Preview(d, '', 'preview').el); 
      
    };

    window.scrollTo(0,0);

  }


  render() {  
    return `
    <div>
    <div>${this.showPreview()}</div>
    <div style='width:100%;display:flex;justify-content:space-around'>
    <button type='button'>Back</button><button type='button'>Next</button>
    </div>
    </div>
  `;}
}